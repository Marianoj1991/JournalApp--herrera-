import { Navigate } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
import { ErrorPage } from '../../ui/ErrorPage'

export const AuthRoutes = [
  {
    // index: true,
    path: 'login',
    element: <LoginPage />,
    error: <ErrorPage />
  },
  {
    path: 'register',
    element: <RegisterPage />,
    error: <ErrorPage />
  },
  {
    path: '*',
    element: <Navigate to={'/auth/login'} />
  }
]