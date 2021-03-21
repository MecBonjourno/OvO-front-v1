import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Singup = () => {
  const history = useHistory();
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")

  const PostData = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "invalid email"})
      return
    }
    fetch("/signup", { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name,
        password,
        email
      })
    }).then(res => res.json())
    .then(data => {
     if(data.error) {
       M.toast({html: data.error})
     } else {
      M.toast({html: data.message})
      history.push('/login')
     }
    })
    .catch(err => {console.log(err)})
  }

    return (
      <div className="mycard">
        <div className="card auth-card">
            <div className="card-content input-field">
                <h2 style={{color: 'white'}}>OvO</h2>
                 <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                 <input type="text" placeholder="email"value={email} onChange={e => setEmail(e.target.value)} />
                 <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
               <button className="btn waves-effect waves-light #212121 grey darken-4" type="submit" name="action" onClick={()=>PostData()}>
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