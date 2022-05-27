import React, { useEffect, useState, useRef } from "react";

const Stopwatch = () => {
  // const [timerId, settimerId] = useState(0);
  // New concept day-8
  const timerId = useRef(null);
  const [watch, setwatch] = useState(0);

  const start = () => {
    //   if timerId not equal to null or zero
    if (!timerId.current) {
      let id = setInterval(() => {
        setwatch((prev) => prev + 1);
      }, 500);
      // settimerId(id);
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
    // settimerId(null);
  };

  const reset = () => {
    clearInterval(timerId.current);
    setwatch(0);
  };
// For unmounting i.e. cleaning the code
  useEffect( () => {
    return reset;
  }, []);

  return (
    <div>
      <h2>StopWatch</h2>
      <h1>{watch}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
