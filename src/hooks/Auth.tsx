import React,
{
    createContext,
    useContext,
    ReactNode,
    useState,
} from 'react';

import * as AuthSession from 'expo-auth-session';

import {
    RESPONSE_TYPE,
    REDIRECT_URI,
    CLIENT_ID,
    CDN_IMAGE,
    SCOPE,
} from '../components/Configs';

import { api } from '../Services/api';

type User = {
    firstName: string;
    username: string;
    avatar: string;
    email: string;
    token: string;
    id: string;
}

type AuthContextData = {
    user: User;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    function SignIn() {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            AuthSession
                .startAsync({ authUrl })

        } catch (error) {

        }
    }

    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}