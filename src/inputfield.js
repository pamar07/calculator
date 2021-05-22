import React, { useState } from "react";

const Test = (props) => {
  const [inputData, setInputData] = useState({ a: "", b: "", c: "" });
  const { a, b, c } = inputData;

  const [outputData, setOutputData] = useState({});
  const {
    totalPanelSavings,
    totalPanelCostSavings,
    totalRecruiterTimeSavings,
    totalRecruiterCostSavings,
    timeToHire,
  } = outputData;

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const x = b * c;
    const Recruiter =
    (  x * 30 +
      x * 20 +
      x * 30 * (0.66 * [(1 - (0.66 * 0.66 * 0.66)) / (1 - 0.66)]) +
      x * 30 +
      15 * x * (0.66 * [1 - (0.66 * 0.66 * 0.66) / (1 - 0.66)]) +
      (x * 30)) / 60;

    const Panel = ((x * 55) * (x * 15) * 0.66) / 60;

    setOutputData({
      totalPanelSavings: Panel,
      totalPanelCostSavings: Panel * 40,
      totalRecruiterTimeSavings: Recruiter,
      totalRecruiterCostSavings: Recruiter * 30,
      timeToHire: (a * 40) / 100,
    });
  };

  return (
    <div  style={{width: "70%", margin: "0 auto"}}>
      <p>
        Current time to Hire :
        <input type="text"
        min="1"
        max="180" name="a"  value={a} onChange={handleChange} />
      </p>
      <br />
      <p>
        Current time to Hire :
        <input type="text"
        min="1"
        max="100000"  name="b" value={b} onChange={handleChange} />
      </p>
      <br />
      <p>
        Current time to Hire :
        <input type="text"
        min="1"
        max="50"  name="c" value={c} onChange={handleChange} />
      </p>
      <br />
      <br />
      <button onClick={handleClick}>Submit</button>

      <br />
      <br />
      <br />
      
      <div>
        <p>Total Panel Savings: {totalPanelSavings} hours</p>
        <p>Total Panel Cost Savings: $ {totalPanelCostSavings} USD</p>
        <p>Total Recruiter Time Savings: {totalRecruiterTimeSavings} hours</p>
        <p>Total Recruiter Cost Savings: $ {totalRecruiterCostSavings} USD</p>
        <p>Time To Hire: {timeToHire} Days</p>
      </div>
    </div>
  );
};

export default Test;