import React, { useState } from 'react';
import './calculator.css';

function ChildEducation() {
  const [yearsToBeginStudies, setYearsToBeginStudies] = useState('');
  const [educationCost, setEducationCost] = useState('');
  const [savingsAmount, setSavingsAmount] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');
  const [calculatedResults, setCalculatedResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the calculations based on the form field values
    const Power = Math.pow(1 + rateOfReturn / 100, yearsToBeginStudies);
    const hike = Math.pow(1 + inflationRate / 100, yearsToBeginStudies);
    const rounding = rateOfReturn / 1200;
    const Powerr = Math.pow(1 + rounding, yearsToBeginStudies * 12);

    const costFV = Math.round(educationCost * hike);
    const fvExisting = Math.round(savingsAmount * Power);
    const fv = costFV - fvExisting;
    const sip = Math.round((fv * rounding) / (Powerr - 1));

    // Update the state variable with the calculated results
    setCalculatedResults({ costFV, fvExisting, sip });

    // Example code to log the calculated values
    console.log('Cost in Future terms:', costFV);
    console.log('Existing Investment:', fvExisting);
    console.log('Monthly Savings from Today:', sip);
  };

  return (
    <>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }}>
        <div className="row">
          <div className="col-md-6">
            <h3>Child Education.</h3>
            <p>
              Children are always asked what they want to be when they grow up. As a parent, you want to make sure
              nothing stands in their way, especially something like the ability to finance their education.
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="w3-image w3-round-large"
              src="./img/child-education.jpg"
              alt="child-education"
              width={700}
              height={394}
            />
          </div>
        </div>
      </div>

      <div className="calculator-container w3-row-padding" style={{ padding: '16px 16px' }}>
        
        <form onSubmit={handleSubmit}>
        <h2>Calculator</h2>
        <br />
          <label htmlFor="yearsToBeginStudies">After how many years will your child begin higher studies?</label>
          <input
            type="text"
            id="yearsToBeginStudies"
            value={yearsToBeginStudies}
            onChange={(e) => setYearsToBeginStudies(e.target.value)}
            required
          />

          <label htmlFor="educationCost">How much does the higher education cost today?</label>
          <input
            type="text"
            id="educationCost"
            value={educationCost}
            onChange={(e) => setEducationCost(e.target.value)}
            required
          />

          <label htmlFor="savingsAmount">How much money can you set aside for your child’s higher studies at the moment?</label>
          <input
            type="text"
            id="savingsAmount"
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(e.target.value)}
            required
          />

          <label htmlFor="inflationRate">Inflation Rate</label>
          <input
            type="text"
            id="inflationRate"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            required
          />

          <label htmlFor="rateOfReturn">Rate Of Return</label>
          <input
            type="text"
            id="rateOfReturn"
            value={rateOfReturn}
            onChange={(e) => setRateOfReturn(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>

        {/* Display calculated results */}
        {calculatedResults && (
          <div className="results-container" style={{ padding: '16px 32px' }}>
            <h2>Results</h2>
            <p>Cost in Future terms: {calculatedResults.costFV}</p>
            <p>Existing Investment: {calculatedResults.fvExisting}</p>
            <p>Monthly Savings from Today: {calculatedResults.sip}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ChildEducation;
