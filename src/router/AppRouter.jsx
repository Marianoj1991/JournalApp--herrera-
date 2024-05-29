import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthRoutes } from "../auth/router/AuthRouter"
import { ErrorPage } from "../ui/ErrorPage"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

const router = createBrowserRouter([
  {
    path: '/',
    children: JournalRoutes,
    error: <ErrorPage />
  },
  {
    path: '/auth/*',
    children: AuthRoutes,
    error: <ErrorPage />
  }
])

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}
