import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';

function App() {
  const [label, setLabel] = useState('Yosi'); //Conctoh penggunaan state pada react js
  const [name, setName] = useState('name'); //Conctoh penggunaan state pada react js
  const [tinggi, setTinggi] = useState(0); // state kedua yang saya coba
  const [berat, setBerat] = useState(0); // state kedua yang saya coba
  const [result, setResult] = useState('');


  // // function untuk menambahkan nilai dari state counter
  // const counterUp = () => {
  //   setCounter((prevState) => prevState + 1);
  // }

  // // function untuk mengurangi nilai dari state counter
  // const counterDown = () => {
  //   counter == 0 ? alert("jangan diminusin kaya akhlak mu") : setCounter((prevState) => prevState - 1)
  // }
  // // function untuk mereset nilai dari state counter
  // const resetCount = () => {
  //   setCounter(0);
  // }

  const getInputTinggi = (e) => {
    setTinggi(e.target.value);
  }
  const getInputBerat = (e) => {
    setBerat(e.target.value);
  }
  const resultBMI = () => {
    let t = tinggi / 100;
    let b = berat;

    if(tinggi == 0 || berat == 0) {
      alert("masukan nilai terlebih dahulu");
    } else {

    let bmi = b / (t*t);
      console.log(bmi);
    // if(bmi < 18.5){
    //   setResult("kurang berat badan");
    // } else if( bmi > 18.5 && bmi <  22.9){
    //   setResult("Normal");
    // } else if( bmi > 23 && bmi < 24.9){
    //   setResult("Kelebihan Berat Badan");
    // } else if( bmi > 25 && bmi < 29.5){
    //   setResult("Obesitas tingkat 1");
    // } else {
    //   setResult("Obesitas tingkat 2");
    // }

    switch (true){
      case bmi < 18.5 :
        setResult("kurang berat badan");
        break;
      case bmi > 18.5 && bmi <  22.9 :
        setResult("Normal");
        break;
      case bmi > 23 && bmi < 24.9:
        setResult("Kelebihan Berat Badan");
        break;
      case bmi > 25 && bmi < 29.5:
        setResult("Obesitas tingkat 1");
        break;
      default :
        setResult("Obesitas tingkat 2");
        break;
    } 
    }
  }

  return (
    <div className='App'>
         <div className="card">
          <h1>BMI CALCULATOR</h1>
            <Input label={"Tinggi Badan (cm):"} name={"tinggi"} getValue={getInputTinggi} />
            <Input  label={"Berat Badan (kg):"} name={"Berat"} getValue={getInputBerat}/>
            <Button calculate={resultBMI} name={"result"}/>
         </div>
         <div className="card result">
            <h2>BMI RESULT</h2>
            <p>Tinggi : {tinggi} cm</p>
            <p>Berat : {berat} kg</p>
            <p>Result BMI: {result}</p>
         </div>
         
    </div>
  );
}

export default App;
