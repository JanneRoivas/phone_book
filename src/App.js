import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const phoneBook = []

function App() {
  const [state, setState] = useState({
      "name": "", 
      "number": ""  
  })

  function addPerson (values) { 
    phoneBook.push(values)
    setState({name: "", number: ""})
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const mappedPhoneBook = phoneBook.map(data => {
    return (
      <p>{data.name} - {data.number}</p>
    )
  })

  return (
    <div style={{display: "block", textAlign: "center"}}>
      <h4>PHONE BOOK</h4>
      <form>
        <div style={{display: "contents"}}>       
          <label >
            <p> Name:</p> <input type="text" name="name" value={state.name} onChange={handleChange} />
          </label>
        </div>
        <div style={{display: "contents"}}>       
          <label>
            <p> Number:</p> <input type="text" name="number" value={state.number} onChange={handleChange} />
          </label>
        </div>
      </form>
    <div>
      <br/>
      <button label="Submit" onClick={() => addPerson(state)} style={{width: "200px", height: "80px"}}>Submit</button>
    </div>
    <p> {mappedPhoneBook}</p> 
  </div>
  );
}

export default App;
