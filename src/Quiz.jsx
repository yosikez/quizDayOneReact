import React, { useState } from "react";
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import './Quiz.css'

const Quiz = () => {
    const [matematika, setMatematika] = useState(0);
    const [saintek, setSaintek] = useState(0);
    const [fisika, setFisika] = useState(0);
    const [kimia, setKimia] = useState(0);
    const [biologi, setBiologi] = useState(0);
    const [result, setResult] = useState('');
    
    const getData1 = (e) => {
        setMatematika(e.target.value);
    }
    const getData2 = (e) => {
        setSaintek(e.target.value);
    }
    const getData3 = (e) => {
        setFisika(e.target.value);
    }
    const getData4 = (e) => {
        setKimia(e.target.value);
    }
    const getData5 = (e) => {
        setBiologi(e.target.value);
    }

    const resultGrade = () => {
        let x = parseInt(matematika);
        let y = parseInt(saintek);
        let z = parseInt(fisika); 
        let m = parseInt(kimia);
        let k = parseInt(biologi);

        if(x == 0 || y == 0 || z == 0 || m == 0 || k == 0) {
            alert("masukan nilai terlebih dahulu");
        } else {
        let grade = (x + y + z + m + k) /5;
        console.log(grade);
        switch (true) {
            case grade > 80.1: 
                setResult("A");
                break;
            case grade > 72.01 && grade < 80: 
                setResult("AB");
                break;
            case grade > 64.01 && grade < 72: 
                setResult("B");
                break;
            case grade > 56.01 && grade < 64: 
                setResult("BC");
                break;
            case grade > 48.01 && grade < 56: 
                setResult("C");
                break;
            case grade > 40.01 && grade < 48: 
                setResult("D");
                break;
            case grade > 0 && grade < 40: 
                setResult("D");
                break;
            default :
                setResult("data tidak sesuai");
                break;
        }
    }
    }


    return (
       <div className="main">
        <h1 className="title">Penilaian</h1>
        <div className="data">
            <Input label={"Matematika"} name={"Matematika"} getValue={getData1}/>
            <Input label={"Saintek"} name={"Saintek"} getValue={getData2}/>
            <Input label={"Fisika"}  name={"Fisika"} getValue={getData3}/>
            <Input label={"Kimia"} name={"Kimia"} getValue={getData4}/>
            <Input label={"Biologi"} name={"Biologi"} getValue={getData5}/>

            <Button calculate={resultGrade} name={"result"}/>
            
        </div>
        <div className="result1">
            <h1> Nilai Kamu : {result}</h1>
        </div>
       </div>
    )
}

export default Quiz;