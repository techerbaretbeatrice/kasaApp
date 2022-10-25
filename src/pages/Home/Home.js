import Header from "../../Components/Header"
import Banner from "../../Components/Banner"
import Gallery from "../../Components/Gallery"
import Footer from "../../Components/Footer"
import logements from '../../logements.json'
import "./style.css"



const HomePage = () => {
    console.log(logements)
    return <div className="homePage-style">
        <Header />
        <Banner slogan="Chez vous, partout et ailleurs" fileName="/images/seecost.jpg" />
        <Gallery logements={logements} />
        <Footer />
    </div>

}
export default HomePage