import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';


const MiddleContent = () => {

    return (
        <Container>
            <StyledH2>Services voor waar jouw venture staat</StyledH2>
            <StyledP>Sta je aan de start van een nieuwe venture, of zoek je ondersteuning bij herontwerp of doorontwikkeling: Unravel biedt
passende services. We pakken door op waar jouw venture staat.</StyledP>
        </Container>
    );
};

export default MiddleContent;

const StyledH2 = styled.h3`
    position: absolute;
    width: 504px;
    height: 96px;
    left: 208px;
    top: 783px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;


    color: #1F1F1F;
`

const StyledP = styled.p`

    position: absolute;
    width: 500px;
    height: 120px;
    left: 731px;
    top: 783px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #1F1F1F;
`