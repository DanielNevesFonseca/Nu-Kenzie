import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { v4 as uuidv4 } from "uuid";
import "./styles/index.scss";
import { TotalMoney } from "./components/TotalMoney";
import { Footer } from "./components/Footer";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formData) => {
    const newTransaction = { ...formData, id: uuidv4() };
    setTransactions([...transactions, newTransaction]);
  };

  const removeTransaction = (removeId) => {
    const newTransactionList = transactions.filter(
      (transaction) => transaction.id !== removeId
    );
    setTransactions(newTransactionList);
  };

  const totalBalance = transactions.reduce((prevValue, currentValue) => {
    if (currentValue.selectOption === "1") {
      return Number(prevValue) + Number(currentValue.costValue);
    } else if (currentValue.selectOption === "0") {
      return Number(prevValue) - Number(currentValue.costValue);
    }
  }, 0);

  return (
    <>
      <Header />
      <section className="summarySection">
        <Form addTransaction={addTransaction} />
        {transactions.length != 0 ? (
          <TotalMoney totalValue={totalBalance} />
        ) : (
          <></>
        )}
      </section>
      <List transactions={transactions} removeTransaction={removeTransaction} />
      <Footer />
    </>
  );
};

export default App;
