import { FC, ReactNode } from "react";
import {Paper, PaperHOC, WhiteDesk } from "../HOCExample/HOCExample.tsx";

export type BaseLayoutProps = {
    textInputValue: string;
    callbackFunction: (value: string) => void;
    children: ReactNode;
}

// HOF - High Order Function - it takes function and return function
// HOC - High Order Component - it takes component and return component
export const BaseLayout: FC<BaseLayoutProps> = ({ textInputValue, callbackFunction, children }) =>
    (
        <>
            <hr/>
            <h1 className='title'>Hello</h1>
            <hr/>
            <p className="text-input-value">{textInputValue}</p>
            {children}
            <hr/>
            <Paper value={textInputValue} />
            <PaperHOC Component={Paper} componentProps={{ text: textInputValue }} />
            <PaperHOC Component={WhiteDesk} componentProps={{ text: textInputValue }} callbackFunction={callbackFunction} />
        </>
    );