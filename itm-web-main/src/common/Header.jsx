import React, { useState } from 'react';
import './header.css'
import CancelIcon from '../assets/cancel_icon.jpg'
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='bg-gradient-to-r from-red-500 to-red-500'>
      <div className='flex justify-between items-center px-6 py-3 md:px-10'>
        {/* <a href="/" className='text-white font-bold text-lg'>Your Logo</a> */}
        {!dropdownOpen && <>
        {/* <img src={logo} alt='' className='text-white font-bold text-lg h-24 w-36'/> */}

        
        <button className='md:hidden' onClick={toggleDropdown}>
  {dropdownOpen ? (
    <img src={CancelIcon} alt='Close' className='text-white h-6 w-6 z-0' />
  ) : (
    <svg
      className={`w-6 h-6 text-white ${dropdownOpen ? 'transform rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  )}
</button>

        {/* <button>
            <img className='cancel_icon' src={Cancel} alt='' onClick={toggleDropdown}/>
        </button> */}
        </>}
        <ul className={`md:flex ${dropdownOpen ? 'block' : 'hidden'}`}>
          <li>
            <a href="/" className='block py-2 px-4 md:px-2 text-black hover:bg-white-500'>Home</a>
          </li>
          <li> 
          <div className="dropdown">
             <button className='block py-2 px-4 md:px-2 text-black hover:bg-white-500'>About Us</button>
             <div class="dropdown-content">
                <a href="/overview">Overview</a>
                <a href="/Vision">Vision and mission</a>
                <a href="/leadership">Our Insipiration</a>
            </div>
          </div>
          </li> 
          
          <li> 
          <div className="dropdown">
             <button className='block py-2 px-4 md:px-2 text-black hover:bg-white-500'>Academics</button>
             <div class="dropdown-content">
                <a href="/Courses">Courses</a>
                <a href="/Department">Departments</a>
                {/* <a href="/FacilitiesOffered">Facilities</a> */}
            </div>
          </div>
          </li> 
          <li>
            <a href="/PDFViewer" className='block py-2 px-4 md:px-2 text-black hover:bg-white-500'>NCSIM Mandates</a>

          </li>
           <li>
          <div class="dropdown">
             <button className='block py-2 px-4 md:px-2 text-black hover:bg-white-500'>Facility</button>
              <div class="dropdown-content">
                <a href="/hostel">Hostels</a>
                <a href="/lab">Library</a>
                {/* <a href="#">Hospital</a> */}
                <a href="/Herbal">Herbal Gardens</a>
                <a href="/gym">Gym</a> 
                <a href="/Classroom">Classroom</a>
             </div>
          </div>
          </li>
        
          <li>
          <div class="dropdown">
             <button className='block py-2 px-4 md:px-2 text-black hover:bg-white-500'>News and Events</button>
              <div class="dropdown-content">
                <a href="/ayurvedday">Har Din Har Ghar Ayurved #Ayurveda Day</a>
                <a href="/Ayurvedi">Best Ayurveda College in Uttar Pradesh</a>
                <a href="/Azadi">"AZADI KA AMRIT MAHOTSAV"- Awareness programme</a>
             </div>
          </div>
          </li>
          <li>
            <a href="/gallery" className='block py-2 px-4 md:px-2 text-black hover:bg-white-500'>Gallery</a>
          </li>
          <li>
            <a href="/Contact" className='block py-2 px-4 md:px-2 text-black hover:bg-white-500'>Contact Us</a>
          </li>
         
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;


// import React, { useState } from 'react';
// import './header.css'
// import Cancel from '../assets/cancel_icon.jpg'

// const Header = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <nav className='bg-gradient-to-r from-red-500 to-red-500'>
//       <div className='flex justify-between items-center px-6 py-3 md:px-10'>
//         {/* Add your logo or brand here */}
//         {/* <a href="/" className='text-white font-bold text-lg'>Your Logo</a> */}
        
//         {/* Use this button to toggle the dropdown */}
//         {!dropdownOpen && (
//           <button className='md:hidden' onClick={toggleDropdown}>
//             <svg
//               className={`w-6 h-6 text-white ${dropdownOpen ? 'transform rotate-180' : ''}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         )}
        
//         {/* Use this button to close the dropdown */}
//         {dropdownOpen && (
//           <button className='md:hidden' onClick={closeDropdown}>
//             <img className='cancel_icon' src={Cancel} alt='' />
//           </button>
//         )}
        
//         {/* Add the rest of your navigation links here */}
//         <ul className={`md:flex ${dropdownOpen ? 'block' : 'hidden'}`}>
//           {/* ... */}
//           {/* Your navigation links */}
//           {/* ... */}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;
