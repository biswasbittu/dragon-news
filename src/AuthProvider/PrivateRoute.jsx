import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../components/pages/Loading/Loading';

const PrivateRoute = ({children}) => {
   
    const {user,loading}= use(AuthContext)
    // console.log(loading,user)
    if(loading){
        return <Loading/>
    }
   if(user && user.email){
        return children
   }
   else{
    return <Navigate to='/auth/login'></Navigate>

   }
   
    
    
};

export default PrivateRoute;