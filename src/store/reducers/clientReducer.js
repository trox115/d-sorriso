const initState = {
  clientes: [{ nome: 'António Fernandes', morada: 'Rua do padrão' }],
};

const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CLIENT':
      console.log('created client');
      return state;
    case 'CREATE_ERROR':
      console.log('creation erros', action.err);
      return state;
    default:
      return state
  }
};

export default clientReducer;
