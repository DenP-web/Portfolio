import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AchievementsPage, HomePage, ProjectsPage, RootPage } from "../../pages";
import GlobalStyles from "../../theme/globalStyles";

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

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
