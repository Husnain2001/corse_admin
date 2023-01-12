import Dashboard from "../Pages/Dashboard/Dashboard"

import Department from "../Pages/AddDep/AddDep"

import Home from "../Pages/Home/Home"

import Course from "../Pages/AddCourse/AddCourse"


const routes =[
    {path:'/', element:<Dashboard />, exact:'true', type:'public' },



    {path:'/student', element:<Home />, exact:'true', type:'public' },

    {path:'/courses', element:<Course />, exact:'true', type:'public' },

    {path:'/department', element:<Department />, exact:'true', type:'public' },



]

export default routes 