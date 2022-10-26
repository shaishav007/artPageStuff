import Picture from "./Picture";
const Gallery = (props)=>{
    return(
        <section className="gallery">
            <h2>Gallery</h2>
            {

                console.log(props.arrayOfArt)
            
            // props.arrayOfArt.map((artObject)=>{
            //     return <Picture artInfo={artObject} key={artObject.id}/>
            // })
            }
        </section>
    )
}

export default Gallery;