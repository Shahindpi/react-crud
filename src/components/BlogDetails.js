import { useParams } from "react-router-dom"
import useFetch from "./useFetch";

export default function BlogDetails(){

    const { id } = useParams();
    const {data:blog, isLoading, error} = useFetch('http://localhost:8000/posts/' + id);

    return(
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>Name: {blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    <div>Details: {blog.body}</div>
                </article>
            )}
        </div>
    )
}