import React from "react";
import SecondsCounter from "./SecondsCounter";
import ClockIcon from "./ClockIcon";

const Counter = ({count, digits}) =>{
    let unidades = count % 10
    let decenas = (Math.floor(count / 10)%10)
    let centenas = (Math.floor(count / 100)%10)
    let millares = (Math.floor(count / 1000)%10)
    let decenasMillares = (Math.floor(count / 10000)%10)

    let contador=[]
    for(let i = 0;i<digits;i++){
        let newDigit = (Math.floor(count / (10**i))%10)
        contador.unshift(newDigit)
    }

    return (
        <div className="d-flex gap-3 bg-black justify-content-center py-5">
            <ClockIcon/>
            {contador.map(x => <SecondsCounter number = {x}/> )}
        </div>
    )
}
export default Counter