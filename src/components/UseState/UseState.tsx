import "./UseState.style.css"
import { FC, useState } from "react";
import { UseStateRules } from "./UseStateRules/UseStateRules";

export const UseState: FC = () => {
    const [count, setCounter] = useState(0)

    // using anonymous function to set default state
    // const [count, setCounter] = useState(() => {
    //     console.log('run');
    //     return 0;
    // })
    // function testState() {
    //     console.log('run test');
    //     return 0;
    // }
    // const [count, setCounter] = useState(testState());

    let fakeCount = 0;

    const incrementCount = () => {
        setCounter(count + 1);
    }

    const fakeIncrement = () => {
        console.log(fakeCount);
        return fakeCount += 1;
    }
    // // using anonymous function in useState
    // const incrementCount = () => {
    //     // not using anon function decreases by one
    //     setCounter(count + 1);
    //     setCounter(count + 1);

    //     // decresease by two
    //     // setCounter(prevCount => prevCount + 1);
    //     // setCounter(prevCount => prevCount + 1);
    // }

    return (
        <div className="container">
            <div className="useState-container">
                <div>useState</div>
                <button onClick={incrementCount}>+</button>
                <span>{count}</span>
                <button onClick={fakeIncrement} className="fakeButton">{fakeCount}</button>

            </div>
                <UseStateRules />
        </div>
    )
}