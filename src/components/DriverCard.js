import '../index.css'
import React from 'react';
import Rating from './Rating';



function DriverCard (props){
    
    return <div className=" card driverCard" style={{height:'250px'}}>
        <div>
            <img src= {props.img} alt="Driver" className = "driverPic"></img>
        </div>

        <div>
            <h2>{props.name}</h2>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model}{props.car.licensePlate}</p>
        </div>
    
    </div>


};

export default DriverCard

/* {[...Array(5)].map((star, i)=>{
    const ratingValue = Math.round(props.children);
    const counter = i ;
    return <FaStar color={ counter < ratingValue ? "#ffc107" : "#e4e5e9"} size={40}/>
})} */