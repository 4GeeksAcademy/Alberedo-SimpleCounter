import React from "react";

const SecondsCounter = ({number}) => {
    let numero = number
    return (
    <div className="rounded-5 text-center" style={{width:"150px", height:"200px", backgroundColor: "rgb(50,50,50)", boxShadow: "2px 2px 10px #002fffff"}}>
        <p style={{color: "white", fontSize:"150px", lineHeight:"180px", textShadow:"2px 2px #000000ff"}}>{number}</p>
       
    </div> 
    )}

export default SecondsCounter

