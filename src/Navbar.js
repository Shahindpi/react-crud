import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/create">New blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>
        </div>
    )
}