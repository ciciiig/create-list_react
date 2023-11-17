import "./UseContextRules.style.css"
import { FC } from "react";

export const UseContextRules: FC = () => {
    return (
        <div className="useContext-rules-container">
            <h3>UseContext Rules</h3>
            <ul>
                <li>useContext provides state from parent to deeply nested child components.</li>
                <li>All components and their childs inside Context.provider have access to its value.</li>
            </ul>
        </div>
    )
}