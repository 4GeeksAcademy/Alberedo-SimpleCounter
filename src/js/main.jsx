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

let count = 0


let myInterval = setInterval(() => {
  reactRender.render(
    <React.StrictMode>
      <Counter count={count} />

    </React.StrictMode>,
  )
  count++
}, 1000);



