import React from "react";
import { useState } from "react";
import classes from "./Calc.module.css";

function Calc() {
  const [result, setResult] = useState("");

  const displayResult = () => {
    try {
      setResult(eval(result));
    } catch (err) {
      setResult("Not Valid");
    }
  };

  const handleResult = (e) => setResult(result + e.target.innerHTML);
  const backspace = () => setResult(result.slice(0, -1));
  const clear = () => setResult("");
  const percentage = () => setResult(result / 100);

  return (
    <>
      <nav>Calculator Using React JS</nav>
      <div className={classes.container}>
        <div className={classes.input}>
          <input type="text" value={result} autoFocus />
          <button onClick={backspace}>C</button>
        </div>
        <div className={classes.keys}>
          <button onClick={clear} id={classes.clear} className={classes.non}>
            CLR
          </button>
          <button onClick={percentage} className={classes.non}>
            %
          </button>
          <button onClick={handleResult} className={classes.non}>
            /
          </button>
          <button onClick={handleResult}>7</button>
          <button onClick={handleResult}>8</button>
          <button onClick={handleResult}>9</button>
          <button onClick={handleResult} className={classes.non}>
            *
          </button>
          <button onClick={handleResult}>4</button>
          <button onClick={handleResult}>5</button>
          <button onClick={handleResult}>6</button>
          <button onClick={handleResult} className={classes.non}>
            -
          </button>
          <button onClick={handleResult}>1</button>
          <button onClick={handleResult}>2</button>
          <button onClick={handleResult}>3</button>
          <button onClick={handleResult} className={classes.non}>
            +
          </button>
          <button onClick={handleResult}>0</button>
          <button onClick={handleResult}>.</button>
          <button
            onClick={displayResult}
            id={classes.equal}
            className={classes.non}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calc;
