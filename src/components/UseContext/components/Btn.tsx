import { FC, useContext } from "react"
import { Context } from "../UseContext"


export const Btn: FC = () => {
    const num = useContext(Context)
    
    return (
        <div className="btn-container">
            <h3>{num} in childest</h3>
        </div>
    )
}


// export const Btn: FC = () => {
//     const [signedIn, setSignedIn] = useContext(Context)
    
//     return (
//         <div className="btn-container">
//             <button onClick={() => setSignedIn(!signedIn)}>
//                 {signedIn ? 'Sign out' : 'Sign in'}
//             </button>
//         </div>
//     )
// }