import React, { useState } from 'react'
import Header from '../Header';
import Search from '../SearchBar';
import Table from '../Table_data';
import Sidebar from '../Sidebar';
import NavigationButtons from '../NavigationBut';
import HeadPaginationButt from '../../Container/HeaderPagiButt';

const Richmond = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setselectedCategory] = useState('Item_name');
  const [filteredData, setFilteredData] = useState([]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value)  
  }

  const handleCategoryChange = (e) => {
    setselectedCategory(e.target.value)

  }
  return (
    <HeadPaginationButt>
      {(currentPage, handlePageChange) => (
        <>
          <Search 
          Locations="Richmond"
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          />
          <Table 
          page={currentPage} 
          LocationName="Richmond"
          searchValue={searchValue}
          selectedCategory={selectedCategory}
          filteredData={filteredData}
          />
        </>
      )}
    </HeadPaginationButt>
    // <div className="App">

    //   <div id="wrapper">
    //     <div id="main">
    //       <div className="inner">
    //           <Header />
    //           <Search Locations="Richmond"/>
    //           <Table />

    //       </div>
    //     </div>
    //     <Sidebar />

    //   </div>
    //   <NavigationButtons />
    // </div>
  )
}

export default Richmond
