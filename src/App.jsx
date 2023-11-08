import { useState } from 'react'
import './App.css'
import ModelPicker from './components/ModelPicker'

function App() {
  const [count, setCount] = useState(1);
  const [formDataArray, setFormDataArray] = useState([]);
  const [validFormsList, setValidFormsList] = useState([false]); //true/false array

  function handleDataCollection() {
    //print to PDF, using the formDataArray
    /*
      formDataArray will just be an array with a bunch of objects
      Each object has all the data for it's one corresponding form (aka ModelPicker)
    */
   console.log(formDataArray);
  }

  function handleValidForms(index, isValid){
    const copyValidFormsList = Array.from(validFormsList);
    copyValidFormsList[index] = isValid;
    setValidFormsList(copyValidFormsList);
  }

  function handleUpdateDataArray(index, newData) {
    const copyOfDataArray = Array.from(formDataArray);
    copyOfDataArray[index] = newData;
    console.log(index, newData);
    setFormDataArray(copyOfDataArray);
  }

  return (
    <>
      <h1>Something</h1>
      {validFormsList.every((isValid) => isValid) && 
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Add new Model</button>
      }
      {Array(count).fill(0).map((_, index) => {
        return <ModelPicker 
          key={index}
          isCurrentlyValid = {validFormsList[index]}
          updateModelData={(newData) => handleUpdateDataArray(index, newData)}
          updateIsValid={(isValid) => handleValidForms(index, isValid)}
        />
      })}
      <button onClick={handleDataCollection}>Submit all the Data</button>
    </>
  )
}

export default App
