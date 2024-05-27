import { api } from "../../lib/axios";

export function setUserLocalStorage(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user ?? null;
}

export async function loginRequest(username: string, password: string) {
    try {
        const response = await api.post('/login', {
            "email": username,
            "password": password
        })

        console.log(response)

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