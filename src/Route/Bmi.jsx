import React, { useState } from 'react';
import Button from '@mui/material/Button';
//import { useSelector, UseDispatch } from 'react-redux';
//import { setHeight, setWeight, selectBmiInput } from '../Redux/slice/bmiSlice';

const Bmi = () => {
  const [resultDiv, setResultDiv] = useState(false);
  //const bmiInput = useSelector(selectBmiInput);
  const [inputVal, setInputVal] = useState({ height: '', weight: '' });
  const [bmiVal, setBmiVal] = useState({
    bmi: '',
    healthState: '',
    minWeight: '',
    maxWeight: '',
  });
  
  const bmiFormula = (inputVal.weight / (((inputVal.height / 100) * inputVal.height) / 100)).toFixed(1)
  const onSubmit = () => {
    console.log('SubmitClick');
    setBmiVal(prev => {
      return {
        ...prev,
        bmi: bmiFormula,
        minWeight: 18.5 * (inputVal.height * 0.01) * (inputVal.height * 0.01),
        maxWeight: 24.9 * (inputVal.height * 0.01) * (inputVal.height * 0.01),
        healthState:
          bmiFormula < 18.6
            ? 'Under Weight'
            : bmiFormula >= 24.9
            ? 'OverWeight'
            : 18.6 < bmiFormula < 24.9
            ? 'Healthy'
            : 'none',
      };
    });
    setResultDiv(prev => (prev = !prev));
  };
  console.log(bmiVal.bmi, bmiVal.healthState);
  return (
    <>
      <div className="container flex flex-col items-center w-1/3 mx-auto bg bg-cyan-50">
        <div className="text-3xl text-center font-bold bg-blue-400 w-full mb-2">
          BMI Calculator
        </div>
        <h1>Enter Your Height In CM:</h1>
        <input
          type="number"
          name="height"
          id="height"
          className="bg-[#E9EFFF] my-2 p-2"
          onChange={e =>
            setInputVal(prev => {
              return { ...prev, height: e.target.value };
            })
          }
        />
        <h1>Enter Your Weight In KG:</h1>
        <input
          type="number"
          name="weight"
          id="weight"
          className="bg-[#E9EFFF] my-2 p-2"
          onChange={e =>
            setInputVal(prev => {
              return { ...prev, weight: e.target.value };
            })
          }
        />
        <div className="my-2 ">
          <Button variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </div>
        {/* Result Div-After Submission */}
        {resultDiv && (
          <div
            className={`result  flex flex-col justify-center item-center text-center font-semibold text-md`}
          >
            <h1>Your BMI is {bmiVal.bmi}</h1>
            <h2>
              Your Suggested weight range in beetween :
              {`${bmiVal.minWeight.toFixed(0)}kg - ${bmiVal.maxWeight.toFixed(
                0
              )}kg`}
            </h2>
            <h1>You are in {bmiVal.healthState} Weight Range</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Bmi;