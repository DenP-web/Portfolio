import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AchievementsPage,
  HomePage,
  ProjectsPage,
  RootPage,
} from "../../pages";
import { ROUTES } from '../../constants/routes';

const router = createBrowserRouter([
  {
    path: ROUTES.ABOUT,
    element: <RootPage />,
    children: [
      {
        path: ROUTES.ABOUT,
        element: <HomePage />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <ProjectsPage />,
      },
      {
        path: ROUTES.ACHIEVEMENTS,
        element: <AchievementsPage />,
      },
    ],
  },
]);


const Router: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Router
