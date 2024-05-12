import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyOptions = useCurrencyInfo(fromCurrency);
  console.log();
  const swapCurrency =()=> {

  }
  const covertCurrency=()=>{

  }
  return (
    <div>
      <h1>Currency Convertor</h1>
      <InputBox/>
      <button>swap</button>
      <InputBox lable="From" amount={amount} selectedCurrency={fromCurrency} 
      onChangeAmount={(amount) => {console.log(amount); setAmount(amount)}}
      onChangeCurrency={(currency)=>{console.log(currency); setFromCurrency(currency)}}
      currencyOptions={currencyOptions}
      />
      <button>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>
    </div>
  );
}

export default App;
