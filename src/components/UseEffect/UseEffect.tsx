import "./UseEffect.style.css"
import { FC, useEffect, useState } from "react";
import { UseEffectRules } from "./UseEffectRules/UseEffectRules";

export const UseEffect: FC = () => {
    const [count, setCounter] = useState(0)
    console.log('-- render on mount outside of hook --');

    useEffect(() => {
        console.log('-- 1. second param not passed --');
    })
    useEffect(() => {
        console.log('-- 2. second param passed --');
    }, []) 
    useEffect(() => {
        return () => {
            // used for "cleanup", for example removing eventListener, or unsub from api
            console.log('-- 0. in return --');
        }
    })

    const incrementCount = () => {
        console.log(' -- 4. on setCounter --');        
        setCounter(prevCount => prevCount + 1)
    }

    return (
        <div className="container">
            <div className="UseEffect-container">
                <div>useEffect</div>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <UseEffectRules />
        </div>
    )
}