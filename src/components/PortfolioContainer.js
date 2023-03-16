import React, { useState } from 'react';
import Navbar from './Navbar';
// import Header from './Header';
import Contact from './pages/Contact';
import Project from './pages/Project';
import About from './pages/About';
import Footer from './Footer';
import Resume from './pages/Resume';
import './PortfolioContainer.css'
import NavigationBar from './Navbar';






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
 
  <div className= "mainBackground" >
      <NavigationBar  handlePageChange={handlePageChange} />
      
   
      <div className = "pageContent">
        {renderPage()}
        </div>
     
        <Footer/> 
       
    
    </div>
    
  )



}