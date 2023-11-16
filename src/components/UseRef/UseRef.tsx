import "./UseRef.style.css"
import { FC, useRef } from "react";
import { UseRefRules } from "./UseRefRules/UseRefRules";

export const UseRef: FC = () => {
    const renderCount = useRef(1)
    console.log('-- Render outside of increment function --');

    const incrementRender = () => {
        console.log('-- inside increment function --', renderCount);
        renderCount.current = renderCount.current + 1
    }

    return (
        <div className="container">
            <div className="useRef-container">
                <div>UseRef</div>
                <span>{renderCount.current}</span>
                <button onClick={incrementRender}>+</button>
            </div>
            <UseRefRules />
        </div>
    )
}

// export const UseRef: FC = () => {
//     const inputRef = useRef<HTMLInputElement>(null);

//     const handleFocus = () => {
//         inputRef.current?.focus()
//     }

//     return (
//         <div className="container">
//             <div className="useRef-container">
//                 <input ref={inputRef} />
//                 <button onClick={handleFocus}>Focus</button>
//             </div>
//             <UseRefRules />
//         </div>
//     )
// }