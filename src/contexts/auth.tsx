import { createContext, ReactNode, useContext, useState } from "react";

import { clearLocalStorage, getTokenLocalStorage, getUserLocalStorage, setNivelLocalStorage, setTokenLocalStorage, setUserLocalStorage } from "../utils/auth";
import { LoginRequest, login as authenticate } from "../api/login";
import { api } from "../lib/axios";

type Usuario = {
  nome: string,
  nomeDeUsuario: string,
  nivel: number
}

interface AuthContextData {
  user: string | Usuario | null
  logged: boolean
  login: (request: LoginRequest) => Promise<void>
  logout: () => void
};

const AuthContext = createContext({} as AuthContextData);

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string |Usuario | null>(() => {
    const storageUser = getUserLocalStorage();
    const storageToken = getTokenLocalStorage()

    if (storageUser && storageToken) {
      api.defaults.headers.common.Authorization = `Bearer ${storageToken}`;

      return storageUser;
    }

    return null;
  });

  async function login({ username, password }: LoginRequest) {
    const { accessToken, payload } = await authenticate({ username, password });
    const usuario: Usuario = {
      nome: payload.username,
      nomeDeUsuario: payload.username,
      nivel: payload.nivel
    }
    setUser(usuario);

    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    setUserLocalStorage(usuario.nome);
    setTokenLocalStorage(accessToken);
    setNivelLocalStorage(usuario.nivel);
  };

  function logout() {
    clearLocalStorage();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logged: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuth };