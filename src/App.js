
import './App.css';
import Balance from './components/balance/Balance';
import Header from './components/header/Header';
import InconwExoenses from './components/InconwExoenses';
import Transaction from './components/Transaction';
import TransactionAdd from './components/TransactionAdd';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (

    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance />
        <InconwExoenses />
        <Transaction />
        <TransactionAdd />
      </div>

    </GlobalProvider>
  );
}

export default App;
