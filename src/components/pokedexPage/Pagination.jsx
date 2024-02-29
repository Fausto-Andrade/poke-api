import React from 'react';

const Pagination = ({ countPage, setCountPage, total }) => {

const handlePrev = () => {
    if (countPage > 1) {
        setCountPage(countPage  - 1);
    }
};

const handleNext = () => {
    if (countPage < total) {
    setCountPage(countPage + 1);
    }
};

  return (
    <div className='pagination'>
        <button onClick={handlePrev}>Prev</button>
        <span>{countPage}/{total}</span>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination;
