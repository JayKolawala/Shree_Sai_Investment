import React, { useState } from 'react';

function CustomGoal() {
  const [years, setYears] = useState('');
  const [currentCost, setCurrentCost] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional logic or validation here
    // Access the form field values in the respective state variables (years, currentCost, currentSavings, inflationRate, rateOfReturn)

    // Clear the form fields
    setYears('');
    setCurrentCost('');
    setCurrentSavings('');
    setInflationRate('');
    setRateOfReturn('');
  };

  return (
    <>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }}>
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <h3>Custom Goals.</h3>
            <p>
              For a parent, seeing their child happily married is an unparalleled joy. Whether it is the pride of seeing
              your son bring home a bride, or the bittersweet joy of seeing your daughter start a new life with her
              husband. But giving your children the wedding of their dreams requires a lot of careful financial planning.
            </p>
          </div>
          <div className="w3-col m6">
            <img
              className="w3-image w3-round-large"
              src="./img/goal.jpg"
              alt="Buildings"
              width={700}
              height={394}
            />
          </div>
        </div>
      </div>

      
      <div className='calculator-container w3-row-padding' style={{ padding: '64px 16px' }}>
        
        <form onSubmit={handleSubmit}>
        <div className="w3-container">
        <h2>Calculator</h2><br/>
          <label htmlFor="years">In how many years from now do you think your child will get married?</label>
          <input
            type="text"
            id="years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            required
          />

          <label htmlFor="currentCost">If the wedding were to happen today, how much do you think it would cost?</label>
          <input
            type="text"
            id="currentCost"
            value={currentCost}
            onChange={(e) => setCurrentCost(e.target.value)}
            required
          />

          <label htmlFor="currentSavings">How much money can you set aside for your child’s wedding at the moment?</label>
          <input
            type="text"
            id="currentSavings"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            required
          />

          <label htmlFor="inflationRate">Inflation Rate:</label>
          <input
            type="text"
            id="inflationRate"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            required
          />

          <label htmlFor="rateOfReturn">Rate Of Return:</label>
          <input
            type="text"
            id="rateOfReturn"
            value={rateOfReturn}
            onChange={(e) => setRateOfReturn(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </div>
      </form>

      </div>
          </>
  );
}

export default CustomGoal;
