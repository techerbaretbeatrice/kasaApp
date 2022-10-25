import headinglogo from '../../assets/headinglogo.svg'
import "./style.css"
import {
    Link
} from "react-router-dom";

const Header = () => {
    return <header className='header'>
        <div className='header-style'>
            <img className='logo-original' src={headinglogo} alt="logo in header" />
            <nav className='nav-box'>
                <ul className='link-list'>
                    <li className='btn-nav btn-underline'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='btn-nav'>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header