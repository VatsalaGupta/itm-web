import React from 'react'
import Hero_ITM from './Home/Hero_ITM'
import Page1 from './Home/Page1'
import Facilities_itm from './Home/Facilities'
import Vision from './Home/Vision'
import Page7 from './Home/Page7'
import Page6 from './Home/Page6'
import Careerkick1 from '../assets/regulatory1.jpg'
import Careerkick2 from '../assets/regulatory2.jpg'
function Home() {
  return (
    <div>
       <Hero_ITM/>
      <Page1 />
       <Facilities_itm />
      <Vision/>
      {/* <div className='crck'>
        <div><img src={Careerkick1} className='img__1'/></div>
        <div><img src={Careerkick2} className='img__2'/></div>
      </div> */}
      {/* <Page4 /> */}
      <Page7 />
      <Page6 />
      
    </div>
  )
}

export default Home
