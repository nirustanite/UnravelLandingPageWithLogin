import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import CardComponent from '../CardComponent';

const CardContent = () => {
    return (
        <StyledContainer>
            <CardComponent
                imageSrc={card1}
                heading={'Concepting'}
                description={'Wij ontrafelen jouw idee van begin tot helder concept met co-creatie sessies, user research en wireframes.'}
                linkDesc={'Make it clear >'}
             />
            <CardComponent
                imageSrc={card2}
                heading={'Design'}
                description={'Wij (her)ontwerpen jouw digitale product tot een gebruiksvriendelijk en aansprekend design voor jouw users.'}
                linkDesc={'Make it beautiful >'} />
            <CardComponent 
                imageSrc={card3}
                heading={'Development'}
                description={'Wij ontwikkelen jouw digitale product in de talen en frameworks die het beste aansluiten bij jouw behoeften.'}
                linkDesc={'Make it real >'}
            />
        </StyledContainer>

    );
};

export default CardContent;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`