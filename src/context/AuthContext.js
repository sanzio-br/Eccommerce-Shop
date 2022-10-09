import { createContext, useEffect, useState } from "react";
import { userRequest } from "../Url";

export const AuthContext = createContext()
export const AuthContextProvider =({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (user) =>{
        const res = await userRequest.post("/auth/login", user);
        setCurrentUser(res.data)
    }
    const logout = async (user) =>{
        await userRequest.post("/auth/logout", user);
        setCurrentUser(null)
    }
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser]);

    return <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>;
}