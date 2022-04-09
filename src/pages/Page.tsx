import React, { ReactNode } from "react";
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';


const StyledContainer = styled(Container)`
    padding-top: 5em;
    padding-bottom: 5em;
`;

interface IProps{
    children: ReactNode
};

const Page = ({ children } : IProps) => {

    return (
        <React.Fragment>
            <StyledContainer>{children}</StyledContainer>
        </React.Fragment>
    );
};

export default Page;