import './gym.css'
import Hostel1 from '../assets/hostel-1.jpg'
import Hostel2 from '../assets/gallery2.jpeg'
import Hostel3 from '../assets/hostel3.jpg'
import Image from '../assets/hostelbackground.jpg'

function App() {
    return (
      <div className='hos'>

        <div className="hostel">
        
        <h1>Hostel</h1>
      
        <div className="row">
          <div className="hostel-column">
            <h3 >Rooms</h3>
            <img src={Hostel1} alt=''/>
            <p><b>We ensure hygienic living conditions and  cater with. We ensure students feel the home touch.</b> </p>
          </div>
          <div className="hostel-column">
            <h3>Infrastructure</h3>
            <img src={Hostel2} alt=''/>
            <p><b>Safe and secure residential facility for boys and girls.</b></p>
          </div>
          <div className="hostel-column">
            <h3>Enviornment</h3>
            <img src={Hostel3} alt=''/>
            <p><b>Friendly enviornment , with lots of sports and activities options inside hostel campus.</b> </p>
          </div>

        </div>
      </div>
      </div>
      
      

     
      
    );
  }
  
  export default App;