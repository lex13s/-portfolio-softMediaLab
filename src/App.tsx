import React from 'react';
import './index.scss';
import {PayrollPreparation} from "./components/payrollPreparation/payrollPreparation";

function App() {


  return (
    <div className="App">
      <div className="header">
        <h1 className="header__title">Тестовое задание</h1>
      </div>
      <PayrollPreparation/>
    </div>
  );
}

export default App;
