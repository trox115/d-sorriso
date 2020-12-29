export const createClient = (client) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
     const firestore = getFirestore();
    firestore.collection('clientes').add({
      ...client
    }).then(() => {
      dispatch({ type: 'CREATE_CLIENT', client });
    }).catch(
      (error)=> {
        dispatch( {type: 'Houve um erro', error});
      }
    )
  };
};
