import React from 'react'
import { Routes, Route } from 'react-router-dom';
import mail from './assets/email.png'
import call from './assets/call.avif'
import Whatsapp from './assets/whatsapp_icon.png'
import './App.css';
import Home from './component/Home';
import VisionAndMission from './Pages/VisionAndMission';
import Page5 from './component/Page5';
import LogoITM from '../src/assets/Logo_ITM.jpeg'
import Header from './common/Header'
import OurInsipiration from './Pages/OurInspiration';
import Overview from './Pages/Overview';
import Courses from './Pages/Courses';
import Department from './Pages/Departments'
import Ayurvedi from './Pages/Ayurvedi'
import Prebook from './component/Prebook';
import ContactUs from './Pages/ContactUs';
import Hostel from './component/Hostel'
import Class from './component/Classr'
import Gym from './component/Gym'
import Herbal from './component/Herbalgarden'
import Library from './component/Library'
import Gallery from './Pages/Gallery'
import Day from './Pages/Day'
import Azadi from './Pages/Azadi'
import Apply from './Pages/Apply'
import PDFViewer from './component/PDFViewer ';


// import Pdf from './component/Pdf';
function App() {
  const images = [
    './Images/14.jpeg',
    './Images/15.jpeg',
    './Images/16.jpeg',

    // Add more image URLs here
  ];

  const pdfUrl = 'C:\Users\VATSALA\Downloads\itm-web-main (1)\itm-web-main\public\Images\BAMS 1st YEAR JUNIORS.docx';
  const pdfUrl1='C:\Users\VATSALA\Downloads\itm-web-main (1)\itm-web-main\public\Images\BAMS 1st YEAR SENIORS.docx';

  return (

    <div className="App">

      {/* <Prebook/> */}
      <div className="header_itm">
        <img src={LogoITM} className="logo_itm" />
        <div className="right_side_itm">
          <div className="right_side_itm1">
            <span className='mobile_bsdj' ><img src={call} className='mobile_icon' />
              <span className='mobile_number'><a href="tel:+917881106480" >917881106480</a></span></span>
            {/* <span className='email_bsdj_top'><img src={mail} className='email_icon'/><span className='email'><a href="mailto:itmayurvediccollege@gmail.com" >itmayurvediccollege@gmail.com</a></span></span> */}
            <span className='email_bsdj_top'> <a href="https://api.whatsapp.com/send?phone=7881106480&text=Hello."
              target="_blank"><img src={Whatsapp} className='email_icon' /></a>  <b>Chat with us</b></span>
          </div>
          <div className="right_side_itm2">
            <a href="/apply">
              <button className="apply_now">Book Your Sheet</button>
            </a>
          </div>
        </div>


        {/* <div className='top_bsdj'>
        <span className='touch_bsdj'>Get in touch : :</span>
        <span className='email_bsdj_top'><img src={mail} className='email_icon'/><span className='email'><a href="mailto:sbsdaddujiaydcollege@gmail.com" >sbsdaddujiaydcollege@gmail.com</a></span></span>
        <span className='mobile_bsdj' ><img src={call} className='mobile_icon'/>
        <span className='mobile_number'><a href="tel:+917881106480" >917881106480</a></span></span>
      </div> */}

      </div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Vision' element={<VisionAndMission />} />
        <Route path='/leadership' element={<OurInsipiration />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Department' element={<Department />} />
        <Route path='/Ayurvedi' element={<Ayurvedi />} />
        <Route path='/Contact' element={<ContactUs />} />
        <Route path='/hostel' element={<Hostel />} />
        <Route path='Classroom' element={<Class />} />
        <Route path='/hostel' element={<Hostel />} />
        <Route path='/lab' element={<Library />} />
        <Route path='/Herbal' element={<Herbal />} />
        <Route path='/gym' element={<Gym />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/ayurvedday' element={<Day />} />
        <Route path='/Azadi' element={<Azadi />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/PDFViewer' element={<PDFViewer />} />
      </Routes>
      {/* <PDFViewer pdfUrl={pdfUrl} /> */}
      <Page5/>
      

    </div>



  );
}

export default App;

