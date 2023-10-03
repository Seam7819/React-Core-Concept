import { useState } from "react"

export default function Counting () {
    const [count, setCount] = useState(0)
    const increaseNumber = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const dicreaseNumber = () => {
        const newNumber = count -1 ;
        setCount(newNumber)
    }
    return (
        <div className="border-solid border-4 border-sky-500 rounded-md">
            <h2 className="text-5xl">Count : {count} </h2>
            <button onClick={increaseNumber}>Add Number</button>
            <button onClick={dicreaseNumber}>Remove Number</button>
        </div>
    ) 
}