import React, { useRef, useEffect, useState } from "react";
import styles from "./timer.module.css";

const IncrementTimerAssignment = (props) => {
  // console.log(props);
  let [initialTimer, setInitialTimer] = useState(Number(props.initialTime));
  const timerId = useRef(null);

  // clearInterval(timerId.current);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setInitialTimer((initialTimer) => initialTimer + 1);
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    if (initialTimer === props.finalTime) {
      setInitialTimer(props.initialTime);
      clearInterval(timerId.current);
    }
  }, [initialTimer]);

  return (
    <div className={styles.timerMain}>
      <div className={styles.timer}>Timer: {initialTimer}</div>
    </div>
  );
};

export default IncrementTimerAssignment;
