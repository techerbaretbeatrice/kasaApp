import "./style.css"

const Tag = (props) => {

    return <div className="tag-container" >{
        props.tags.map((tag, index) => <div className="tag-style" key={`${tag}-${index}`}>{tag}</div>)
    }
    </div>
}

export default Tag