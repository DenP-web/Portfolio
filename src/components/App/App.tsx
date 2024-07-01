import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from "../../pages/RootPage/RootPage";
import HomePage from "../../pages/HomePage/HomePage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";

import GlobalStyles from "../../globalStyles/globalStyles";
import ResumePage from "../../pages/ResumePage/ResumePage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      }
    ]
  }
])

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
