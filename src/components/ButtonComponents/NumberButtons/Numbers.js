// import React from "react";
import React, { useState } from "react";
import {NumberButton} from '../NumberButtons/NumberButton'
import { Numbers } from '../../../data'
//import any components needed

//Import your array data to from the provided data file

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