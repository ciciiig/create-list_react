import "./UseEffectRules.style.css"
import { FC } from "react";

export const UseEffectRules: FC = () => {
    return (
        <div className="UseEffect-rules-container">
            <h3>UseEffect Rules</h3>
            <ol>
                <li>code inside useEffect parameter function: executes on first init and on every render</li>
                <li>if we are passing second parameter to a useEffect parameter function: code inside useEffect parameter function executes on first init and only when second parameter changes</li>
                <li>return function inside useEffect parameter function: runs after unmount before event listeners and before code inside useEffect parameters function executes.
                    <ul>
                        <li>used for "cleanup", for example removing eventListener, or unsub from api call</li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}