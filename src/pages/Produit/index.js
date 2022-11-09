
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Slider from "../../Components/Slider"
import Tag from "../../Components/Tag"
import ProductTitle from "../../Components/ProductTitle"
import ProductLocation from "../../Components/ProductLocation"
import Host from "../../Components/Host"
import "./style.css"
import Rating from "../../Components/Rating"
import { useNavigate, useParams } from "react-router-dom"
import Dropdown from "../../Components/Dropdown"
import { useEffect, useState } from "react"

const ProductPage = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [accomodationDatas, setAccomodationData] = useState(null)

    useEffect(() => {
        const promise = fetch("http://localhost:3000/logements.json")
        promise.then((resultat) => {
            return resultat.json()
        }).then((jsonResult) => {
            const id = params.id
            const accomodation = jsonResult.find(logement => logement.id === id)
            if (accomodation === undefined) {
                navigate("/404")
            } else {
                setAccomodationData(accomodation)
            }
        })
    }, [navigate, params.id])

    if (accomodationDatas === null) {
        return "en cours de chargement"
    }

    return <div className="productPage-style">
        <Header />
        <Slider pictures={accomodationDatas.pictures} />
        <div className="infos-box">
            <div className="infos-box-left">
                <ProductTitle title={accomodationDatas.title} />
                <ProductLocation location={accomodationDatas.location} />
                <Tag tags={accomodationDatas.tags} />
            </div>
            <div className="infos-box-right">
                <Host host={accomodationDatas.host} />
                <Rating rate={accomodationDatas.rating} />

            </div>
        </div>
        <div className="dropdown-container">
            <div className="dropdown-left">
                <Dropdown size="small" label="Description"><div className="dropdown-description">{accomodationDatas.description}</div></Dropdown>
            </div>
            <div className="dropdown-right">
                <Dropdown size="small" label="Equipement"><ul>{accomodationDatas.equipments.map((equipment, index) => <li className="style-type" key={`${equipment}-${index}`}>{equipment}</li>)}</ul></Dropdown>
            </div>
        </div>
        <Footer />
    </div>

}

export default ProductPage