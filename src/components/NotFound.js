import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="not-found">
            <h3>Not found the page</h3>
            <p>The pages you are looking for is not found!</p>
            <p>Please go back to <Link to="/">Home page</Link></p>
        </div>
    )
}