import { create } from "zustand";
import * as AuthApi from '@/services/api'

export interface AuthState {
    token: string | null;
    isLogged: boolean;
    error: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    token: AuthApi.getToken(),
    isLogged: AuthApi.isLogged(),
    error: false,
    login: (username, password) => {
        AuthApi.login(username, password).then(() => {
            set({
                isLogged: AuthApi.isLogged(), 
                token: AuthApi.getToken(),
                error: false
            })
        }).catch(() => {
            set({isLogged: false, error: true})
        })
    },
    logout: () => {
        AuthApi.logout()
        set({isLogged: false, token: null})   
    }
}))