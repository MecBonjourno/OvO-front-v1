import React from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
    return (
      <div className="mycard">
        <div className="card auth-card">
            <div className="card-content input-field">
                <h2 style={{color: 'white'}}>OvO</h2>
                 <input type="text" placeholder="email" />
                 <input type="password" placeholder="password" />
               <button className="btn waves-effect waves-light #757575 grey darken-1" type="submit" name="action">
                    Login
                </button>
                <h6>
                    <Link to="/login">
                        Don't have an account?
                    </Link>
                    </h6>
            </div>
        </div>
      </div>
    )
}

export default Login