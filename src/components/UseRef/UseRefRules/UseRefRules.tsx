import "./UseRefRules.style.css"
import { FC } from "react";

export const UseRefRules: FC = () => {
    return (
        <div className="useRef-rules-container">
            <h3>UseRef Rules</h3>
            <ul>
                <li>useRef doesn’t cause your component to re-render when it gets changed
                    <ul>
                        <li>but it persists between different re-renders</li>
                    </ul>
                </li>
                <li>useRef returns an object with a current property</li>
                <li>each element in jsx has “ref” attribute</li>
                <li>it can direct to the element it is set on</li>
                <li>it can store previous value in a variable</li>
                <li>don’t use useRef when you want to:
                    <ul>
                        <li>appendChild removeChild and so on. Do it with JSX</li>
                        <li>set value of the element</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}