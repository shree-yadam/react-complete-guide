import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card'

function ExpenseItem(props) {
   let {title, amount, date} = props;
  
  function onClick(e){
    console.log("clicked");
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={onClick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
