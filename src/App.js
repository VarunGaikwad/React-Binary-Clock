import { Fab } from '@material-ui/core';
import { useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toTimeString().split(" ")[0].split(":").join(""));
  setInterval(function () {
    setTime(new Date().toTimeString().split(" ")[0].split(":").join(""));
  }, 1000);

  const convertNumberToBinary = (sNum) => {
    let binary = Number(sNum).toString(2);
    while (binary.length < 4) binary = "0" + binary;
    return binary;
  }

  return (
    <div className="App">
      <div className="App_Column ">
        <Fab color='default' style={{ background: convertNumberToBinary(time[0])[2] === '1' ? 'blueviolet' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[0])[3] === '1' ? 'blueviolet' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <label className="App__label">{time[0]}</label>
        <label className="App__label">{convertNumberToBinary(time[0])}</label>
      </div>
      <div className="App_Column">
        <Fab color='default' style={{ background: convertNumberToBinary(time[1])[1] === '1' ? 'blueviolet' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[1])[2] === '1' ? 'blueviolet' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[1])[3] === '1' ? 'blueviolet' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <label className="App__label">{time[1]}</label>
        <label className="App__label">{convertNumberToBinary(time[1])}</label>
      </div>
      <div className="App_Column">
        <Fab color='default' style={{ background: convertNumberToBinary(time[2])[1] === '1' ? 'darkkhaki' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[2])[2] === '1' ? 'darkkhaki' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[2])[3] === '1' ? 'darkkhaki' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <label className="App__label">{time[2]}</label>
        <label className="App__label">{convertNumberToBinary(time[2])}</label>
      </div>
      <div className="App_Column">
        <Fab color='default' style={{ background: convertNumberToBinary(time[3])[0] === '1' ? 'darkkhaki' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[3])[1] === '1' ? 'darkkhaki' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[3])[2] === '1' ? 'darkkhaki' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[3])[3] === '1' ? 'darkkhaki' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <label className="App__label">{time[3]}</label>
        <label className="App__label">{convertNumberToBinary(time[3])}</label>
      </div>
      <div className="App_Column">
        <Fab color='default' style={{ background: convertNumberToBinary(time[4])[1] === '1' ? 'greenyellow' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[4])[2] === '1' ? 'greenyellow' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[4])[3] === '1' ? 'greenyellow' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <label className="App__label">{time[4]}</label>
        <label className="App__label">{convertNumberToBinary(time[4])}</label>
      </div>
      <div className="App_Column">
        <Fab color='default' style={{ background: convertNumberToBinary(time[5])[0] === '1' ? 'greenyellow' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[5])[1] === '1' ? 'greenyellow' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[5])[2] === '1' ? 'greenyellow' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <Fab color='default' style={{ background: convertNumberToBinary(time[5])[3] === '1' ? 'greenyellow' : 'none', transition: 'background 550ms ease-in-out' }} size="medium"></Fab>
        <label className="App__label">{time[5]}</label>
        <label className="App__label">{convertNumberToBinary(time[5])}</label>
      </div>
    </div >
  );
}

export default App;
