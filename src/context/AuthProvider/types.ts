export interface IUser {
    username?: string;
    password?: string;
}

export interface IContext extends IUser {

    authenticate: ( username: string, password: string) => Promise<void>;

    logout: () => void;
}

export interface ILoginResponse {
    token: string;
    // outras propriedades conforme necessário
  }

export interface IAuthProvider {
    children: JSX.Element;
}