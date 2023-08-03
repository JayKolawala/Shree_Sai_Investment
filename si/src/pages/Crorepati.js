import React, { useEffect, useState } from 'react';

function Crorepati() {
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(2000);
  const [years, setYears] = useState(10);
  const [currentSavings, setCurrentSavings] = useState(200000);
  const [crorepatiSIP, setCrorepatiSIP] = useState(0);

  useEffect(() => {
    const hideDiv = document.getElementById('hide');
    const benefitsDiv = document.getElementById('benefits');

    function calculate() {
  if (benefitsDiv.style.display === 'none') {
    benefitsDiv.style.display = 'block';
  }

  if (hideDiv.style.display === 'block') {
    hideDiv.style.display = 'none';
  }

  const SIP = parseFloat(document.getElementById('SIP').value);
  const Returnn = parseFloat(document.getElementById('Return').value);
  const Years = parseInt(document.getElementById('Years').value);
  const PV = parseFloat(document.getElementById('PV').value);
  const convertmonthly = Returnn / 12;
  const Return = convertmonthly / 100;
  const Power = Math.pow(1 + Return, Years * 12);
  const fvexisting = PV * Power;
  const targetAmount = 10000000; // Target amount to become a crorepati
  const remainingAmount = targetAmount - fvexisting;
  const numerator = remainingAmount * Return;
  const denominator = (Power - 1) / Return;
  const crorepatiSIP = Math.round(numerator / denominator);
  const FV = Math.round((SIP * ((Power - 1) / Return)) * (1 + Return));
  const PVA = Math.round(PV * Power);
  const Total = FV + PVA;

  document.getElementById('v1-five').innerHTML = Total;
  document.getElementById('years_display').innerHTML = Years;
  document.getElementById('years1_display').innerHTML = Years;
  document.getElementById('years2_display').innerHTML = Years;
  document.getElementById('PV_display').innerHTML = PV.toLocaleString('en-IN');
  document.getElementById('SIP_display').innerHTML = SIP.toLocaleString('en-IN');
  document.getElementById('Return_display').innerHTML = Returnn;
  document.getElementById('NewSIP').textContent = crorepatiSIP.toLocaleString('en-IN');

  drawChart(remainingAmount, fvexisting);
}

    function drawChart(crorepati, fvexisting) {
      // Draw your chart here using the provided data
    }

  

    document.getElementById('calculateBtn').addEventListener('click', calculate);

    return () => {
      document.getElementById('calculateBtn').removeEventListener('click', calculate);
    };
  }, []);

  const handleMonthlyInvestmentChange = (e) => {
    setMonthlyInvestment(parseInt(e.target.value, 10));
  };

  const handleYearsChange = (e) => {
    setYears(parseInt(e.target.value, 10));
  };

  const handleCurrentSavingsChange = (e) => {
    setCurrentSavings(parseInt(e.target.value, 10));
  };

  return (
    <div className="calculator-container w3-container w3-light-grey" style={{ padding: '400px 16px' }}>
      <div id="hide" style={{ padding: '128px 16px' }}>
        <h2>Crorepati calculator</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <label htmlFor="slider-fill">In how many years do you wish to become a crorepati? (years)</label>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="range"
                name="slider-fill"
                id="Years"
                value={years}
                min="1"
                max="100"
                step="1"
                data-highlight="true"
                onChange={handleYearsChange}
              />
              <input
                type="text"
                value={years}
                onChange={handleYearsChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <label htmlFor="slider-fill">What are your current savings? (₹)</label>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="range"
                name="slider-fill"
                id="PV"
                value={currentSavings}
                min="100000"
                max="1000000"
                step="10000"
                data-highlight="true"
                onChange={handleCurrentSavingsChange}
              />
              <input
                type="text"
                value={currentSavings}
                onChange={handleCurrentSavingsChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <label htmlFor="slider-fill">How much do you plan to save monthly? (₹)</label>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="range"
                name="slider-fill"
                id="SIP"
                value={monthlyInvestment}
                min="1000"
                max="100000"
                step="1000"
                data-highlight="true"
                onChange={handleMonthlyInvestmentChange}
              />
              <input
                type="text"
                value={monthlyInvestment}
                onChange={handleMonthlyInvestmentChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="input-group">
              <label htmlFor="slider-fill">Expected Interest Rate on your savings (%)</label>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="range"
                name="slider-fill"
                id="Return"
                value={interestRate}
                min="1"
                max="100"
                step="1"
                data-highlight="true"
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              />
              <input
                type="text"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <button id="calculateBtn" type="button">Calculate</button>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6"></div>
          </div>
        </div>
      </div>

      <div id="benefits" style={{ display: 'none' }}>
        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <label>Total Number Of Years To Become Crorepati:</label>
                  <span id="years_display">{years}</span> Years
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <label>Current savings: ₹</label>
                  <span id="PV_display">{currentSavings.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <label>Monthly savings planned: ₹</label>
                  <span id="SIP_display">{monthlyInvestment.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <label>Expected Interest Rate:</label>
                  <span>{interestRate}%</span>
                </div>
              </div>

            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div id="piechart" style={{ width: '100%', height: '100%' }}></div>
            </div>
          </div>
          <div className="clearfix"></div>
          <br />
          <br />
          <div className="col-md-12">
            <div>
              After <b><span id="years1_display">{years}</span></b> years, you will have earned ₹<span style={{ color: '#06F', fontSize: '22px', fontWeight: 'bold' }} id="v1-five"></span>
            </div>

            <div>
              To meet your target of becoming a crorepati in <b><span id="years2_display">{years}</span></b> years, you need to start saving ₹<b><span id="NewSIP">{crorepatiSIP.toLocaleString('en-IN')}</span></b> every month.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Crorepati;
