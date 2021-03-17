import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="card home-card">
                <h5>Zago</h5>
                 <div className="card-image">
                     <img src="https://images.unsplash.com/photo-1452460028020-ee243f477860?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80" />
                 </div>
                 <div className="card-content"> 
                 <i class="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>Foda Boa: 9/10</h6>
                    <p>Transei aqui uma vez</p>
                    <input type="text" placeholder="comenta ai" />
                 </div>
            </div>
            <div className="card home-card">
                <h5>Zago</h5>
                 <div className="card-image">
                     <img src="https://images.unsplash.com/photo-1487252502161-75020a813bf0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1020&q=80" />
                 </div>
                 <div className="card-content"> 
                 <i class="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>Comi na praia e gozei na bunda dela: 10/10</h6>
                    <p>A areia grudo em tudo kkkkk</p>
                    <input type="text" placeholder="comenta ai" />
                 </div>
            </div>
        </div>
    )
}

export default Home