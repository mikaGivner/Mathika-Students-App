import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {LandPage} from "./Pages/indexPages.jsx";
const router = createBrowserRouter([
{ path: "/", element: <LandPage WhereToGo="/r"/>, errorElement: <>Error...</> },
{ path: "/r", element: <div>hey</div>, errorElement: <>Error...</> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
  }
export default App;


