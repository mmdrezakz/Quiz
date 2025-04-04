import { useEffect } from "react"


export default function Time({dispatch,timeToSecond}){
    let min = Math.floor(timeToSecond / 60);
    let sec = timeToSecond % 60
    let iszeromin = min.toString().length === 1 ? "0"+ min : min 
    let iszerosec = sec.toString().length === 1 ? "0"+ sec : sec 

    useEffect(() => {
      const T =   setInterval(() => {
            dispatch({type:"Time",})
        },1000)
        return () => clearInterval(T) 
    },[dispatch])
    return(
        <div className="timer">{iszeromin}:{iszerosec}</div>
    )
}