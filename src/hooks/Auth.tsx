import React,
{
    createContext,
    useContext,
    ReactNode,
    useState,
} from 'react';

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

function AuthProvider ({ children }: AuthProviderProps)  {
    const [user, setUser] = useState<User>({} as User);

    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}