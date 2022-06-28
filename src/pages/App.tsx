import React from 'react';
import FormComponent from '../components/FormComponent';
import List from '../components/List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <FormComponent />
      <List />
    </div>
  );
}

export default App;
