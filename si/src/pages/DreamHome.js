import React, { useState } from 'react';
import './calculator.css';

function DreamHome() {
  const [years, setYears] = useState('');
  const [cost, setCost] = useState('');
  const [loanPercentage, setLoanPercentage] = useState('');
  const [savings, setSavings] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [returnRate, setReturnRate] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform calculations
    const power = Math.pow(1 + returnRate / 100, years);
    const hike = Math.pow(1 + inflationRate / 100, years);
    const costFV = Math.round(cost * hike);
    const downpayment = costFV * (1 - loanPercentage / 100);
    const down = Math.round(costFV * (loanPercentage / 100));
    const FVexisting = Math.round(savings * power);
    const FV = downpayment - FVexisting;
    const SIP = Math.round((FV * (returnRate / 1200)) / (Math.pow(1 + returnRate / 1200, years * 12) - 1));

    // Update results state
    setResults({
      years,
      costFV,
      down,
      FVexisting,
      SIP
    });

    // Reset form values
    setYears('');
    setCost('');
    setLoanPercentage('');
    setSavings('');
    setInflationRate('');
    setReturnRate('');
  };

  return (
    <>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }}>
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <h3>Dream Home.</h3>
            <p>
              So you have always wanted to build your dream home. We can help you achieve your dreams with our comprehensive plans for every style and budget.
            </p>
          </div>
          <div className="w3-col m6">
            <img className="w3-image w3-round-large" src="./img/dream-house.jpg" alt="dream-house" width={700} height={394} />
          </div>
        </div>
      </div>

      <div className='calculator-container w3-row-padding' style={{ padding: '64px 16px' }}>
      
      <form onSubmit={handleSubmit}>
      <h2>Calculator</h2>
        <label htmlFor="years">After how many years do you wish to own your dream home?</label>
        <input type="number" id="years" value={years} onChange={(e) => setYears(e.target.value)} />

        <label htmlFor="cost">How much do you think your dream home costs today?</label>
        <input type="number" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} />

        <label htmlFor="loanPercentage">What percentage of this cost would you like to go for a home loan?</label>
        <input type="number" id="loanPercentage" value={loanPercentage} onChange={(e) => setLoanPercentage(e.target.value)} />

        <label htmlFor="savings">How much money can you set aside for your dream home at the moment?</label>
        <input type="number" id="savings" value={savings} onChange={(e) => setSavings(e.target.value)} />

        <label htmlFor="inflationRate">Inflation Rate</label>
        <input type="number" id="inflationRate" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} />

        <label htmlFor="returnRate">Rate Of Return</label>
        <input type="number" id="returnRate" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    
      {results && (
        <div className="results col-md-5" style={{ padding: '32px 32px' }}>
          <h2>Results</h2>
          <p>Years Left: {results.years} Years</p>
          <p>Cost In Future Terms: Rs.{results.costFV}</p>
          <p>Home Loan Funding {loanPercentage}: Rs.{results.down}</p>
          <p>Existing Investment: Rs.{results.FVexisting}</p>
          <p>Monthly Savings From Now: Rs.{results.SIP}</p>
        </div>
      )}
      </div>
    </>
  );
}

export default DreamHome;
