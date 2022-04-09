import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import LoginStore from '../../redux/Login';
import { ILoginData, IResponseData } from '../../interfaces/redux/Login';
import { Redirect } from 'react-router';
import routes from '../../pages/routes';

const LoginForm = () => {

    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const onSubmit = handleSubmit((data): any => {
        console.log(data);
        dispatch(LoginStore.actions.loginRequested(data as ILoginData, () => {
            <Redirect to={routes.HOME} />
        }));
    });

    return (
        <React.Fragment>
            <StyledForm onSubmit={onSubmit}>
                <Form.Field>
                    <StyledInput
                        id="username"
                        placeholder='Enter an email'
                        {...register("username", { required: true })}
                    />
                </Form.Field>

                <Form.Field>
                    <StyledInput
                        type="password"
                        id="password"
                        placeholder='Enter a password'
                        {...register("password", { required: true })}
                    />
                </Form.Field>
                <StyledButton>Login</StyledButton>
            </StyledForm>
        </React.Fragment>
    )
}

export default LoginForm;

const StyledButton = styled(Button)`
    width: 346px;
    height: 48px;
    left: 60px;
    top: 276px;
    background: #236CE0 !important;
    border-radius: 2px;
`

const StyledInput = styled.input`
    background: #F8FBFC;
    border: 1px solid #ADADB0;
    box-sizing: border-box;
    border-radius: 4px;
    margin-left: 10%;
    margin-right: 10%;
   
`

const StyledForm = styled(Form)`
    justify-content: center;
`