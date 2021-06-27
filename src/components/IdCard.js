import '../index.css'

/* how to be able to ad newdate on the app? */

function IdCard (props) {
   return (
        
    <div className="card">
        <div className= "idCardImg"><img src={props.picture} alt='Profile'></img></div>
        <div className= "idCardInfo">
            <p><b>First Name: </b>{props.firstName}
            <br></br>
            <b>Last Name: </b>{props.lastName}
            <br></br>
            <b>Gender: </b>{props.gender}
            <br></br>
            <b>Height: </b>{props.height}
            <br></br>
            <b>Birth: </b>{props.birth}
            </p>
        </div>
    </div>
       
    )
}
 
export default IdCard;

