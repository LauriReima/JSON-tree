import React from "react";

const Block = (para,painallus) => {

    return (
        <div>
            <ul>
                <li>
                <button 
                    key={para.name.name.common}
                    onClick={painallus}
                >{para.name.name.common}</button>
                
                </li>
            </ul>
        </div>
    )
}
//{totuus == true ? <div>{para.capital}</div> : ''}
export default Block
