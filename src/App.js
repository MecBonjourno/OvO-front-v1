import React from 'react'
import Navbar from './components/Navbar'
import './app.css'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Createpost from './pages/CreatePost'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/createpost" component={Createpost}/>
    </BrowserRouter>
  );
}

export default App;
