import { Fab } from '@material-ui/core';
import { useState } from 'react';
import './App.css';

function App() {
  const [Hour_tense, setHour_tense] = useState(0),
    [Hour_once, setHour_once] = useState(0),
    [Min_tense, setMin_tense] = useState(0),
    [Min_once, setMin_once] = useState(0),
    [Sec_tense, setSec_tense] = useState(0),
    [Sec_once, setSec_once] = useState(0);
  setInterval(function () {
    let sNow = new Date().toTimeString().split(" ")[0].split(":").join(""),
      aTags = document.querySelectorAll(".App__label"),
      sLen = aTags.length;
    for (var i = 0; i < sLen; i++) {
      switch (i) {
        case 0:
          setHour_tense(sNow[i]);
          break;
        case 1:
          setHour_once(sNow[i]);
          break;
        case 2:
          setMin_tense(sNow[i]);
          break;
        case 3:
          setMin_once(sNow[i]);
          break;
        case 4:
          setSec_tense(sNow[i]);
          break;
        case 5:
          setSec_once(sNow[i]);
          break;
        default:
          break;
      }
    }
  }, 1000);

  const convertNumberToBinary = (sNum) => {
    let binary = Number(sNum).toString(2);
    while (binary.length < 4) binary = "0" + binary;
    return binary;
  }

  return (
    <div className="App">
      <div className="App_Column  App__Hour__Tense">
        <Fab color={convertNumberToBinary(Hour_tense)[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Hour_tense)[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{Hour_tense}</label>
      </div>
      <div className="App_Column App__Hour__Once">
        <Fab color={convertNumberToBinary(Hour_once)[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Hour_once)[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Hour_once)[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{Hour_once}</label>
      </div>
      <div className="App_Column App__Min__Tense">
        <Fab color={convertNumberToBinary(Min_tense)[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Min_tense)[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Min_tense)[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{Min_tense}</label>
      </div>
      <div className="App_Column App__Min__Once">
        <Fab color={convertNumberToBinary(Min_once)[0] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Min_once)[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Min_once)[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Min_once)[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{Min_once}</label>
      </div>
      <div className="App_Column App__Sec__Tense">
        <Fab color={convertNumberToBinary(Sec_tense)[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Sec_tense)[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Sec_tense)[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{Sec_tense}</label>
      </div>
      <div className="App_Column App__Sec__Once">
        <Fab color={convertNumberToBinary(Sec_once)[0] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Sec_once)[1] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Sec_once)[2] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <Fab color={convertNumberToBinary(Sec_once)[3] === "1" ? "secondary" : "default"} size="medium"></Fab>
        <label className="App__label">{Sec_once}</label>
      </div>
    </div>
  );
}

export default App;
