import logo from '../../assets/logo.svg'
import "./style.css"

const Footer = () => {
    return (
        <div className='footer-style'>
            <img className='logo-size' src={logo} alt="logo" />
            <span className='copyright'>©2020 kasa. All right reserved</span>
        </div>
    );
}

export default Footer