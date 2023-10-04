// import React, { useEffect, useState } from 'react';
import User from './pages/user';

function App(/*{prob1}*/) {

  // const [state1, setState1] = useState({ key1: 'value1', key2: 'value2' });

  // useEffect(() => {
  //   // * prob1 her değiştiğinde buraya girecek.
  // }, [prob1]);

  // useEffect(() => {
  //   // * state1.key1 veya prob1 her değiştiğinde buraya girecek.
  // }, [state1.key1, prob1]);

  // useEffect(() => {
  //   // * state1.key1 her değiştiğinde buraya girecek.
  // }, [state1.key1]);

  // useEffect(() => {
  //   // * state1 her değiştiğinde buraya girecek.
  // }, [state1]);

  // useEffect(() => {
  //   // * component ilk render olduğunda buraya girecek.
  // }, []);

  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;