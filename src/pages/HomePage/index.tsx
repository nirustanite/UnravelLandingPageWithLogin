import React from 'react';
import { CardContent, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import MiddleContent from '../../components/HomePage/MiddleContent';
import TopContent from '../../components/HomePage/TopContent';
import Page from '../Page';

const HomePage = () => {
    return (
        <Page> 
            <StyledContainer>
                <TopContent />
                <MiddleContent />
                <CardContent />
            </StyledContainer>
        </Page>
    );
};

export default HomePage;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`