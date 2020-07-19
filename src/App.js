import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Content/Music/Music";
import Settings from "./Content/Settings/Settings";
import Profile from "./Content/Profile/Profile";
import DialogsContainer from "./Content/Dialogs/DialogsContainer";
import UsersContainer from "./Content/UserPage/usersContainer";
import NewsContainer from "./Content/News/newsContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/users' render={ () => <UsersContainer/> } />
                    <Route path='/profile' render={ () => <Profile/> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer/> }/>
                    <Route path='/news' render={ () => <NewsContainer/>}/>
                    <Route path='/music' render={ () => <Music/>}/>
                    <Route path='/settings' render={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
