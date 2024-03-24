import React from 'react';

export default function TipCalculator() {
  // Write your code here.

  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [numOfPpl, setNumOfPpl] = useState(1);

  const totalTip = (bill * 0.01 * tipPercentage).toFixed(2);
  const tipPerPerson = (totalTip / numOfPpl).toFixed(2);
    
  return (
    <>
      <form>
        <label
          htmlFor="input-bill">Bill</label>
        <input 
          id="input-bill"
          type="number"
          value={bill}
          onChange={(event) => setBill(event.target.value)}/>

        <label
          htmlFor="input-percentage">Tip Percentage</label>
        <input
          id="input-percentage"
          type="number"
          value={tipPercentage}
          onChange={(event) => setTipPercentage(event.target.value)}/>

        <label 
          htmlFor="input-numOfPpl">Number of People</label>
        <input
          id="input-numOfPpl"
          type="number"
          value={numOfPpl}
          onChange={(event) => setNumOfPpl(event.target.value)}/>
      </form>

      <p>Total Tip: {isNaN(totalTip) || totalTip == 0.00 ? '-' : `$${totalTip}`}</p>
      <p>Tip Per Person: {isNaN(tipPerPerson) || totalTip == 0.00 ? '-' : `$${tipPerPerson}`}</p>
    </>
  );
}