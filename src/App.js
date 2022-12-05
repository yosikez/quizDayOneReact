import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';

function App() {
  const [namaFungsi, setNamaFungsi] = useState('Yosi'); //Conctoh penggunaan state pada react js
  const [counter, setCounter] = useState(0); // state kedua yang saya coba

  // const inputChange = (e) => {
  //   setNama(e.target.value);
  // }
  let hari = [
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jum`at',
  ];

  // function untuk menambahkan nilai dari state counter
  const counterUp = () => {
    setCounter((prevState) => prevState + 1);
  }

  // function untuk mengurangi nilai dari state counter
  const counterDown = () => {
    counter == 0 ? alert("jangan diminusin kaya akhlak mu") : setCounter((prevState) => prevState - 1)
  }
  // function untuk mereset nilai dari state counter
  const resetCount = () => {
    setCounter(0);
  }

  return (
    <div className='App'>
          {/* <h1><code>{nama}</code></h1> */}

          {/* <input type="text" onChange={inputChange} /> */}
          {/* <Button namaLengkap={nama}/>

          
          <button onClick={counterUp}>Tambah</button>
          {counter == 0 ? null : <button onClick={counterDown}>Kurang</button>}

          {counter != 0 && <button onClick={resetCount}>Reset</button>} */}
          {/* {counter == 0 ? null : <button onClick={resetCount}>Reset</button>} */}
      <div className="card shadow">
        <h1>Counter</h1>
        <h1>{counter}</h1>
        <Button fungsi={counterUp} namaFungsi={"tambah"} />
        {counter == 0 ? null : <Button fungsi={counterDown} namaFungsi={"kurang"} />}
        {counter == 0 ? null : <Button fungsi={resetCount} namaFungsi={"reset"} />}
      </div>


      <div className="card shadow">
        <h1>Nama Hari</h1>
        <select name="hari" id="hari">
          {
            hari.map((item, index) => {
              return <option key={index} value={item}>{item}</option>;
            })
          }
        </select>
      </div>
    </div>
  );
}

export default App;
