import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';

function App() {
// const dog = ""
const [state, setState ] = useState()
  useEffect( ()=> {
    axios.get("https://dog.ceo/api/breeds/image/random ")
      .then( resp => {
        console.log(resp.data.message)
        setState(resp.data.message)
      })
  },[])


  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <img src={state}/>

    </div>
  );
}

export default App;
