import Dashboard from "../Pages/Dashboard/Dashboard"

import Department from "../Pages/AddDep/AddDep"

import Coursefile from "../Pages/CourseFile/Coursefile"

import Course from "../Pages/AddCourse/AddCourse"

import Teacher from "../Pages/Teacher"

import Signin from "../Pages/Auth/SignIn"
import Signup from "../Pages/Auth/SignUp"
 
const routes =[
    {path:'/dashboard', element:<Dashboard />, exact:'true', type:'private' },

    {path:'/department', element:<Department />, exact:'true', type:'private' },

    {path:'/courses', element:<Course />, exact:'true', type:'private' },

    {path:'/course_file', element:<Coursefile />, exact:'true', type:'private' },

    {path:'/teacher', element:<Teacher />, exact:'true', type:'private' },

    {path:'/', element:<Signin />, exact:'true', type:'public' },
    {path:'/signup', element:<Signup />, exact:'true', type:'public' }

]

export default routes 