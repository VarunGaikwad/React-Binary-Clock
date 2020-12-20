import { Fab } from '@material-ui/core';
import { useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
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
      <div className="App_Column  App__Hour__Tense">
        <Fab color={convertNumberToBinary(time[0])[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[0])[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{time[0]}</label>
      </div>
      <div className="App_Column App__Hour__Once">
        <Fab color={convertNumberToBinary(time[1])[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[1])[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[1])[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{time[1]}</label>
      </div>
      <div className="App_Column App__Min__Tense">
        <Fab color={convertNumberToBinary(time[2])[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[2])[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[2])[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{time[2]}</label>
      </div>
      <div className="App_Column App__Min__Once">
        <Fab color={convertNumberToBinary(time[3])[0] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[3])[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[3])[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[3])[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{time[3]}</label>
      </div>
      <div className="App_Column App__Sec__Tense">
        <Fab color={convertNumberToBinary(time[4])[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[4])[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[4])[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{time[4]}</label>
      </div>
      <div className="App_Column App__Sec__Once">
        <Fab color={convertNumberToBinary(time[5])[0] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[5])[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[5])[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(time[5])[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{time[5]}</label>
      </div>
    </div>
  );
}

export default App;
