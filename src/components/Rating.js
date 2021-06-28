import React from 'react';
import {FaStar} from 'react-icons/fa';


function Rating (props){
    
    return <div>

    {[...Array(5)].map((star, i)=>{
        const ratingValue = Math.round(props.children);
        const counter = i ;
        return <FaStar color={ counter < ratingValue ? "#ffc107" : "#e4e5e9"} size={40}/>
    })}
    
    </div>


};

export default Rating