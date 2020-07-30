import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import {Route} from "react-router-dom";
import Music from "./Content/Music/Music";
import Settings from "./Content/Settings/Settings";
import DialogsContainer from "./Content/Dialogs/DialogsContainer";
import UsersContainer from "./Content/UserPage/usersContainer";
import NewsContainer from "./Content/News/newsContainer";
import ProfileContainer from "./Content/Profile/profileContainer";
import HeaderContainer from "./Header/headerContainer";
import {LoginContainer} from "./Login/login";


const App = (props) => {
    return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/users'
                           render={ () => <UsersContainer/> } />
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer/> } />
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer/> }/>
                    <Route path='/news'
                           render={ () => <NewsContainer/>}/>
                    <Route path='/music'
                           render={ () => <Music/>}/>
                    <Route path='/settings'
                           render={ () => <Settings/>}/>
                    <Route path='/login'
                           render={ () => <LoginContainer/>}/>
                </div>
            </div>
    );
}

export default App;
