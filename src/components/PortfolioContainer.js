import React, { useState } from 'react';
import Navbar from './Navbar';
// import Header from './Header';
import Contact from './pages/Contact';
import Project from './pages/Project';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './Footer';






export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
        if (currentPage === 'Project'){
            return <Project />;
        }
        if (currentPage === 'About'){
            return <About />;
        }
    }

//the return that loads the page inside the root div. This page will contain renderpage and header, navbar, and footer
const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
      <div>
        <Navbar handlePageChange={handlePageChange} />
      </div>
      <div>
        {renderPage()}
      </div>
      <div>
        <Footer/> </div>
    </div>
  )



}