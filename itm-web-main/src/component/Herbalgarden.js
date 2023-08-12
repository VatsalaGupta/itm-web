import './gym.css'
import Herbal1 from '../assets/herbal1.jpg'
function Herbalgarden() {
    return (
      <div className='garden'>
    
      <div className="hostel">
        <h1>Enviornment Friendly Campus</h1>
        <div className="row">
          <div className="hostel-column">
            <h3 >Herbal Garden</h3>
            <div className='pic'>
            <img src={Herbal1} alt=''></img>
            </div>
            <p><b>A dedicated area in the campus devoted to herbs and medicinal plants to provide students with the knowledge of medicinal herbs.</b> </p>
          </div>
         
        </div>
      </div>
      
    
      </div>
    );
  }
  
  export default Herbalgarden;