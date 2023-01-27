import Dashboard from "../Pages/Dashboard/Dashboard"

import Department from "../Pages/AddDep/AddDep"

import Home from "../Pages/Home/Home"

import Course from "../Pages/AddCourse/AddCourse"
import AddRegistration from "../Pages/Registration/Add_Reg"

import Signin from "../Pages/Auth/SignIn"
import Signup from "../Pages/Auth/SignUp"

const routes =[
    {path:'/dashboard', element:<Dashboard />, exact:'true', type:'private' },

    {path:'/department', element:<Department />, exact:'true', type:'private' },

    {path:'/teacher_reg', element:<AddRegistration />, exact:'true', type:'private' },

    {path:'/courses', element:<Course />, exact:'true', type:'private' },

    {path:'/course_file', element:<Home />, exact:'true', type:'private' },

    {path:'/', element:<Signin />, exact:'true', type:'public' },
    {path:'/signup', element:<Signup />, exact:'true', type:'public' }

]

export default routes 