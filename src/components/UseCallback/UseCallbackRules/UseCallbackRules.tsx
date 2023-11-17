import "./UseCallbackRules.style.css"
import { FC } from "react";

export const UseCallbackRules: FC = () => {
    return (
        <div className="useCallback-rules-container">
            <h3>useCallback Rules</h3>
            <ul>
                <li>It does the same as useMemo, with the difference that it returns the function, not only functions return value.</li>
                <li>As it passes a function it can take and pass parameters.</li>

            </ul>
        </div>
    )
}