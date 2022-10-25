import "../../Components/Thumb/style.css"


const Thumb = (props) => {
    return <div className="thumb-style" >
        <img className="thumb-img" src={props.logement.cover} alt="" />
        <div className="title-box" ><label >{props.logement.title}</label>
        </div>
    </div>

}

export default Thumb