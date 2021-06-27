import '../index.css'

function Random (props) {
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
   return (
        
    <div className="card">
      <p><b>Random value between {props.min} and {props.max} => </b>{getRandomArbitrary(props.min, props.max)}</p>
    </div>
       
    )
}
 
export default Random;

