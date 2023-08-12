import React from 'react'
import './page6.css'
const Page6 = () => {
  return (
    <div className='main'>
      
      <div className="map" >
        
          <iframe className="map_location"
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.166269913059!2d83.4319115753252!3d27.11957247652445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996ae08d08e9159%3A0x426445c618d189d9!2sITM%20Group%20of%20Institutions%2C%20Maharajganj!5e0!3m2!1sen!2sin!4v1689753517670!5m2!1sen!2sin"
            }></iframe>
      </div>
      <div className='contact'>
            <h3>Contact Us On:</h3>
            <p>
            Admission : +91-xxxxx7676
            <br></br>
            Admission Whatsapp Number : 
            <br></br>
            +91-355xxxxxx
            <br></br>
            Reception : +91-9554964674
            <br></br>
            Email Us : 
            <br></br>
            itmmanagement@gmail.com
            </p>
      </div>
    </div>
        
  )
}

export default Page6
