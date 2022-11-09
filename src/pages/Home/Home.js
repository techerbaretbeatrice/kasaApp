import Header from "../../Components/Header"
import Banner from "../../Components/Banner"
import Gallery from "../../Components/Gallery"
import Footer from "../../Components/Footer"
import { useEffect, useState } from "react"
import "./style.css"



const HomePage = () => {
    const [logements, setLogements] = useState(null)
    useEffect(() => {

        if (logements !== null) return
        const promise = fetch("http://localhost:3000/logements.json")
        promise.then((resultat) => {
            return resultat.json()
        }).then((jsonResult) => {
            setLogements(jsonResult)
        })
    })
    if (logements === null) {
        return "en cours de chargement"
    }

    return <div className="homePage-style">
        <Header />
        <Banner slogan="Chez vous, partout et ailleurs" fileName="/images/seecost.jpg" size="small-height" />
        <Gallery logements={logements} />
        <Footer />
    </div>

}
export default HomePage