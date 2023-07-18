import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
{ path: "/", element: <div>Mathika</div>, errorElement: <>Error...</> },
{ path: "/r", element: <div>hey</div>, errorElement: <>Error...</> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
  }
export default App;


