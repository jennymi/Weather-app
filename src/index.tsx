import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './misc/serviceWorker';
import "./styles/bootstrap.overrides.scss"
import './index.css';

/**
 * Find icons: https://fontawesome.com/icons?d=gallery
 * How to import and use icon? See: https://www.npmjs.com/package/@fortawesome/react-fontawesome
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faCoffee)

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
