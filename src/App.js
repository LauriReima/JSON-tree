import "./App.css";
import { useState } from "react";
import Fetch from "./Fetch";


function App() {

  const [maat, setMaat] = useState('')
  const data = Fetch("https://restcountries.com/v3.1/all")
  const tuloste = <pre>{JSON.stringify(data, null ,2)}</pre>  
  
  
  const handleClick = () => {    
    setMaat(data)
    
    console.log(maat, 'maat');
    //data.forEach(e => console.log(e.name))
    console.log(data, 'data');
    let lista = [{}]
    for (let i = 0; i <= data.length; i++) {
      lista.push(data[i].name)}
    console.log(lista);
  }
  
      
if (data == null) {
  return <h1>Loading...</h1>
} else
  {return (
    <div className="App">
      
      <h1>There you go</h1>
      
      {maat.length === 0 ? <button onClick={handleClick}>
        avaa
      </button> : ''}
      <pre>{JSON.stringify(maat, null ,2)}</pre>
      
    </div>
  );}
}

export default App;
