import star from '../../assets/star.svg'
import star_yellow from '../../assets/star_yellow.svg'
import "./style.css"

const Rating = (props) => {

    const { rate } = props;

    return <div className="rating-style">
        <img className='star-img' src={rate >= 1 ? star_yellow : star} alt="" />
        <img className='star-img' src={rate >= 2 ? star_yellow : star} alt="" />
        <img className='star-img' src={rate >= 3 ? star_yellow : star} alt="" />
        <img className='star-img' src={rate >= 4 ? star_yellow : star} alt="" />
        <img className='star-img' src={rate >= 5 ? star_yellow : star} alt="" />
    </div>
}

export default Rating