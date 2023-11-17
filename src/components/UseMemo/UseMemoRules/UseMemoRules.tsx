import "./UseMemoRules.style.css"
import { FC } from "react";

export const UseMemoRules: FC = () => {
    return (
        <div className="useMemo-rules-container">
            <h3>UseMemo Rules</h3>
            <ul>
                <li>it’s caching a value, not to recompute it on every render.</li>
                <li>In values passed by reference useMemo will work if we choose exact value inside of it. For example, in case of object a value inside of an object should be passed as a changeable value in useMemo.</li>
                <li>Why not to use it on everything:
                    <ul>
                        <li>On each render useMemo function has to be called and value must be saved in memory. </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}