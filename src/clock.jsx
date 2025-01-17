import React,{useState,useEffect} from "react";

function MyClock(){
    const [hour,setHour]=useState('00');
    const [minute,setMinute]=useState('00')
    const [second,setSecond]=useState('00')

    useEffect(()=>{
       
        const intervalId=setInterval(()=>{
            const date=new Date
            setHour(date.getHours())
            setMinute(date.getMinutes())
            setSecond(date.getSeconds())
        })
        
        return ()=>{
            clearInterval(intervalId)
        }
        
    },[])

    function formatTime(value){
        return value<10?'0'+value:value

        
    }

    function formatHour(value){
        return value>12?value-12:value
    }

    function meridiem(value){
        return value<12?'AM':'PM'
    }


    return(
        <div>
            <span className="clock-container">{formatHour(formatTime(hour))}: {formatTime(minute)}: {formatTime(second)} {meridiem(hour)}</span>
        </div>
    );
}

export default MyClock