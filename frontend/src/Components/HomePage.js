import React from "react";
import "./HomePage.css";
import Expense from "./Expense";
import { useExpense } from "../Providers/expense/index";
import AddExpense  from "./AddExpense";
import Column from "./Columns";

const Home = () => {
  const { data, isLoading, error } = useExpense();
  

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div className="loader"></div>;

  return (
    <div className="Home">
      <header> Cinema Expense Calculation </header>
      <AddExpense />

      <div className="column-content">
        <Column />
      </div>
      
      <div className="expense-content">
      {
        data.length?(
        data.map((expense) => (
          <Expense key={expense.id} title={expense.name} id={expense.id} amount={expense.amount} rate={expense.rate} />
        ))
      ):
      <div>No Expenses</div>
      }
              
      </div>

      <div className="footer">
        <span>
          Your total expense for the film is  <span className="pendingTasks">{data?
          (
            data.reduce((total, expense) => total + expense.amount + expense.amount*(expense.rate/100), 0).toFixed(2)
          )
          :
          0

          } €
          </span> 
        </span>
        
      </div>
    </div>
  );
};

export default Home;
