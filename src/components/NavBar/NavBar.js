import React, { useState } from 'react';
import { IoIosPeople } from "react-icons/io";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import styled from 'styled-components'
import { Sidebardata } from './NavBarData';
import { SubMenu } from './SubMenu';
import '../../styles/colors.scss'

const Nav =styled.div `
background: #7b675e;
height: 80px;
display:flex;
justify-content: flex-start;
align-items:center;
`

const NavIcon = styled(Link) `
margin-left:2rem;
font-size:2rem;
color: #ddcebb;
height:80px;
text-decoration:none;
display:flex;
justify-content: flex-start;
align-items:center;
`

const SideBarNav = styled.nav`
background: #7b675e;
width:250px;
height:100vh;
display: flex;
justify-content:center;
align-items: flex-start;
position:fixed;
top:0;
left:${({ sidebar }) => ( sidebar ? '0' : '-100%')};
transition: 350ms;
z-index:10;
`

const SidebarWrap = styled.div`
width:100%;
`


export default function NavBar() {
    const [sidebar, setSideBar] = useState()

    const showSidebar = () => {
        setSideBar(!sidebar);
    }
    return (
        <>
        <Nav>
            <NavIcon to ='#'>
                <FaIcons.FaBars onClick= {showSidebar}/>
            </NavIcon>
        </Nav>
        <SideBarNav sidebar = {sidebar}>
            <SidebarWrap>
            <NavIcon to ='#'>
                <AiIcons.AiOutlineClose onClick= {showSidebar}/>
            </NavIcon>
            {Sidebardata.map((item,index) => {
                return <SubMenu item = {item} key = {index} />
            })}
            </SidebarWrap>
        </SideBarNav>
        </>
    )
}
