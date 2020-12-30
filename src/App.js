import './App.scss';
import Login from './components/forms/login';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <NavBar />
      <Switch>
        <Route exact path= '/' component = {Dashboard} />
        <Route path = '/login' component = {Login} />
      </Switch>
    </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
