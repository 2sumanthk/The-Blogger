import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const PostDetails = (props)=>{
    const {id} = props.match.params
    const [post, setPost] = useState({})
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then((response)=>{
            const result = response.data
            console.log(result)
            setPost(result)
        })
        .catch((err)=>{
            alert('POSTSURL',err.message)
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const result = response.data
            console.log(result)
            setComments(result)
        })
        .catch((err)=>{
            alert('commentsURL',err.message)
        }) 
    },[id])

    useEffect(()=>{
        if(post.userId){
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response)=>{
            const result = response.data
            console.log(result)
            setUser(result)
        })
        .catch((err)=>{
            alert('UsersURL',err.message)
        }) 
        }
    },[post.userId])

   

    return (
        <div>
            <h3>USER NAME : {user.name} </h3>
            <h3>TITLE : {post.title}</h3>
            <h4>BODY : </h4>
            <p>{post.body}</p>
            <hr></hr>
            <h3>COMMENTS</h3>
            <ul>
                {comments.map((comment)=>{
                    return <li key={comment.id}>{comment.body}</li>
                })}
            </ul>
            <hr></hr>
            <Link to={`/users/${post.userId}`}>More posts of author : {user.name}</Link>

        </div>
    )
}

export default PostDetails