import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import UserDashboard from './components/User/UserDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div
        className="app"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <Header
          style={{
            backgroundColor: '#1A237E',
            color: '#ffffff',
            padding: '20px',
            textAlign: 'center',
          }}
        />
        <Switch>
          <Route
            path="/login"
            component={() => (
              <Login
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  fontSize: '20px',
                }}
              />
            )}
          />
          <Route
            path="/signup"
            component={() => (
              <Signup
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  fontSize: '20px',
                }}
              />
            )}
          />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/" component={UserDashboard} />
        </Switch>
        <Footer
          style={{
            backgroundColor: '#1A237E',
            color: '#ffffff',
            padding: '20px',
            textAlign: 'center',
          }}
        />
      </div>
    </Router>
  );
}

export default App;