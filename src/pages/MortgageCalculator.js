import React, { useState, useEffect } from 'react';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    homePrice: 300000,
    downPayment: 60000,
    interestRate: 6.5,
    loanTerm: 30,
  });

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateMortgage = () => {
    const principal = Number(formData.homePrice) - Number(formData.downPayment);
    const monthlyRate = Number(formData.interestRate) / 100 / 12;
    const numberOfPayments = Number(formData.loanTerm) * 12;

    // Monthly Payment = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
    setTotalInterest(totalInterest);
  };

  useEffect(() => {
    calculateMortgage();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    let sanitizedValue = value;
    if (type === "number") {
      sanitizedValue = value.replace(/^0+(?=\d)/, "");
    }
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="mortgage-calculator">
      <h1>Mortgage Calculator</h1>
      <div className="calculator-container">
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="homePrice">Home Price ($)</label>
            <input
              type="number"
              id="homePrice"
              name="homePrice"
              value={formData.homePrice}
              onChange={handleInputChange}
              min="0"
            />
          </div>

          <div className="input-group">
            <label htmlFor="downPayment">Down Payment ($)</label>
            <input
              type="number"
              id="downPayment"
              name="downPayment"
              value={formData.downPayment}
              onChange={handleInputChange}
              min="0"
            />
            <span className="down-payment-percentage">
              {((formData.downPayment / formData.homePrice) * 100).toFixed(1)}%
            </span>
          </div>

          <div className="input-group">
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
              min="0"
              step="0.1"
            />
          </div>

          <div className="input-group">
            <label htmlFor="loanTerm">Loan Term (Years)</label>
            <select
              id="loanTerm"
              name="loanTerm"
              value={formData.loanTerm}
              onChange={handleInputChange}
            >
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>

        <div className="results-section">
          <div className="result-card">
            <h3>Monthly Payment</h3>
            <p className="amount">{formatCurrency(monthlyPayment)}</p>
          </div>
          
          <div className="result-card">
            <h3>Total Payment</h3>
            <p className="amount">{formatCurrency(totalPayment)}</p>
          </div>
          
          <div className="result-card">
            <h3>Total Interest</h3>
            <p className="amount">{formatCurrency(totalInterest)}</p>
          </div>
        </div>
      </div>
      <p className="disclaimer">
        <strong>Disclaimer:</strong> The results provided by this calculator are for informational purposes only and are estimates based on the information you provided. Actual mortgage terms, rates, and payments may vary. Please consult with a qualified mortgage professional for precise information tailored to your situation.
      </p>
    </div>
  );
};

export default MortgageCalculator;