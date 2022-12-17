import { createBrowserRouter } from 'react-router-dom'
import AllCategoriesPage from '../pages/AllCategoriesPage'
import DetailAnimePage from '../pages/DetailAnimePage'
import FavoritePage from '../pages/FavoritePage'
import HomePage from '../pages/HomePage'
import Root from '../pages/Root'
import SearchPage from '../pages/SearchPage'
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
      },
      {
        path: '/category',
        element: <AllCategoriesPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/favorite/:favorite',
        element: <FavoritePage />
      }
    ]
  }
])
