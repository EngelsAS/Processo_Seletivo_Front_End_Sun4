import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Questao4 from "./pages/questao_4";
import Questao5 from "./pages/questao_5";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Questao4 />,
  },
  {
    path: "/questao_5",
    element: <Questao5 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
