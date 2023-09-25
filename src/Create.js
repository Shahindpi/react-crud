import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Create(){

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsLoading(true);

        fetch('http://localhost:8000/posts', {
            method : 'POST',
            headers : {"content-type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            setIsLoading(false);
            navigate('/');
        })
    }
    
    return(
        <div className="create-blog">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value) }
                    />
                <label>Blog message</label>
                <textarea  
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}