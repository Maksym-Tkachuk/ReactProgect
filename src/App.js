import React from 'react';
import { Route } from 'react-router';
import './App.css';
import store from './Redux/state';
import Dialogs from './сomponents/Dialogs/Dialogs';
import Header from './сomponents/Header/Header';
import Music from './сomponents/Music/Music';
import NavBar from './сomponents/NavBar/NavBar';
import News from './сomponents/News/News';
import Profile from './сomponents/Profile/Profile';
import Settings from './сomponents/Settings/Settings';

const App = (props) => {
    return (
        <div className="app-wrapper" >
            <Header />
            <NavBar />
            <div className="app-wrapper__content">
                <Route path="/profile" render={() =>
                    <Profile
                        state={props.state.profilePage}
                        dispatch={props.dispatch}
                    />} />
                <Route path="/dialogs" render={() =>
                    <Dialogs
                        state={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    );
}

export default App;