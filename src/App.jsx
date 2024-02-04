import { useState } from "react";

import Calculator from "./components/Calculator";
import ResultTable from "./components/ResultsTable";

function App() {
  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investmentValues.duration >= 1;

  const handleInvestments = (e) => {
    setInvestmentValues((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: +e.target.value,
      };
    });
  };

  return (
    <main>
      <Calculator
        onChangeInvestments={handleInvestments}
        userInput={investmentValues}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultTable investmentValues={investmentValues} />}
    </main>
  );
}

export default App;
