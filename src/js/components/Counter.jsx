import React from "react";
import SecondsCounter from "./SecondsCounter";
import ClockIcon from "./ClockIcon";

const Counter = ({count}) =>{
    let unidades = count % 10
    let decenas = (Math.floor(count / 10)%10)
    let centenas = (Math.floor(count / 100)%10)
    let millares = (Math.floor(count / 1000)%10)
    let decenasMillares = (Math.floor(count / 10000)%10)
    return (
        <div className="d-flex gap-3 bg-black justify-content-center py-5">
            <ClockIcon/>
            <SecondsCounter number ={decenasMillares}/>
            <SecondsCounter number ={millares}/>
            <SecondsCounter number ={centenas}/>
            <SecondsCounter number ={decenas}/>
            <SecondsCounter number ={unidades}/>
        </div>
    )
}
export default Counter