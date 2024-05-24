import { createBrowserRouter } from "react-router-dom";

import { HomeView } from "../view/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
]);

export { router };
