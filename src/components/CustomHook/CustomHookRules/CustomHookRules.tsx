import "./CustomHookRules.style.css"
import { FC } from "react";

export const CustomHookRules: FC = () => {
    return (
        <div className="customHook-rules-container">
            <h3>customHook Rules</h3>
            <ul>
                <li>Custom hook name should start with “use”</li>

            </ul>
        </div>
    )
}