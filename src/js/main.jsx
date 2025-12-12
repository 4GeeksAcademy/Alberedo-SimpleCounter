import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Counter from './components/Counter';

let reactRender = ReactDOM.createRoot(document.getElementById('root'))

let decount = 10
let count = 0
let digits = 5

let stop =()=>{
  clearInterval(myInterval);
}
let resume = ()=>{
  let myInterval = setInterval(() => {
  reactRender.render(
    <React.StrictMode>
      <div className='col-6 d-flex justify-content-between mx-auto mt-3'>
        <button className='btn btn-danger' type="button" onClick={stop}>Parar</button>
        <button className='btn btn-success' type="button" onClick={resume}>Continuar</button>
        <button className='btn btn-warning' type="button" onClick={reset}>Reiniciar</button>
      </div>
      <h1>Contador</h1>
      <Counter count={count} digits={digits} />
      <h1>Cuenta atras</h1>

      <Counter count={decount} digits={digits} />

    </React.StrictMode>,
  )
  count++
  decount > 0 ? decount-- : null


}, 1000);
}
let reset = ()=>{
  count = 0
}

let myInterval = setInterval(() => {
  reactRender.render(
    <React.StrictMode>
      <div className='col-6 d-flex justify-content-between mx-auto mt-3'>
        <button className='btn btn-danger' type="button" onClick={stop}>Parar</button>
        <button className='btn btn-success' type="button" onClick={resume}>Continuar</button>
        <button className='btn btn-warning' type="button" onClick={reset}>Reiniciar</button>
      </div>
      <h1>Contador</h1>
      <Counter count={count} digits={digits} />
      <h1>Cuenta atras</h1>

      <Counter count={decount} digits={digits} />

    </React.StrictMode>,
  )
  count++
  decount > 0 ? decount-- : null


}, 1000);

decount == 0 ? alert("Hola desde React!") : null




