import Header from "../../Components/Header"
import Banner from "../../Components/Banner"
import Footer from "../../Components/Footer"
import Dropdown from "../../Components/Dropdown"
import "./style.css"

const AboutPage = () => {
    return <div className="aboutPage-style">
        <Header />
        <Banner slogan="" fileName="/images/unsplash.jpg" />
        <div className="dropdown-box">
            <Dropdown size="long" label="Fiabilité"><div className="description">Les annonces postées sur kasa garantissent une fiabilité totale.Les photos sont conformes aux logements et les informations sont régulièrement vérifiées par nos équipes.</div> </Dropdown>
            <Dropdown size="long" label="Respect"><div className="description">La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.</div></Dropdown>
            <Dropdown size="long" label="Service"><div className="description">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.</div></Dropdown>
            <Dropdown size="long" label="Responsabilité"><div className="description">La sécurité est la priorité de kasa. Aussi pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div></Dropdown>
        </div>
        <Footer />

    </div>
}

export default AboutPage