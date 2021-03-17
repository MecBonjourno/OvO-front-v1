import React from 'react'
import {Link} from 'react-router-dom'

const Singup = () => {
    return (
      <div className="mycard">
        <div className="card auth-card">
            <div className="card-content input-field">
                <h2 style={{color: 'white'}}>OvO</h2>
                 <input type="text" placeholder="Name" />
                 <input type="text" placeholder="email" />
                 <input type="password" placeholder="password" />
               <button className="btn waves-effect waves-light #212121 grey darken-4" type="submit" name="action">
                    Sign Up
                </button>
                    <h6>
                    <Link to="/login">
                        Already have an account?
                    </Link>
                    </h6>
            </div>
        </div>
      </div>
    )
}

export default Singup