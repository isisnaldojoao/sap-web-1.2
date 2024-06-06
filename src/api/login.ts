import { api } from "../lib/axios";

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string 
  payload: {
    username: string
  }
}

export async function login({ email, password }: LoginRequest) {
  const response = await api.post<LoginResponse>('/login', { email, password })

  return response.data
}