import { useState } from "react";

export default function Calculator({ onChangeInvestments, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) => onChangeInvestments(event)}
            required
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(event) => onChangeInvestments(event)}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(event) => onChangeInvestments(event)}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={(event) => onChangeInvestments(event)}
            required
          />
        </p>
      </div>
    </div>
  );
}
