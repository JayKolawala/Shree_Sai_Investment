import React, { useState } from 'react';
import './calculator.css';

function DreamVacation() {
  const [years, setYears] = useState('');
  const [cost, setCost] = useState('');
  const [savings, setSavings] = useState('');
  const [inflation, setInflation] = useState('');
  const [ror, setRor] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform calculations or further actions with the input values
    // You can access the input values here: years, cost, savings, inflation, ror
    const Power = Math.pow(1 + ror / 100, years);
    const hike = Math.pow(1 + inflation / 100, years);
    const rounding = ror / 1200;
    const Powerr = Math.pow(1 + rounding, years * 12);
    const CostFV = Math.round(cost * hike);
    const FVexisting = Math.round(savings * Power);
    const FV = CostFV - FVexisting;
    const SIP = Math.round((FV * rounding) / (Powerr - 1));

    const results = {
      yearsLeft: years,
      costFuture: CostFV,
      existingInvestment: FVexisting,
      monthlySavings: SIP,
    };

    setResult(results);

    // Clear the form
    setYears('');
    setCost('');
    setSavings('');
    setInflation('');
    setRor('');
  };

  return (
    <>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }}>
        <div className="row">
          <div className="col-md-6">
            <h3>Dream Vacation</h3>
            <p>
              Everyone dreams of going on a grand vacation at some time during their lives. It can be overwhelming,
              however, when you sit down to actually plan your trip, many considerations go into planning a vacation.
              Planning your vacation can increase your chances of an enjoyable experience.
            </p>
          </div>
          <div className="col-md-6">
            <img className="image" src="./img/dream-vacation.jpg" alt="Buildings" />
          </div>
        </div>
      </div>

      <div className="calculator-container w3-row-padding" style={{ padding: '64px 16px' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Calculator</h2>
            <label htmlFor="yearsInput">After how many years do you wish to go on your holiday?</label>
            <input
              id="yearsInput"
              className="form-control"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="costInput">How much does this trip cost today?</label>
            <input
              id="costInput"
              className="form-control"
              type="number"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="savingsInput">How much money can you set aside for your holiday at the moment?</label>
            <input
              id="savingsInput"
              className="form-control"
              type="number"
              value={savings}
              onChange={(e) => setSavings(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inflationInput">Inflation Rate (%)</label>
            <input
              id="inflationInput"
              className="form-control"
              type="number"
              value={inflation}
              onChange={(e) => setInflation(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rorInput">Rate Of Return (%)</label>
            <input
              id="rorInput"
              className="form-control"
              type="number"
              value={ror}
              onChange={(e) => setRor(Number(e.target.value))}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>

        {result && (
          <div className="results" style={{ padding: '64px 16px' }}>
            <h2>Results</h2>
            <p>Years Left: {result.yearsLeft}</p>
            <p>Cost In Future Terms: Rs. {result.costFuture}</p>
            <p>Existing Investment: Rs. {result.existingInvestment}</p>
            <p>Monthly Savings From Today: Rs. {result.monthlySavings}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default DreamVacation;
