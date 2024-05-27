import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, ILoginResponse, IUser } from "./types";
import { loginRequest, setUserLocalStorage, getUserLocalStorage } from "./util";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = getUserLocalStorage();
        if (user) {
            setUser(user);
        }
    }, []);

    async function authenticate(username: string, password: string){
        // Realizando a requisição de login
        const response  = await loginRequest(username, password);
        console.log('response', response)
        // Verificando se a resposta contém o token
        if (response && response.token) {
            const payload = { token: response.token  };
            setUser({ username, password });
            setUserLocalStorage(payload);
        }else{
            logout()    
        }

    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
}