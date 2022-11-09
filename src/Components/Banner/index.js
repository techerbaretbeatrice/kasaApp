import "../../Components/Banner/style.css"

const Banner = (props) => {
    const { slogan, fileName, size } = props
    return <div className={`banner-style ${size}`} >
        <div className={`img-container ${size}`} >
            <img className={`border-style ${size}`} src={`${fileName}`} alt="" />
            <span className="slogan">{slogan}</span>
        </div>
    </div>

}

export default Banner