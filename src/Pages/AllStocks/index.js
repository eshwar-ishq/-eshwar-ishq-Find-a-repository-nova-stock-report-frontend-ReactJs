import Header from '../Header';
import Table from '../Table_data';
import Search from '../SearchBar';
import NavigationButtons from '../NavigationBut';
import Sidebar from '../Sidebar';
import HeadPaginationButt from '../../Container/HeaderPagiButt';
import { useState } from 'react';

function AllStocks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategory, setselectedCategory] = useState('Item_name')
  const [filteredData, setFilteredData] = useState([]);

  console.log(searchValue);
  console.log(selectedCategory);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // console.log("in allstock component",newPage);
  }

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value)
    
    // Filter data based on the search query and selected category
    // const newData = allStocksData.filter(item =>
    //   item[selectedCategory].toLowerCase().includes(value)
    // );

    // setFilteredData(newData);  
  }

  const handleCategoryChange = (e) => {
    setselectedCategory(e.target.value)
    console.log(selectedCategory);

  }

  const scrollTop = document.querySelector('.scroll_top')

  // window.addEventListener("scroll", scrollFunction)
  // function scrollFunction() {
  // 	if (window.pageYOffset > 100) {
  // 		scrollTop.classList.add('active');
  // 	} else {
  // 		scrollTop.classList.remove('active');
  // 	}
  // }

  return (
    <HeadPaginationButt>
      {(currentPage, handlePageChange) => (
        <>
          <Search 
          Locations="All Stocks"
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
          />
          <Table 
          page={currentPage}
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
    //         <Header />
    //         <Search Locations="All Stocks" />
    //         <Table page={currentPage} />
    //       </div>
    //     </div>
    //     <Sidebar />

    //     {/* Scroll to top button */}
    //     {/* <div>
    //       <a href="#header" className="scroll_top">
    //         <i className="fa-solid fa-chevron-up"></i>
    //       </a>
    //     </div> */}

    //     {/* Pagination container */}
    //   </div>
    //   <NavigationButtons currentPage={currentPage} onPageChange={handlePageChange} />
    // </div>
  );
}

export default AllStocks;
