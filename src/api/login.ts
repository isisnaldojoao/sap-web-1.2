import { api } from "../lib/axios";

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  accessToken: string 
  payload: {
    email: string,
    username: string,
    nivel: number
  }
}

export async function login({ username, password }: LoginRequest) {
  const response = await api.post<LoginResponse>('/login', { username, password })

  return response.data
}