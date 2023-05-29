/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import CourseInfo from "../../components/Course_Info/Course_Info.lazy";
import Grades from "../../components/Grades/Grades.lazy";
import LayoutCardDetail from "../../components/layouts/LayoutCardDetail/LayoutCardDetail";
import LayoutHomePage from "../../components/layouts/LayoutHomePage/LayoutHomePage";
import Lectures from "../../components/layouts/LayoutLectures/Lectures.lazy";
import Module from "../../components/Module/Module.lazy";
import Notes from "../../components/Notes/Notes";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LayoutHomePage />,
      },
    ],
  },
  {
    path: "/:name/",
    element: <LayoutCardDetail />,
    children: [
      {
        path: "module/:module",
        element: <Module />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "grades",
        element: <Grades />,
      },
      {
        path: "discussion_forums",
        element: <h1>discussion_forums</h1>,
      },
      {
        path: "course_info",
        element: <CourseInfo />,
      },
    ],
  },
  {
    path: "/:name/lectures/:lectures",
    element: <Lectures />,
  },
]);
export default AppRouter;
