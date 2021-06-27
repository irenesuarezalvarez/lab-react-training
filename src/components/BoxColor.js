/* how to grab the # color?? */

function BoxColor (props){
    
    return(
        <div className= 'card' style= {{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}> 
        rgb ({props.r}, {props.g}, {props.b})
        <br></br>
        f#
        </div>
    )
}
 
export default BoxColor;
