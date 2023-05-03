import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }
    
    return context
}

////////////////////////////////////////////////////////////////
// The Net Ninja (2022)                                       //
// MERN-auth-tutorial [source code]                           //
// https://github.com/iamshaunjp/MERN-Auth-Tutorial/tree/main //
////////////////////////////////////////////////////////////////