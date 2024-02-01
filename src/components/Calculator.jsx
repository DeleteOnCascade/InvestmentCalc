import { useState } from "react";

export default function Calculator({ onChangeInvestments }) {
  const [investment, setInvestments] = useState();

  return (
    <div id="user-input" className="input-group">
      <div>
        <label>INITIAL INVESTMENT</label>
        <input
          type="number"
          value={initialInvest}
          onChange={(initialInvest) => handleInvestments}
        />

        <label>ANNUAL INVESTMENT</label>
        <input
          type="number"
          value={annualInvest}
          onChange={(annualInvest) => handleInvestments}
        />
      </div>

      <div>
        <label>EXPECTED RETURN</label>
        <input
          type="number"
          value={expectedReturn}
          onChange={(expectedReturn) => handleInvestments}
        />

        <label>DURATION</label>
        <input
          type="number"
          value={duration}
          onChange={(duration) => handleInvestments}
        />
      </div>
    </div>
  );
}
