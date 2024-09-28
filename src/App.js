import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthScreen from './components/AuthScreens/AuthScreen';
import ChannelPage from './pages/ChannelPage/ChannelPage';
import { AuthProvider } from './contexts/AuthContext';
import './styles.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <ToastContainer />
                <Switch>
                    <Route path="/" exact component={AuthScreen} />
                    <Route path="/channel/:id" component={ChannelPage} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;