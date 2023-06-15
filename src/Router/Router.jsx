import { createBrowserRouter } from "react-router-dom"
import Main from "../Components/Main"
import Home from "../Components/Home"
import SingUp from "../Pages/SingUp"
import Login from "../Pages/Login"
import NotFound from "../assets/NotFound"
import Dashbord from "../Dashbord/Dashbord"
import ClassessDashbord from "../Dashbord/ClassessDashbord"
import MyClassDashbord from "../Dashbord/MyClassDashbord"
import DashbordAllClasses from "../Dashbord/DashbordAllClasses"
import DashbordWebUser from "../Dashbord/DashbordWebUser"
import EditClass from "../Dashbord/EditClass"
import AllClass from "../Components/AllClass"
import StudentClass from "../Components/StudentClass"
import SelectedClasses from "../Dashbord/SelectedClasses"
import Admin from "../Dashbord/Admin"
import Teacher from "../Dashbord/Teacher"


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/singup',
                    element: <SingUp></SingUp>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/class',
                    element: <StudentClass></StudentClass>
                },

                {
                    path: '/teacher',
                    element: <AllClass></AllClass>
                },
            ]
        },
        {
            path: '/dashbord',
            element: <Dashbord></Dashbord>,
            children: [
                {
                    path: '/dashbord/selectedclasses',
                    element: <SelectedClasses></SelectedClasses>
                },
                {
                    path: '/dashbord/classes',
                    element: <Teacher> <ClassessDashbord></ClassessDashbord></Teacher>
                },


                {
                    path: '/dashbord/myclass',
                    element: <Teacher> <MyClassDashbord></MyClassDashbord></Teacher>
                },
                {
                    path: '/dashbord/allclasses',
                    element: <Admin> <DashbordAllClasses></DashbordAllClasses></Admin>
                },
                {
                    path: '/dashbord/webuser',
                    element: <Admin>  <DashbordWebUser></DashbordWebUser></Admin>
                },
                {
                    path: '/dashbord/edit/:id',
                    element: <EditClass></EditClass>,
                    loader: ({ params }) => fetch(`https://project12-server-ranaahmed33.vercel.app/singleclass/${params.id}`)
                },
            ]
        },
        {
            path: '*',
            element: <NotFound></NotFound>
        }

    ]
)


export default router 