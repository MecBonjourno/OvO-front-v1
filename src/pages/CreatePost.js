import React from 'react'
// import {Link} from 'react-router-dom'

const Createpost = () => {
    return (
      <div className="card input-field" style={{
        marginTop: "15%",
        margin: "10px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign:"center"
      }}>
          <input type="text" placeholder="title"/>
          <input type="text" placeholder="body"/>
          <div className="file-field input-field"> 
            <div className="btn #757575 grey darken-1">
                <span>Select Photo</span>
                <input type="file" />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
            </div>
          </div>
            <button class="btn waves-effect waves-light #757575 grey darken-1" type="submit" name="action">
             Post
            </button>
      </div>
    )
}

export default Createpost