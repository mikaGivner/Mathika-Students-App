import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {LandPage,TeacherPage, TeacherHome} from "./Pages/indexPages.jsx";
const router = createBrowserRouter([
{ path: "/", element: <LandPage WhereToGo="/Teacher"/>, errorElement: <>Error...</> },
{
  path: "/Teacher",
  element: <TeacherPage/>,
  errorElement: <>Error...</>,
  children: [
    { path: "/Teacher/Home", element: <TeacherHome/> },
    { path: "/Teacher/scheduled", element: <div>Scheduled</div>  },
  ],
},
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
  }
export default App;


