import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {UserContext} from '../App'

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext)
  const history = useHistory();
  const renderList = () => {
    if(state){
      return [ 
        <li><Link to="/profile">Profile</Link></li>,
          <li><Link to="/createpost">Post</Link></li>,
          <li>
            <button className="btn waves-effect waves-light #212121 grey darken-4" type="submit" name="action" 
            onClick={()=> {
            localStorage.clear()
            dispatch({type: "CLEAR"})
            history.push("/login")
          }
            }>
                    Logout
                </button>
            </li>
      ]
    }else {
        return [
          <li><Link to="/signup">SignUp</Link></li>,
          <li><Link to="/login">Login</Link></li>
        ]
    }
  }

    return(
    <div className="navbar-fixed">
    <nav>
     <div className="nav-wrapper black">
      <Link to={state?"/":"/signin"} className="brand-logo left" style={{fontSize: "48px", padding: "4px"}}>OvO</Link>
        <ul id="nav-mobile" className="right ">
          {renderList()}
        </ul>
     </div>
  </nav>
  </div>
  )
}

export default Navbar;