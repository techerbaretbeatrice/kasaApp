import angleright from '../../assets/angleright.svg'
import angleleft from '../../assets/angleleft.svg'
import "./style.css"

const Slider = (props) => {
    return <div className="slider-container">
        <div className="image-container">
            <div className='slide-container'>
                {props.pictures.map((picture, idx) => <img className='image-slide' id={`slide_${idx}`} src={picture} alt="" />)}
            </div>
            <img className="angle-left" src={angleleft} alt="" />
            <img className="angle-right" src={angleright} alt="" />
        </div>

    </div>
}

export default Slider