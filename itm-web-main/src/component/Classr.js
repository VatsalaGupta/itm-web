import './gym.css'
import classr from '../assets/classroom.jpg'
import bio from '../assets/bio.jpg'
import chem from '../assets/chem.jpg'

function Classroom() {
    return (
      <div className='cl'>
          
    
      <div className="hostel">
        <h1>Classrooms & Laboratories</h1>
        <div className="row">
          <div className="hostel-column">
            <h3 >Classrooms</h3>
            <img src={classr} alt=''/>
            <p><b>Fully furnished & interactive classrooms to make learing fun. </b></p>
          </div>
          <div className="hostel-column">
            <h3>Biology Lab</h3>
            <img src={bio} alt=''/>
            <p><b>Fully eguipped laboratory to provide students with a good hands on experience .</b> </p>
          </div>
          <div className="hostel-column">
            <h3>Chemistry Lab</h3>
            <img src={chem} alt=''/>
            <p><b>Fully eguipped laboratory to provide students with a good hands on experience .</b></p>
          </div>

        </div>
      </div>
      
    
      </div>
    );
  }
  
  export default Classroom;