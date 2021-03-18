import React from 'react'
// import {Link} from 'react-router-dom'

const Createpost = () => {
    return (
      <div className="card input-filed" style={{
        margin: "10px 0px",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
    }}>
          <input type="text" placeholder="title"/>
          <input type="text" placeholder="body"/>
          <div className="file-field input-field"> 
            <div className="btn">
                <span>File</span>
                <input type="file" />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
            </div>
          </div>
      </div>
    )
}

export default Createpost