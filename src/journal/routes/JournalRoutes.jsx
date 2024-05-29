import { Navigate } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";


export const JournalRoutes = [
  {
    path: '/',
    element: <JournalPage />
  },
  {
    path: 'hello-world',
    element: <h1>Hello World</h1>
  },
  {
    path: '*',
    element: <Navigate to={'/'} /> 
  }
]