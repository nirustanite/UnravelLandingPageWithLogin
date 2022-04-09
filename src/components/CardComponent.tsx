import React from 'react';
import { Card, Image } from 'semantic-ui-react';

interface IProps{
    imageSrc: any;
    description: string;
    heading: string;
    linkDesc: string;
}

const CardComponent = (props:  IProps) => {
    const { imageSrc, heading, description, linkDesc } = props;
    return (
        <React.Fragment>
              <Card>
                <Image src={imageSrc} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        {heading}
                    </Card.Header>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href="#">
                        {linkDesc}
                    </a>
                </Card.Content>
            </Card>
        </React.Fragment>
    )
}

export default CardComponent;