import './gym.css'
import gym from '../assets/gym.jpg'
function Gym() {
    return (
      <div className='gy'>
    
      <div className="hostel">
        <h1>Gym</h1>
        <div className="row">
          <div className="hostel-column">
            <h3 >Fully Equipped Gym</h3>
            <div className='pic'>
            <img src={gym} alt=''></img>
            </div>
            <p><b>Good gym facility that promotes physical activity, provides a safe , functional and a comfortable workout enviornment.</b> </p>
          </div>

        </div>
      </div>
      
    
      </div>
    );
  }
  
  export default Gym;