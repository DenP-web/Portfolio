import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AchievementsPage,
  HomePage,
  ProjectsPage,
  RootPage,
} from "../../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "achievements",
        element: <AchievementsPage />,
      },
    ],
  },
]);


const Router: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Router
