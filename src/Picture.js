const Picture = (props)=>{
    return(
        <li>
            <h3>Title of art</h3>
            <img src={props.artObject.links.self} alt="props.artObject.title"/>
        </li>
    )
}

export default Picture;