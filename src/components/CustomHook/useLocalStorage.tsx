import { useEffect, useState } from "react";

function getSavedValue(key: string, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    // if initial value is a function call it to return a value from it
    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

export const useLocalStorage = (key: string, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue];
}