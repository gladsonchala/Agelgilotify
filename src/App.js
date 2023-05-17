import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import UserDashboard from './components/User/UserDashboard';
import AdminDashboard from './components/Admin/AdminPanel';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/" component={UserDashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
