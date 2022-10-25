import star from '../../assets/star.svg'
import "./style.css"

const Rating = () => {
    return <div className="rating-style">
        <img className="star" src={star} alt="" />
        <img className="star" src={star} alt="" />
        <img className="star" src={star} alt="" />
        <img className="star" src={star} alt="" />
        <img className="star" src={star} alt="" />
    </div>
}

export default Rating