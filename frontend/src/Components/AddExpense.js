import { useState } from "react";
import { useCreateExpense } from "../Providers/expense";
import Modal from "./Modal"; 
import "./HomePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faAdd } from '@fortawesome/free-solid-svg-icons';

export default function AddExpense() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");

  const { mutate } = useCreateExpense();

  // Submit form handler
  function submitExpense() {
    const newExpense = { name: title, amount: Number(amount), rate: Number(rate) };
    mutate(newExpense);
    clearForm();
  }

  // Helper to clear form and close modal
  function clearForm() {
    setTitle("");
    setAmount("");
    setRate("");
    setModalOpen(false); // Close modal
  }

  return (
    <div className="inputexpense">
      <h3>Add Expense</h3>
      <button onClick={() => setModalOpen(true)} ><FontAwesomeIcon icon={faAdd} /></button>  
      
      
      <Modal showModal={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="expense-form">
          <div>
            <label>Title:</label>
            <input
              type="text"
              placeholder="Expense Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              placeholder="Expense Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label>Rate:</label>
            <input
              type="number"
              placeholder="Expense Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="modal-buttons">
          <button onClick={submitExpense}><FontAwesomeIcon icon={faAdd} /></button>
          <button onClick={clearForm}><FontAwesomeIcon icon={faCancel} /></button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
