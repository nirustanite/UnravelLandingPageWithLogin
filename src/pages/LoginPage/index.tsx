import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import LoginForm from '../../components/Login/LoginForm';
import Page from '../Page';


const LoginPage = () => {
    return (
        <Page> 
            <StyledContainer>
                <StyledDiv>Login</StyledDiv>
                    <LoginForm />
            </StyledContainer>
        </Page>
    );
};

export default LoginPage;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    width: 466px;
    height: 419px;
    left: 0px;
    text-align: center;
    margin-top: 30px;
    background: #F8FBFC;
    border-radius: 10px;
`

const StyledDiv = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;
    text-items: center;
    color: #000000;
`