import { createBrowserRouter } from 'react-router-dom'
import DetailAnimePage from '../pages/DetailAnimePage'
import HomePage from '../pages/HomePage'
import Root from '../pages/Root'
import ShowAllAnimePage from '../pages/ShowAllAnimePage'
import YearAnimePage from '../pages/YearAnimePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
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
      },
      {
        path: '/year/:year',
        element: <YearAnimePage />
      }
    ]
  }
])
