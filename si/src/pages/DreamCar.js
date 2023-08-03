import React, { useState } from 'react';
import './calculator.css';

function DreamCar() {
  const [carCost, setCarCost] = useState('');
  const [loanPercentage, setLoanPercentage] = useState('');
  const [savingsAmount, setSavingsAmount] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [returnRate, setReturnRate] = useState('');
  const [numYears, setNumYears] = useState('');
  const [result, setResult] = useState('');

  const calculateDreamCar = (event) => {
    event.preventDefault(); // Prevent form submission and page refresh

    const dreamCarValue = parseInt(carCost) * Math.pow(1 + parseFloat(inflationRate) / 100, parseInt(numYears));
    const savingsValue = parseInt(savingsAmount) * Math.pow(1 + parseFloat(returnRate) / 100, parseInt(numYears));
    const loanAmount = dreamCarValue - savingsValue;
    const monthlyPayment = loanAmount / (parseInt(numYears) * 12);

    const formattedResult = [
      { label: 'Dream Car Value :  ', value: `Rs.${dreamCarValue.toFixed(2)}` },
      { label: 'Loan Amount :  ', value: `Rs.${loanAmount.toFixed(2)}` },
      { label: 'Monthly Payment :  ', value: `Rs.${monthlyPayment.toFixed(2)}` },
    ];

    setResult(formattedResult);
  };

  return (
    <>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }}>
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <h3>Dream Car.</h3>
            <p>
              Dream car is no longer a dream. Be ready to put your seat belts on and go for a ride. Check how much you
              need to save for your dream car.
            </p>
          </div>
          <div className="w3-col m6">
            <img
              className="w3-image w3-round-large"
              src="./img/dream-car.jpg"
              alt="Buildings"
              width={700}
              height={394}
            />
          </div>
        </div>
      </div>

      <div className="calculator-container w3-light-grey w3-row-padding" style={{ padding: '32px 16px' }}>
        <form onSubmit={calculateDreamCar}>
          <div>
            <h2>Dream Car Calculator</h2>
          </div>
          <br />
          <div className="form-group">
            <label>How much does your dream car cost today?</label>
            <input type="number" value={carCost} onChange={(e) => setCarCost(e.target.value)} />
          </div>

          <div className="form-group">
            <label>After how many years do you see yourself driving your dream car?</label>
            <input type="number" value={numYears} onChange={(e) => setNumYears(e.target.value)} />
          </div>

          <div className="form-group">
            <label>What percentage of this cost would you like to go for a car loan?</label>
            <input type="number" value={loanPercentage} onChange={(e) => setLoanPercentage(e.target.value)} />
          </div>

          <div className="form-group">
            <label>How much money can you set aside for your dream car at the moment?</label>
            <input type="number" value={savingsAmount} onChange={(e) => setSavingsAmount(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Inflation Rate</label>
            <input type="number" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Rate Of Return</label>
            <input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} />
          </div>

          <button type="submit">Calculate</button>
        </form>

        {result && (
          <div className="col-md result-container" style={{ padding: '32px 32px' }}>
            <h2>Result</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => (
                  <tr key={index}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default DreamCar;
