import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
    <div className="navbar-fixed">
    <nav>
     <div className="nav-wrapper black">
      <Link to="/" className="brand-logo left" style={{fontSize: "48px", padding: "4px"}}>OvO</Link>
        <ul id="nav-mobile" className="right ">
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/createpost">Post</Link></li>
        </ul>
     </div>
  </nav>
  </div>
  )
}

export default Navbar;