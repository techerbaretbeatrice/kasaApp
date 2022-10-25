import Header from "../../Components/Header"
import Banner from "../../Components/Banner"
import Footer from "../../Components/Footer"
import Dropdown from "../../Components/Dropdown"
import "./style.css"

const AboutPage = () => {
    return <div className="aboutPage-style">
        <Header />
        <Banner slogan="" fileName="/images/unsplash.jpg" />
        <Dropdown size="long" label="Fiabilité">Les annonces postées sur kasa garantissent une fiabilité totale.Les photos sont conformes aux logements et les informations sont régulièrement vérifiées par nos équipes. </Dropdown>
        <Dropdown size="long" label="Respect">La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.</Dropdown>
        <Dropdown size="long" label="Service">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.</Dropdown>
        <Dropdown size="long" label="Responsabilité">La sécurité est la priorité de kasa. Aussi pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Dropdown>
        <Footer />

    </div>
}

export default AboutPage