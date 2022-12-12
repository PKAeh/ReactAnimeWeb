import { createBrowserRouter } from 'react-router-dom'
import DetailAnimePage from '../pages/DetailAnimePage'
import HomePage from '../pages/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/anime/:id',
    element: <DetailAnimePage />
  }
])
