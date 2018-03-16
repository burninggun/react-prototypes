import React from 'react';
import ReactDOM from 'react-dom';



const luckyNumber = ()=> {
    return Math.floor(Math.random()*1000)+1
}

const Greeting = (name, luckyNumber)=>{ 
    return <div className = 'container'>
        <h1> Welcome {name}</h1>
        <h2> Your Lucky number is: {luckyNumber}</h2>
    </div>
 }

const user = {
    name: 'will',
    luckyNumber: luckyNumber(),
}




ReactDOM.render(
    <div className = "app">
        {Greeting(user.name, user.luckyNumber)}
    </div>,
    document.getElementById('root')
);
