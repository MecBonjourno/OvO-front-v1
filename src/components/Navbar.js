import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../App'

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext)

  const renderList = () => {
    if(state){
      return [ 
        <li><Link to="/profile">Profile</Link></li>,
          <li><Link to="/createpost">Post</Link></li>
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