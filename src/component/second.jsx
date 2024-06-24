import { useEffect, useState } from 'react'
//build a counter app with the help of react component....
const Counter = () => {
    const [value, setValue] = useState(0);
    const incrementHandler = () => {
        setValue(prevValue => prevValue + 1);
    }
    const decrementHandler = () => {
        if (value > 0) {
            setValue(prevValue => prevValue - 1);
        }

    }
    useEffect(() => {
        console.log("value has changed to " + value);
    })
    return (
        <div>
            <button onClick={incrementHandler}>Increase</button>
            <p>{value}</p>
            <button onClick={decrementHandler}>Decrease</button>
        </div>
    )
}

export default Counter
