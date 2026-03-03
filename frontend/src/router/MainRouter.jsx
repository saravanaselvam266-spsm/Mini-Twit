import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";


const mainRouter = {
    path:"/",
    element:<MainLayout/>,
    children : [
        {
            path:"/signin",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<SignUp/>
        },
        
    ]
}


export default mainRouter;
