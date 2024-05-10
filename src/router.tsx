import { createHashRouter } from "react-router-dom";
import Home from "./routes/home";
import Team from "./routes/team";
import Root from "./routes/root";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/team", element: <Team /> },
    ],
  },
]);
