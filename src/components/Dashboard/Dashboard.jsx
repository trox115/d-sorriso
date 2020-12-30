import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import _ from 'lodash';
import TopDashBoard from './TopDashBoard';
import CenterDashboard from './CenterDashboard'
import 'firebase/firestore';

function Dashboard({...props }) {

  const [clientes, setClientes] = useState([]);





  useEffect(() => {
    if(props.clientes) setClientes(props.clientes)
  }, [props.clientes]);

  return (
    <div>
      {/* {clientes.length > 0 && _.map(clientes, (cliente, index) => {
        console.log(cliente)
        return(
          <div key={index}>{cliente.Nome} </div>
        )
      })}
      <button >LogOut</button> */}
      <TopDashBoard />
      <CenterDashboard />
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
