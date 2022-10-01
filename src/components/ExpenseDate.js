import './ExpenseDate.css';

function ExpenseDate(props) {
  const {date} = props;

  const month = date && date.toLocaleDateString('en-US', { month: 'long'});
  const day = date && date.toLocaleDateString('en-US', { day: '2-digit'});
  const year = date && date.getFullYear();
  
  return (
    <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
  );
}

export default ExpenseDate;