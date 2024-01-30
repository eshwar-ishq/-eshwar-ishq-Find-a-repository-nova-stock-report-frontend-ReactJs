import React, { useState } from 'react'
import Search from '../SearchBar';
import Table from '../Table_data';
import HeadPaginationButt from '../../Container/HeaderPagiButt';

const Haridwar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setselectedCategory] = useState('Item_name');
  const [filteredData, setFilteredData] = useState([]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // console.log("in allstock component",newPage);
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
          Locations="Haridwar"
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          />
          <Table 
          page={currentPage} 
          LocationName="Haridwar"
          searchValue={searchValue}
          selectedCategory={selectedCategory}
          filteredData={filteredData}
          />
        </>
      )}
    </HeadPaginationButt>
  )
}

export default Haridwar

