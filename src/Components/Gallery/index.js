import { Link } from "react-router-dom"
import "../../Components/Gallery/style.css"
import Thumb from "../Thumb"

const Gallery = (props) => {
    return <div className="gallery-style">
        <div className="gallery-box">
            {
                props.logements.map(logement => <Link className="thumb-link" to={`produits/${logement.id}`} key={logement.id}> <Thumb logement={logement} /></Link>)
            }

        </div>
    </div>
}

export default Gallery