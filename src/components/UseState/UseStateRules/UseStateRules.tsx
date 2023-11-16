import "./UseStateRules.style.css"
import { FC } from "react";

export const UseStateRules: FC = () => {
    return (
        <div className="useState-rules-container">
            <h3>useState Rules</h3>
            <ul>
                <li>useState Overview: useState is a powerful React Hook that enables the addition of state to function components. It helps manage and update state within these components efficiently.</li>
                <li>Automatic Rerendering: With useState, any changes to the state trigger an automatic re-rendering of the component. This ensures that the component reflects the updated state information.</li>
                <li>Calling useState set function subsequently: to facilitate subsequent calls, ensure to pass the previous variable as an argument within the anonymous function.</li>
                <li>Handling Default State: The default value for state undergoes evaluation on every component re-render. To optimize performance, consider using an anonymous function for the default state when it involves complex or slow computations.</li>
                <li>Updating Object Values: When setting a new value for an object state, ensure to copy the previous object. If the new value is directly assigned without copying, it can lead to the overwriting of the existing object, potentially causing the loss of any properties not included in the new object. Utilizing the rest parameter for object spreading helps prevent unintentional deletion of existing properties.</li>
            </ul>
        </div>
    )
}