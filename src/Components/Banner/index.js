import "../../Components/Banner/style.css"

const Banner = (props) => {
    const { slogan, fileName } = props
    return <div className="banner-style">
        <div className="img-container">
            <img className="border-style" src={`${fileName}`} alt="" />
            <span className="slogan">{slogan}</span>
        </div>
    </div>

}

export default Banner