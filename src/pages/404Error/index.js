import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import {
    Link
} from "react-router-dom";
import "../404Error/style.css"

const ErrorPage = () => {
    return <div className='errorPage-style'>
        <Header />
        <div className='message-box'>
            <span className='error'>404</span>
            <p className='message'>Oups! la page que vous demandez n'existe pas</p>
            <Link to="/" className='link-home'>Retouner sur la page d'acceuil</Link>


        </div>
        <Footer />
    </div>
}

export default ErrorPage