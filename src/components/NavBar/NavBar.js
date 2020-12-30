import React, { useState } from 'react';
import { IoIosPeople } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import { Sidebardata } from './NavBarData';
import { SubMenu } from './SubMenu';
import '../../styles/colors.scss';

const Nav = styled.div`
  background: #7b675e;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  color: #ddcebb;
  height: 80px;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Imagem = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const SideBarNav = styled.nav`
  background: #7b675e;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const UserInfoWrap = styled.div`
  width: 100%;
  position:fixed;
  top:60px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  transition: 350ms;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right:30px;

`;

const DropdownLink = styled(Link)`
  background: #ddcebb;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  text-decoration: none;
  font-size: 18px;
  color: white;
  padding-top:10px;
  width:100%
`;

const UserPhoto = styled.img`
  border-radius: 50%;
  background: black;
  height: 30px;
  width: 30px;
  margin-left:10px;
`;

export default function NavBar() {
  const [sidebar, setSideBar] = useState();
  const [userInf, setOpen] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const showInfo = () => {
    setOpen(!userInf);
  };
  const showSidebar = () => {
    setSideBar(!sidebar);
  };

  async function handleLogout(e) {
    e.preventDefault();
    await logout();
    history.push('/login')
  }
  return (
    <>
      <Nav>
        <NavIcon to='#'>
          <Imagem src='/logo2.png' />
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <UserInfo>
           Christianne Almeida
          <UserPhoto onClick={showInfo} />
        {userInf && (
          <UserInfoWrap>
            <DropdownLink to='/opcoes'> Opções</DropdownLink>
            <DropdownLink to='#' onClick={handleLogout}>Logout</DropdownLink>
          </UserInfoWrap>
        )}
        </UserInfo>
      </Nav>
      <SideBarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {Sidebardata.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SideBarNav>
    </>
  );
}
