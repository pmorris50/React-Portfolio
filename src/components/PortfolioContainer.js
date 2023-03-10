import React, { useState } from 'react';
import Navbar from './Navbar';
// import Header from './Header';
import Contact from './pages/Contact';
import Project from './pages/Project';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './Footer';
import Resume from './pages/Resume';






export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
    
        if (currentPage === 'Contact'){
            return <Contact />;
        }
        if (currentPage === 'Project'){
            return <Project />;
        }
        if (currentPage === 'About'){
            return <About />;
        }
        if (currentPage === 'Resume'){
          return <Resume />;
      }
    }

//the return that loads the page inside the root div. This page will contain renderpage and header, navbar, and footer
const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
      <div>
        {/* <Navbar handlePageChange={handlePageChange} /> */}
      </div>
      <div>
        {renderPage()}
      </div>
      {/* <div>
       <div> <Footer/> </div>
    </div> */}
    </div>
  )



}