import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Container } from 'semantic-ui-react';
import LoginStore from '../../redux/Login';
import Page from '../Page';

const LogoutPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoginStore.actions.logout());
    },[]);

    return(
        <Page> 
        <Container>
            You Have been Successfully Logged out
        </Container>
        </Page> 
    )
}

export default LogoutPage;