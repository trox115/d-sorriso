import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarLink = styled(Link)`
  display: flex;
  color: #ddcebb;
  padding-left:1rem;
  text-decoration:none;
  font-size:20px;
  height:50px;
`;

const SideBarLabel = styled.span`
margin-left:30px;
`;

const DropdownLink = styled(Link)`
background:#ddcebb;
height:60px;
padding-left:3rem;
display:flex;
text-decoration:none;
font-size:18px;
color:white;
`

export const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);
  return (
    <>
      <SideBarLink to={item.path} onClick={showSubNav}>
        <div>
          {item.icon}
          <SideBarLabel>{item.title}</SideBarLabel>
        </div>
        <div>{item.subNav && subNav ? item.iconOpen : item.subNav ? item.iconClose : null}</div>
      </SideBarLink>
      {subNav &&
        item.subNav.map((item, index) => {
          return( <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SideBarLabel>{item.title}</SideBarLabel>
          </DropdownLink>)
        })}
    </>
  );
};
