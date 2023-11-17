import "./UseContext.style.css";
import React, { FC, useState } from "react";
import { Nav } from "./components/Nav";
import { UseContextRules } from "./components/UseContextRules/UseContextRules";

export const Context = React.createContext(0);

export const UseContext: FC = () => {
    const num = 1;

    return (
        <div className="container">
            <div className="useContext-container">
                <Context.Provider value={num}>
                    <h1>{num} in parent</h1>
                    <Nav />
                </Context.Provider>
            </div>
            <UseContextRules />
        </div>
    )
}


// export const Context = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => { }]);

// export const UseContext = () => {
//     const [signedIn, setSignedIn] = useState(false)

//     return (
//         <div className="container">
//             <div className="useContext-container">
//                 <Context.Provider value={[signedIn, setSignedIn]}>
//                     <Nav />
//                     <h1>{signedIn.toString()}</h1>
//                 </Context.Provider>
//             </div>
//             <UseContextRules />
//         </div>
//     )
// }
