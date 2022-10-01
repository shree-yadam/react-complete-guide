import './ExpenseItem.css'

function ExpenseItem(props) {
  const{title, amount, date} = props;
  const month = date && date.toLocaleDateString('en-US', { month: 'long'});
  const day = date && date.toLocaleDateString('en-US', { day: '2-digit'});
  const year = date && date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
