// import React from "react";
import React, { useState } from "react";
import NumberButton from '../NumberButtons'

//import any components needed

//Import your array data to from the provided data file
import { numbers } from '../../../data'
const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div className = "numContent">
      {numbers.map(e => <NumberButton buttonContent={e} value={e} />)}
    </div>
  );
};
export default Numbers;