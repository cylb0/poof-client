import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from '@routes/Home'
import Login from '@routes/Login'
import { AuthProvider } from '@contexts/AuthContext'

export const AuthProviderLayout = () => (
  <AuthProvider>
    <Outlet />
  </AuthProvider>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthProviderLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
