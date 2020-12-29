import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import _ from 'lodash'
import 'firebase/firestore';

function Dashboard({...props }) {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [clientes, setClientes] = useState([]);


  async function handleLogout(e) {
    e.preventDefault();
    await logout();
    history.push('/login')
  }


  useEffect(() => {
    if(props.clientes) setClientes(props.clientes)
  }, [props.clientes]);

  return (
    <div>
      {clientes.length > 0 && _.map(clientes, (cliente, index) => {
        console.log(cliente)
        return(
          <div key={index}>{cliente.Nome} </div>
        )
      })}
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    clientes: state.firestore.ordered.clientes
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'clientes' }
  ])
)(Dashboard)
