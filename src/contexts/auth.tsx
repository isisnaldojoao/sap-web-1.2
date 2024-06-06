import { createContext, ReactNode, useContext, useState } from "react";

import { clearLocalStorage, getTokenLocalStorage, getUserLocalStorage, setTokenLocalStorage, setUserLocalStorage } from "../utils/auth";
import { LoginRequest, login as authenticate } from "../api/login";
import { api } from "../lib/axios";

interface AuthContextData {
  user: string | null
  logged: boolean
  login: (request: LoginRequest) => Promise<void>
  logout: () => void
};

const AuthContext = createContext({} as AuthContextData);

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(() => {
    const storageUser = getUserLocalStorage();
    const storageToken = getTokenLocalStorage()

    if (storageUser && storageToken) {
      api.defaults.headers.common.Authorization = `Bearer ${storageToken}`;

      return storageUser;
    }

    return null;
  });

  async function login({ email, password }: LoginRequest) {
    const { accessToken, payload } = await authenticate({ email, password });

    setUser(payload.username);

    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    setUserLocalStorage(payload.username);
    setTokenLocalStorage(accessToken);
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