
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home(){
    // const [blogs, setBologs] = useState([
    //     {title : "title1", body: "demo body", author: "Mario", id:1}
    // ]);

    const { data:blogs, isLoading, error } = useFetch('http://localhost:8000/posts');

    // useEffect(() => {
    //     setTimeout(() =>{
    //         fetch('http://localhost:8000/posts')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setBologs(data);
    //             setIsLoading(false);
    //         });
    //     }, 300);
    // }, []);

    return(
        <div className="home-page">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'shahin')} title="Shahin's Blogs" handleDelete={handleDelete} />} */}
        </div>
    )
}