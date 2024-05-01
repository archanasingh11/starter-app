import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
         <nav className="nav">
        <ul>
            <li>
                <Link to="/signup" className='nav-link'>Signup</Link>
            </li>
            <li>
                <Link to="/login" className='nav-link'>Login</Link>
            </li>
        </ul>
    </nav>

    );
}