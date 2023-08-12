import './gym.css'
import lib1 from '../assets/gallery5.jpeg'
import lib2 from '../assets/lib2.jpg'
function Library(){
    return (
      <div className='lib'> 
    
      <div className="hostel">
        <h1>Library</h1>
       
        <div className="row">
          <div className="hostel-column">
            <h3 > Good Seating Capacity</h3>
            <img src={lib1} alt=''/>
            <div className='pic'>
      
            </div>
            <p><b>With a good seating capacity & a peaceful enviornment to ease the process of learning.</b></p>
          </div>
          <div className="hostel-column">
            <h3>Books & Accessibility</h3>
            <img src={lib2} alt=''/>
            <p><b>Providing access to resources and materials which allows students to further their learning, understanding & research.</b> </p>
          </div>
          
        </div>
      </div>
      
    
      </div>
    );
  }
  
  export default Library;