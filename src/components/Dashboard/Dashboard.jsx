import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createClient } from '../../store/actions/clientActions';

import app from '../../firebase';
import 'firebase/firestore';

function Dashboard({ ...props }) {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [clientes, setClientes] = useState([]);

  const ref = app.firestore().collection("clientes");

  async function handleLogout(e) {
    e.preventDefault();
    await logout();
    history.push('/login')
  }

  function getClientes() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      })
      setClientes(items)
      console.log(items)
    })
  }

  useEffect(() => {
    getClientes();
    props.createClient({nome:'João'})
  }, []);

  console.log(props)
  return (
    <div>
      {}
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    clientes: state.clientes.clientes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createClient: (client) => dispatch(createClient(client))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
