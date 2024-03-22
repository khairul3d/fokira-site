import { Link, NavLink } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return (
        <div>
         <nav>
         <h1>Navber</h1>
         <a href="/">About</a>
         <NavLink to="/home">Home</NavLink>
         <NavLink to="/contect">Contect</NavLink>
         <NavLink to="/users">Users</NavLink>
         </nav>
        
            
        </div>
    );
};

export default Navber;