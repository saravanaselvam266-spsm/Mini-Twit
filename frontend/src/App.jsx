import React from 'react'
import './App.css'
import Login from "./pages/Login"
import { RouterProvider } from 'react-router-dom' 
import Router from './router/Router'




const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App;