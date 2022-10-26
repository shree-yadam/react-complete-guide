import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const [filterYear, setFilterYear] = useState('2022');

  function filterYearChangeHandler(e) {
    console.log(e.target.value);
    setFilterYear(e.target.value);
    props.onFilterYear(e.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={filterYear} onChange={filterYearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;