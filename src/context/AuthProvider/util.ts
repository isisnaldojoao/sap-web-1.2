import { Api } from "../../services/api";

export function setUserLocalStorage (user: any) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserLocalStorage () {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user ?? null;
}

export async function LoginRequest (username: string, password: string){
    try {
        
        const response = await Api.post('login', {
            "email": username,
            "password": password
        })

        if(response.status === 200){
            return response.data
        }else{
            return null
        }

    } catch (error) {
        console.log('erro no login')
        return null;
    }
}