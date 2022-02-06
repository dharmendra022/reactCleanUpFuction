import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseEf from "./useeffect/UseEf";
import Use from "./usestate/Use"
import Cleanup from "./useeffect/Cleanup"
// import UserRef from "./uncontrolled/UserRef"

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>
  {/* <UseEf/> */}
  <Use/>
  <Cleanup/>
  {/* <UserRef/> */}

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
