import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
        if(timer > 100)
        {
            clearInterval(id);
        }
        else{
            setTimer(timer+1);
        }
    //   setTimer((timer) => timer - 1);
    }, 100);

    return () => {
        // call a api to inform that user has logged out
      clearInterval(id);
    };
  }, [timer]);

  return (
    <div>
        Count Up : {timer}
    </div>
    );
};

export default Timer;
