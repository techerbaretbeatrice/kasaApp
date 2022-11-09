import angleright from '../../assets/angleright.svg'
import angleleft from '../../assets/angleleft.svg'
import "./style.css"
import { useState } from 'react'

const Slider = (props) => {
    const [idx, setIdx] = useState(0)
    const next = () => {
        if (idx === props.pictures.length - 1) {
            setIdx(0)
        } else {
            setIdx(idx + 1)
        }
    }
    const previous = () => {
        if (idx === 0) {
            setIdx(props.pictures.length - 1)
        } else {
            setIdx(idx - 1)
        }
    }

    return <div className="slider-container">
        <div className='slide-container'>
            {props.pictures.map((picture, index) => <img className={`image-slide ${index === idx ? 'show' : "hide"}`} id={`slide_${index}`} src={picture} alt="" key={`${picture}-${index}`} />)}
        </div>

        {props.pictures.length > 1 && <img className="angle-left" src={angleleft} alt="" onClick={previous} />}
        {props.pictures.length > 1 && <img className="angle-right" src={angleright} alt="" onClick={next} />}

        <div className='pagination'>{`${idx + 1}/${props.pictures.length}`}</div>
    </div>
}

export default Slider