import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

export default function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello!</div>
    }
  ])
  
  return (
    <RouterProvider router={router} />
  )
}