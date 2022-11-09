import headinglogo from '../../assets/headinglogo.svg'
import "./style.css"
import {
    NavLink
} from "react-router-dom";

const Header = () => {
    return <header className='header'>
        <div className='header-style'>
            <img className='logo-original' src={headinglogo} alt="logo in header" />
            <nav className='nav-box'>
                <ul className='link-list'>
                    <li className='btn-nav '>
                        <NavLink end className={({ isActive }) => (isActive ? "activeLink" : "")} to="/">Accueil</NavLink>
                    </li>
                    <li className='btn-nav'>
                        <NavLink end className={({ isActive }) => (isActive ? "activeLink" : "")} to="/about">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header