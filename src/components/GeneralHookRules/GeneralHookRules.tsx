import "./generalHookRules.style.css"
import { FC } from "react";

export const GeneralHookRules: FC = () => {
    return (
        <div className="general-container">
            <h3>General rules for Hooks</h3>
            <ul>
                <li>Top-level Hooks: Use hooks at the beginning of React function components.</li>
                <li>Hooks in React functions: Limit Hooks to React function components or custom Hooks, excluding regular JavaScript functions or class components.</li>
                <li>Avoid conditional Hooks: Do not place Hooks inside if statements, loops, or nested functions; call them unconditionally for consistent rendering behavior.</li>
            </ul>
        </div>
    )
}