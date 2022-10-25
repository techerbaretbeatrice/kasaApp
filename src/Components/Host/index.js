import "./style.css"

const Host = (props) => {
    return <div className=" host-container">
        <div className="host-infos">
            <span className="host-name" >{props?.host?.name}</span>
            <div className="img">
                <img src={props?.host?.picture} alt={props?.host?.name} className="host-picture" />
            </div>
        </div>
    </div>

}

export default Host