import React from "react";
import Block from "./Block";

const CountryList = ({maat}) => {


    return (
        <ul>
        {maat.map(data => 
          <Block key={data.cca2}
            name={data.name.common}
            
          />
        )}
        </ul>
    )
}
export default CountryList