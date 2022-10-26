//import the Hooks we need to accomplish our logic
import axios from 'axios';
import {useState, useEffect} from 'react';
import Gallery from './Gallery';

const ArtWall = ()=>{
    //is gallery Visible? set it 
    const[isGalleryVisible,setIsGalleryVisible] = useState(false);


    //initialise a state for the data from museum
    const[art,setArt]= useState([]);

    //trigger useEffect
    useEffect(()=>{
        console.log('art is being shown');

        //using axios lets make a request to our API
        axios({
            url:'https://www.rijksmuseum.nl/api/nl/collection/',

            //add params
            params:{
                imgonly:true,
                key:'sVzq1Gxu',
                toppieces:true           
            }

        }).then((data)=>{
            setArt(data);
        });


    },[]);

    //define the event handler which updates the isGalleryVisible state to be the opposite boolean value
    const handleClick= ()=>{
        setIsGalleryVisible(!isGalleryVisible);
    }

    return(
        <section>
            <h2>Ok but would you like to actually see some art?</h2>
            <button onClick={handleClick}>Click here for art!</button>

            {/* only show the gallery component if the isGalleryVisible state is true */}
            {
                isGalleryVisible
                ?<Gallery arrayOfArt={art}/> 
                :null
            }
        </section>
    )
}

export default ArtWall;