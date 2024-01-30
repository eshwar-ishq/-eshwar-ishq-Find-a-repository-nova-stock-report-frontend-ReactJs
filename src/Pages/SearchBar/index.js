import React from 'react'

const Search = ({ Locations, onCategoryChange, onSearchChange }) => {
  return (
    <div>
      <div id="header_space_bar">
        <h2>{Locations}</h2>
        <div class="select">
          <select name="" id="category" onChange={onCategoryChange}>
            <option value="Item_name">Item_name</option>
            <option value="MSKU">MSKU</option>
            <option value="Quantity">Quantity</option>
            <option value="Brand">Brand</option>  
            <option value="Sheet_name">Sheet_name</option>
            <option value="Category">Category</option>
            <option value="Product_Category">Product_Category</option>
          </select>
          <section id="search" class="alt">
            <form method="post" action="#">
              <input
                type="text"
                class="Home_searchBar"
                id="myInput"
                onInput={onSearchChange}
                name="query"
                placeholder="Search" />
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Search
