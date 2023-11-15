import {ChangeEvent, FC, PropsWithChildren, useEffect, useState} from "react";
import './HOCstyles.css'

type PaperProps = { value: string }
export const Paper: FC<PaperProps> = ({ value }) => (
    <p className="paper">{value}</p>
);


type WhileDeskProps = {
    value: string;
    onChange?: (value: string) => void;
};
export const WhiteDesk: FC<WhileDeskProps> = ({ value, onChange }) => {
    const [currentValue, setCurrentValue] = useState(value);
    const handeOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const targetValue = event.target.value;

        if (onChange) {
            onChange(targetValue);
            setCurrentValue(targetValue);
        }
    }

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    return (
        <textarea value={currentValue} onChange={handeOnChange}/>
    );
}

export type PaperHOC = {
    Component: FC<PaperProps | WhileDeskProps>;
    componentProps: PropsWithChildren<{ text: string }>;
    callbackFunction?: (value: string) => void;
}
export const PaperHOC: FC<PaperHOC> = (
        {
            Component,
            componentProps ,
            callbackFunction,
        }
    ) => {
    const textValue = 'Your typed: ' + componentProps.text;

    return <Component value={textValue} onChange={callbackFunction} />
}