import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'



const UserDetails=(props)=>{

    const [user, setUser]=useState({})
    const [posts, setPosts]=useState([])
    const {id} = props.match.params

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response1)=>{
            const result1 = response1&&response1.data
            setUser(result1)
        })
        .catch((err1)=>{
            alert('Users', err1.message)
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response2)=>{
            const result2 = response2&&response2.data
            setPosts(result2)
        })
        .catch((err2)=>{
            alert('Userposts', err2.message)
        })
    },[id])


    
    return (
        <div>
            <h3>USER NAME : {user.name}</h3>
            <h4>Posts by user are as below : </h4>
            <ul>
                {
                   posts.map((up)=>{
                        return <li key={up.id}><Link to={`/posts/${up.id}`}>{up.title}</Link></li>
                   })
                }
            </ul>
        </div>
    )
}

export default UserDetails