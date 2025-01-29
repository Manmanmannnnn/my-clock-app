import React,{useState,useRef,useEffect} from "react";
import './Stopwatch.css'
function Timer(){
    const [isRunning,setIsRunning]=useState(false);
    const [elapsedTime, setElapsedTime]=useState(0);
    const intervalId=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(()=>{

        if(isRunning){
            intervalId.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current)
            },10);


        }

        return ()=>{
            clearInterval(intervalId.current);
        }

    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current=Date.now() - elapsedTime;
        
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false)

    }

    function formatTime(){


        let hours=Math.floor(elapsedTime/(1000*60*60)%24)
        let minutes=Math.floor(elapsedTime/(1000*60)%60)
        let seconds=Math.floor(elapsedTime/((1000))%60)
        let milliseconds = Math.floor((elapsedTime%1000)/10)

        hours=String(hours).padStart(2,'0')
        minutes=String(minutes).padStart(2,'0')
        seconds=String(seconds).padStart(2,'0')
        milliseconds=String(milliseconds).padStart(2,'0')
        return `${hours}:${minutes}:${seconds}:${milliseconds}`

    }

    return(
            <div className="stopwatch">
                <h2>Stop Watch</h2>
                    <div className="display">{formatTime()}</div>
                    <div className="controls"></div>
                    <div className="buttons">
                        <button className="startButton" onClick={start}>Start</button>
                        <button className="stopButton" onClick={stop}>Stop</button>
                        <button className="resetButton" onClick={reset}>Reset</button>
                    </div>
            </div>

    );
}

export default Timer