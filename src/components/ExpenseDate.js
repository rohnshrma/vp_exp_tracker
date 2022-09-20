import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExpenseDate.css"


const ExpenseDate = (props) => {
  const aboutDate = new Date(props.date);
  const year = aboutDate.getFullYear();
  const month = aboutDate.toLocaleString("en-IN", { month: "short" });
  const day = aboutDate.toLocaleString("en-IN", { day: "2-digit" });

  //  console.log(props.finalDate)

  // var day = ;
  return (
    <div>
      <Col className="expense-date">
        <div className="expense-date__year">{month}</div>
        <div className="expense-date__month">{year}</div>
        <div className="expense-date__day">{day}</div>
      </Col>
    </div>
  );
};

export default ExpenseDate;
