import React, {useState, useEffect, useContext}from 'react'
import { UserContext } from '../App'
import {useParams} from 'react-router-dom'

const Profile = () => {
    // const [myPics, setMyPics] = useState([])
    const [userProfile, setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userId} = useParams()
    useEffect(()=>{
        fetch(`/user/${userId}`,{
        headers:{
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }}).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setProfile(result)
        })
    },[])

    return (
        <>
        {userProfile ? 
        <div style={{maxWidth: "550px", margin: "0 auto"}}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: "10px 0px",
                borderBottom: "1px solid",
            }}>
                <div>
                    <img style={{width: "160px", height: "160px", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" /> 
                </div>
                <div>
                    <h4>{userProfile.user.name}</h4>
                    <h5>{userProfile.user.email}</h5>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h6> Nota da Chupada: 6.7/10</h6>
                        <h6> Tamanho do Amigo: 3/10</h6>
                        <h6> Metida com força: 9/10</h6>
                        <h6> {userProfile.posts.length}</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    userProfile.posts.map(item => {
                        return (
                            <img className="item" key={item._id} src={item.photo} />
                        )
                    })
                }
            </div>
        </div>
        :
        <h2>loading</h2>}
        
     </>
    )
}

export default Profile