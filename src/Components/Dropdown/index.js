import "./style.css"
import angledown from "../../assets/angledown.svg"
import { useState } from "react"


const Dropdown = (props) => {
    const { size, children, label } = props
    const [open, setOpen] = useState(false)

    return <>
        <div className={`dropdown-style ${size} ${open ? "open" : "closed"}`}>
            <h3 className="dropdown-title">{label}</h3>
            <img className="angledown-style" src={angledown} alt="" onClick={() => setOpen(!open)} />
        </div>
        {open && <div className={`dropdown-content ${size}`}>
            {children}
        </div>}
    </>


}

export default Dropdown