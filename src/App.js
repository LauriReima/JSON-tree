import "./App.css";
import { useState } from "react";
import Fetch from "./Fetch";
import Block from "./Components/Block"

function App() {

  const [maat, setMaat] = useState([])
  const data = Fetch("https://restcountries.com/v3.1/all")
  var totuus = false
  

  const handleClick = () => {    
    setMaat(data)
    console.log(data)
  }
  const painallus = () => {
    if (totuus === false){
      totuus = true
    }
    else {
      totuus = false
    }
    console.log(totuus)
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
      
      {maat.map(data => 
      
      <ul>
        <Block 
          name={data}
          onClick={painallus}
          key={data.name.commmon}
        />
       
      </ul>
      )}
      
    </div>
  );}
}
//<pre>{JSON.stringify(maat, null ,2)}</pre>
 /*<li>
          <button 
            key={data.name.common}
            onClick={painallus}
          >{data.name.common}</button>
          {totuus == true ? <div>{data.capital}</div> : ''}
        </li>*/
export default App;
