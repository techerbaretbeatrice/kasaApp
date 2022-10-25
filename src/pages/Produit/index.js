
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Slider from "../../Components/Slider"
import Tag from "../../Components/Tag"
import ProductTitle from "../../Components/ProductTitle"
import ProductLocation from "../../Components/ProductLocation"
import Host from "../../Components/Host"
import "./style.css"
import Rating from "../../Components/Rating"
import logements from "../../logements.json"
import { useParams } from "react-router-dom"
import Dropdown from "../../Components/Dropdown"


const ProductPage = () => {
    const params = useParams()
    const id = params.id
    console.log(params)
    const accomodationDatas = logements.find(logement => logement.id === id)
    console.log(accomodationDatas)

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
                <Dropdown size="small" label="Description">{accomodationDatas.description}</Dropdown>
            </div>
            <div className="dropdown-left">
                <Dropdown size="small" label="Equipement">{accomodationDatas.equipments.map(equipment => equipment)}</Dropdown>
            </div>
        </div>
        <Footer />
    </div>

}

export default ProductPage