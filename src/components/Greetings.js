import '../index.css'

/* how to create the space? between the lang and the children */

function Greetings (props) {
    return (
            
        <div className='card' >
          {props.lang === "de" && <p>Hallo</p>}
          {props.lang === "en" && <p>Hello </p>}
          {props.lang === "es" && <p>Hola</p>}
          {props.lang === "fr" && <p>Salut</p>}
         {props.children}
        </div>
        
        )
}
 
export default Greetings;