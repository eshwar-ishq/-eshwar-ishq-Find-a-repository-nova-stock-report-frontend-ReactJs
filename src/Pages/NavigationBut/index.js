import React from 'react'

const NavigationButtons = ({currentPage, onPageChange}) => {
  
  const NextButton = () => {
    onPageChange(currentPage + 1);
    // console.log("clicked", currentPage)
  }
  // console.log(onPageChange);

  const PrevButton = () => {
    onPageChange(currentPage - 1);
  }
  return (
    <div>
      <div className="pagination_container">
          <ul className="pagination">
            <li><button type="button" id="prev_Button" onClick={PrevButton}  className="button">Previous</button></li>
            <li><button type="button" id="next_Button" onClick={NextButton}  className="button">Next</button></li>
          </ul>
        </div>
    </div>
  )
}

export default NavigationButtons
