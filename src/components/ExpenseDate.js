function ExpenseDate(props) {
  const {date} = props;

  const month = date && date.toLocaleDateString('en-US', { month: 'long'});
  const day = date && date.toLocaleDateString('en-US', { day: '2-digit'});
  const year = date && date.getFullYear();
  
  return (
    <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
  );
}

export default ExpenseDate;