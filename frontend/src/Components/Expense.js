import React, { useEffect, useState } from "react";
import { useDeleteExpense, useEditExpense } from "../Providers/expense";
import Modal from "./Modal"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faCancel } from '@fortawesome/free-solid-svg-icons';
import "./HomePage.css";


const Expense = ({ 
  id,
  title,
  amount,
  rate,
  }) => {

    const { mutate: remove } = useDeleteExpense();
    const { mutate: edit } = useEditExpense(id);
    
    
    const [isModalOpen, setModalOpen] = useState(false); 
    const [data, setData] = useState({
      name: title,
      amount: amount,
      rate: rate
    });

    useEffect(() => {
      if (isModalOpen) {
        setData({
          name: title,
          amount: amount,
          rate: rate
        });
      }
    }, [isModalOpen, title, amount, rate]);
  
  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value }); 
  };
  const handleSubmit = async () => {
    edit({id, ...data});
    setModalOpen(false);
  };

  function submitDelete() {
    
    remove({id});
    
  }

  return (
      <div className="expense__body">
        <div className="content">
           <h2 className="expense__name">{title}</h2>
           </div>
           <div className="content">
           <p className="expense__amount">{amount} €</p>
           </div>
           <div className="content">
           <p className="expense__amount">{rate}%</p>
           </div>
           <div className="content">
           <p className="expense__amount">{(amount+amount*(rate/100)).toFixed(2)} €</p>
           </div>
           <div className="content">
           <div className="expense__buttons">
             <button className="expense__deleteButton" onClick={submitDelete}>
             <FontAwesomeIcon icon={faTrash} />
             </button>
             <button className="expense__editButton" onClick={() => setModalOpen(true)}><FontAwesomeIcon icon={faEdit} /></button>
           </div>
           </div>
      
           <Modal showModal={isModalOpen} onClose={() => setModalOpen(false)}>
            <div className="expense-form">
          
            <div>
              <label>Title:</label>
              <input
                type="text"
                placeholder="Expense Title"
                value={data.name}
                onChange={(e) => {handleInputChange("name", e.target.value) }}
              />
            </div>
            <div>
              <label>Amount:</label>
              <input
                type="number"
                placeholder="Expense Amount"
                value={data.amount}
                onChange={(e) => handleInputChange( "amount", e.target.value)}
              />
            </div>
            <div>
              <label>Rate:</label>
              <input
                type="number"
                placeholder="Expense Rate"
                value={data.rate}
                onChange={(e) => handleInputChange( "rate", e.target.value)}
              />
            </div>
            <div className="modal-buttons">
            <button onClick={() => handleSubmit()}><FontAwesomeIcon icon={faSave} /></button>
            <button onClick={() => setModalOpen(false)}><FontAwesomeIcon icon={faCancel} /></button>
            </div>
          </div>
        </Modal>
            </div>
            

  

  );

};

  


export default Expense;
