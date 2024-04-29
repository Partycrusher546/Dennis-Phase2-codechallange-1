import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import TransactionTable from "./Components/TransactionTable";
import TransactionForm from "./Components/TransactionForm";
import SortButton from "./Components/SortButton";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "4/26/2024",
      description: "Transaction 1",
      category: "Food",
      amount: 25,
    },
    {
      id: 2,
      date: "4/27/2024",
      description: "Transaction 2",
      category: "Transport",
      amount: 30,
    },
    {
      id: 3,
      date: "4/28/2024",
      description: "Transaction 3",
      category: "Shopping",
      amount: 50,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSort = (key) => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (key === "amount") {
        return a[key] - b[key];
      } else {
        return a[key].localeCompare(b[key]);
      }
    });
    setTransactions(sortedTransactions);
  };

  const handleDelete = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  
      <div>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
          <TransactionForm addTransaction={addTransaction} />
          <SortButton handleSort={handleSort} />
          <TransactionTable
            transactions={filteredTransactions}
            handleDelete={handleDelete}
          />
      
      </div>
  
  );
};

export default App;
