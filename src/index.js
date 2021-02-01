import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Cesar Herrera';
const element=<h1>Hello, {name}</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p>
      This is another line test
    </p>
  {element}
  </React.StrictMode>,
  document.getElementById('root')
  /**
   * This is jsx syntax and will be translated to:
   * ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
   */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
