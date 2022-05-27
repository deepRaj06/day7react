import React, {useState} from 'react'
import Timer from './components/Timer.jsx'
import Stopwatch from './components/Stopwatch.jsx';
import IncrementTimerAssignment from './components/IncrementTimerAssignment.jsx';
import './App.css';

function App () {
  const[show, setShow] = useState(true);
  // return (<div 
  // className='App'
  // onClick={ () => setShow(!show)}>
  //   {/* <Timer></Timer> */}
  //   {/* {show ? <Timer/> : "App"} */}
  //   <Stopwatch></Stopwatch>
  // </div>)

    return (
      <>
         {/* <Timer></Timer> */}

        <IncrementTimerAssignment initialTime={0} finalTime={59}></IncrementTimerAssignment>
      </>
    )

}

export default App;
