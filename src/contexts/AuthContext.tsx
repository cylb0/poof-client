import { createContext, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

/**
 * Interface that represents the context type for AuthContext
 * 
 * - token: (string) The user's bearer token or null
 * - login: (string) => void A method to handle user login
 * - logout: () => void A method to handle user logout
 */
interface AuthContextType {
    token: string | null
    login: (token: string) => void
    logout: () => void
}

/**
 * React context object providing authentication states and methods
 */
export const AuthContext = createContext<AuthContextType>({
    token: null,
    login: () => {},
    logout: () => {},
})

/**
 * AuthProvider component that wraps the application and provide AuthContext
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    const navigate = useNavigate()

    /**
     * Function that logs the user
     */
    const login = (token: string) => {
        setToken(token)
        localStorage.setItem('token', token)
        navigate('/')
    }

    /**
     * Function that handles user logout
     */
    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
        navigate('/')
        toast.success('Logged out.')
    }

    const contextValue: AuthContextType = {
        token, login, logout
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}