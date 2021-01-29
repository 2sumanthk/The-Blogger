import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Posts = (props)=>{
    const postsURL = 'https://jsonplaceholder.typicode.com/posts/'
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        axios.get(postsURL)
        .then((response)=>{
            const result = response.data
            setPosts(result)
        })
        .catch((err)=>{
            alert('Posts', err.message)
        })
    },[])

    return (
        <div>
            <h3>Total Posts - {posts.length}</h3>
            <ul>
                {
                    posts.map((post)=>{
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Posts