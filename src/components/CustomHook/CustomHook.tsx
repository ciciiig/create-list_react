import "./CustomHook.style.css"
import { FC, useState } from "react";
import { CustomHookRules } from "../CustomHook/CustomHookRules/CustomHookRules";
import { useLocalStorage } from "./useLocalStorage";

// Creating custom hooks that saves variables in local storage
export const CustomHook: FC = () => {
    // const [name, setName] = useState('');
    const [name, setName] = useLocalStorage('name', '')

    return (
        <div className="container">
            <div className="customHook-container">
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>

            <CustomHookRules />
        </div>
    )
}