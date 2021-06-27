/* how to grab the # color?? */

function CreditCard (props){
    
    return(
        <div className= 'card' style= {{backgroundColor : `${props.bgColor}`}}> 
            <h3>{props.type}</h3>
            <p>{props.number}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
 
export default CreditCard;
