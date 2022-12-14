import { createBrowserRouter } from 'react-router-dom'
import DetailAnimePage from '../pages/DetailAnimePage'
import HomePage from '../pages/HomePage'
import ShowAllAnimePage from '../pages/ShowAllAnimePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/anime/:id',
    element: <DetailAnimePage />
  },
  {
    path: '/anime',
    element: <ShowAllAnimePage />
  }
])
