import { createContext, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"

/**
 * Interface that represents the context type for AuthContext
 * 
 * - token: (string) The user's bearer token or null
 * - signIn: (string) => void A method to handle user login
 * - signOut: () => void A method to handle user logout
 */
interface AuthContextType {
    token: string | null
    signIn: (token: string) => void
    signOut: () => void
}

/**
 * React context object providing authentication states and methods
 */
export const AuthContext = createContext<AuthContextType>({
    token: null,
    signIn: () => {},
    signOut: () => {},
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
    const signIn = (token: string) => {
        setToken(token)
        localStorage.setItem('token', token)
        navigate('/home')
    }

    /**
     * Function that handles user logout
     */
    const signOut = () => {
        setToken(null)
        localStorage.removeItem(token)
        navigate('/home')
    }

    const contextValue: AuthContextType = {
        token, signIn, signOut
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}