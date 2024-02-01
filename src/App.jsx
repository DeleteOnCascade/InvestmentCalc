import { useState } from "react";

import Calculator from "./components/Calculator";

function App() {
  const [investment, setInvestments] = useState();

  function handleInvestments(investment) {}

  return (
    <main>
      <Calculator onChangeInvestments={handleInvestments} />
    </main>
  );
}

export default App;
