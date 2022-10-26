import {useState} from 'react';

const Counter = ()=>{
    //initialise state to track the amount of likes
    const [likesCount, setLikesCount] = useState(0);

    //define an event handler which will update state when called
    const handleClick = ()=>{
        setLikesCount(likesCount+1);
        console.log(likesCount);
    }

    return(
        <section>
            <p>Show us that you like this page!</p>
            <button onClick={handleClick}>Click for the likes!</button>
        </section>
    );
}

export default Counter;