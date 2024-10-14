import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import Layout from './components/Layout.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Usa el Layout con el Navbar
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/results/search/:query",
        element: <ResultsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
