import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import { useRouteMatch, Link } from "react-router-dom";
import routes from '../../pages/routes';
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import products from '../../assets/products.png';
import orders from '../../assets/orders.png';
import reporting from '../../assets/reporting.png';
import settings from '../../assets/settings.png';
import admin from '../../assets/admin.png';

const StyledMenu = styled(Menu)`
    border: none !important;
    .item {
        
        &:first-child {
            border-left: 0px !important;
        }
        &::before {
            display: none;
        }    
        &.active {
            box-shadow: 0px -2px 0px 0px #0085bb inset !important;
            background: none !important;
        }
    }   
`;

const StyledDiv = styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 5px;
    background: #0085bb;
    border: 2px solid #0085bb;
    color: white;
    text-align: center;
`;

const Nav = () => {

    const matchHome = useRouteMatch({
        path: "/",
        exact: true
    });

    const matchTrackedFlights = useRouteMatch({
        path:'/tracked-flights'
    });

   

    return(
        <StyledMenu fixed="top" stackable>
            <Container>
                <Menu.Item>
                    <Image src={logo} size='mini' />
                </Menu.Item>
                <Menu.Item 
                    as={Link}
                    name="HOME"
                    to={routes.HOME}
                    active={!!matchHome}
                >
                     <Icon name='home' />
                    Home
                </Menu.Item>
               
                <Menu.Item>
                    <Image src={products} size='mini' />
                    Products
                </Menu.Item>
                <Menu.Item>
                    <Image src={orders} size='mini' />
                    orders
                </Menu.Item>
                <Menu.Item>
                    <Image src={reporting} size='mini' />
                    Reporting
                </Menu.Item>
                <Menu.Item>
                <Icon name='setting' />
                    Settings
                </Menu.Item>
                <Menu.Item>
                    <Image src={admin} size='mini' />
                    Admin
                </Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item 
                    float="right"
                    as={Link}
                    name="Trackedlist"
                    to={routes.LOGIN}
                    active={!!matchTrackedFlights}
                >
                    <Icon name='user outline' />
                   Login
                </Menu.Item>
                </Menu.Menu>
            </Container>
        </StyledMenu>
    );
};

export default Nav;