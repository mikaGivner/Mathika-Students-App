import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {LandPage,TeacherPage, TeacherHome, CalendarManagement, TestLibrary} from "./Pages/indexPages.jsx";
const router = createBrowserRouter([
{ path: "/", element: <LandPage WhereToGo="/Teacher/home"/>, errorElement: <>Error...</> },
{ path: "/testForLib", element: <TestLibrary/>, errorElement: <>Error...</> },
{
  path: "/Teacher",
  element: <TeacherPage/>,
  errorElement: <>Error...</>,
  children: [
    { path: "/Teacher/Home", element: <TeacherHome/> },
    { path: "/Teacher/calendar", element: <CalendarManagement/>  },
  ],
},
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
  }
export default App;


