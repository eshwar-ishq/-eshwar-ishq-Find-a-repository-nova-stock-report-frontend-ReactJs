import React, { useState } from 'react'
import Header from '../../Pages/Header'
import Search from '../../Pages/SearchBar'
import Sidebar from '../../Pages/Sidebar'
import Table from '../../Pages/Table_data'
import NavigationButtons from '../../Pages/NavigationBut'

const HeadPaginationButt = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

  return (
    <div className='App'>
      <div id='wrapper'>
            <div id='main'>
                <div className='inner'>
                    <Header />
                    {children(currentPage, handlePageChange)}
                </div>
            </div>
            <Sidebar />
      </div>
      <NavigationButtons currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  )
}

export default HeadPaginationButt;
