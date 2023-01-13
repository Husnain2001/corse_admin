import Dashboard from "../Pages/Dashboard/Dashboard"

import Department from "../Pages/AddDep/AddDep"

import Home from "../Pages/Home/Home"

import Course from "../Pages/AddCourse/AddCourse"
import Registration from "../Pages/Registration/Registration"

const routes =[
    {path:'/', element:<Dashboard />, exact:'true', type:'public' },

    {path:'/department', element:<Department />, exact:'true', type:'public' },

    {path:'/teachers', element:<Registration />, exact:'true', type:'public' },

    {path:'/Courses', element:<Course />, exact:'true', type:'public' },

    {path:'/Course file', element:<Home />, exact:'true', type:'public' }




]

export default routes 