import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/foods'}>Foods</NavLink>
            </nav>
           
        </div>
    );
};

export default Header;