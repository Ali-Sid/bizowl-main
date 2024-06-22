import { useSelector } from 'react-redux';
import Dashboard from '../../Views/Admin/Dashboard';
import HomePage from '../../Views/Auth/HomePage';



export const ProtectedRoutes = (props) =>{
    const { login } = useSelector(state => state.userReducer);
    const { adminLogin } = useSelector(state => state.adminReducer);
    // const { userType } = useSelector(state => state.astroReducer);

    const isAdminLogin = adminLogin;
    const isUserLogin = login;
    const {Component, accessRights} = props

    return(
        <> {
            accessRights === "admin" && isAdminLogin ? <Component/> : 
            accessRights === "user" && isUserLogin ? <Component/> :
            accessRights === "guest" ? Component.name === "AdminLogin" && isAdminLogin ? <Dashboard/>  : <Component/>  : <HomePage/>
        } </>
    )
}