import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import LoginStore from '../../redux/Login';

const LogoutPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoginStore.actions.logout());
    },[]);

    return(
        <div>
            You Have been Successfully Logged out
        </div>
    )
}

export default LogoutPage;