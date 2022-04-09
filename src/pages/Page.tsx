import React, { ReactNode } from "react";
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import Nav from "../components/NavBar/Nav";


const StyledContainer = styled(Container)`
    padding-top: 5em;
    padding-bottom: 5em;
    overflow-y: auto;
`;

interface IProps{
    children: ReactNode
};

const Page = ({ children } : IProps) => {

    return (
        <React.Fragment>
            <Nav />
            <StyledContainer>{children}</StyledContainer>
        </React.Fragment>
    );
};

export default Page;

