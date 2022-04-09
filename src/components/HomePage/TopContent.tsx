import React from 'react';
import { Button, Container, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import cover from '../../assets/cover.png';

const TopContent = () => {

    return (
        <StyledContainer>
            <DescriptionDiv>
                <StyledH1> We create the tech behind your venture.</StyledH1>
                <StyledP> Unravel helpt innovatieve ondernemers en intrapreneurs
                        met de ontwikkeling van snelgroeiende digitale producten.
                        Met een team van 25+ leden bieden we expertise in
                        Concepting, Design & Development: Van idee tot realiteit, of
                        als partner op één van deze expertises.
                </StyledP>
                <div>
                    <StyledButton>Neem contact op</StyledButton>
                    <StyledLink href='#'>Bekijk onze services</StyledLink>
                </div>
            </DescriptionDiv>
            <ImageDiv style={{
                background: `url(${cover})`
            }} />
        </StyledContainer>
    );
};

export default TopContent;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const ImageDiv = styled.div`
    position: absolute;
    width: 853px;
    height: 513px;
    left: 721px;
    top: 50px;
`;

const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledH1= styled.h1`
    width: 500px;
    height: 120px;
    left: 209px;
    top: 184px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    color: #1F1F1F;
`;

const StyledP = styled.p`
    width: 498px;
    height: 182px;
    left: 208px;
    top: 328px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #777777;
`

const StyledButton = styled(Button)`
    left: 0%;
    right: 0%;
    top: 0px;
    bottom: 0px;

    background: #236CE0 !important;
`;

const StyledLink = styled.a`
    width: 157px;
    height: 32px;
    margin-left: 30px;
    top: 586px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #236CE0;
`;


