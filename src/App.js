import React, {useEffect, createContext, useReducer, useContext} from 'react'
import Navbar from './components/Navbar'
import './app.css'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Createpost from './pages/CreatePost'

import {reducer, initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory();
  const {state,dispatch} = useContext(UserContext)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type: 'USER', payload: user})
      history.push("/")
    } else {
      history.push('/login')
    }
  },[])

  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/createpost" component={Createpost}/>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
