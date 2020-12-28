import React from 'react'
import {useAuth } from '../../contexts/AuthContext';
import {useHistory } from 'react-router-dom';
export default function Dashboard() {
    const {currentUser, logout } = useAuth();
    const history = useHistory();
    async function handleLogout(e) {
        e.preventDefault();
           await logout();
        history.push('/login')
    }
    return (
        <div>
            Welcome : {currentUser.email}
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}
