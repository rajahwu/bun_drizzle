import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HomePage } from './pages/index.ts'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route
  path="/"
  element={<App />}
  >
    <Route 
    path="/login"
    element={<HomePage />}
    />

    <Route 
    path="/dashboard"
    element={<h1>Logged In</h1>}
    />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
