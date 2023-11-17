import "./UseCallback.style.css"
import { FC, useCallback, useState } from "react";
import { UseCallbackRules } from "../UseCallback/UseCallbackRules/UseCallbackRules";
import { List } from "./List";

export const UseCallback: FC = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // const getItems = () => {
    //     return [number, number + 1, number + 2];
    // }
    const getItems = useCallback((incByFive: number) => {
        return [number, number + 1 + incByFive, number + 2 + incByFive];
    }, [number]);

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }


    return (
        <div className="container">
            <div className="useCallback-container">
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
                <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>

                <div style={themeStyles}>
                    <List getItems={getItems} />
                </div>
            </div>

            <UseCallbackRules />
        </div>
    )
}