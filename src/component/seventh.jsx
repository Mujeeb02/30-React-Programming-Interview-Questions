import { useEffect, useState } from "react"

//build a timer that counts down from a specified time...
const Seventh = () => {
    const [time, setTime] = useState(5);
    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time-1);
            }, 1000)
        }
        if(time==0){
            alert("your time has finished")
        }
    }, [time])
    return (
        <div>
            <p>{time}</p>
            
        </div>
    )
}

export default Seventh
