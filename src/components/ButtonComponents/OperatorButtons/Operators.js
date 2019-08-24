import React, { useState } from "react";
import OperatorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data';
const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className = "opContent">
      {operators.map(e => <OperatorButton buttonContent={e.value} />)}
    </div>
  );
};
export default Operators;