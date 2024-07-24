import { AuthContext } from "@contexts/AuthContext"
import { useContext } from "react"

/**
 * React hook that allows components to access the AuthContext
 */
export const useAuth = () => {
    return useContext(AuthContext)
} 