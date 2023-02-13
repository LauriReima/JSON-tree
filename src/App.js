import "./App.css";
import { useState, useEffect } from "react";
import CountryList from "./Components/CountryList";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);


  return (
    <div className="App">
     <CountryList maat={data}/>
    </div>
  );}


export default App;
