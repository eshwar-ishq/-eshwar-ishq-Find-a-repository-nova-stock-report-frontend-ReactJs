import React, { useState } from 'react'
import Search from '../SearchBar';
import Table from '../Table_data';
import HeadPaginationButt from '../../Container/HeaderPagiButt';

const Belmont = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategory, setselectedCategory] = useState('Item_name')
  const [filteredData, setFilteredData] = useState([]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
          Locations="Belmont"
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          />
          <Table 
          page={currentPage} 
          LocationName="Belmont"
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
    //           <Search Locations="Belmont"/>
    //           <Table LocationName="Belmont" page={currentPage}/>

    //       </div>
    //     </div>
    //     <Sidebar />

    //   </div>
    //   <NavigationButtons currentPage={currentPage} onPageChange={handlePageChange}/>
    // </div>
  )
}

export default Belmont
