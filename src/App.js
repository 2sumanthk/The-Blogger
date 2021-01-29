import React from 'react'
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import UserDetails from './UserDetails'
import Posts from './Posts'
import PostDetails from './PostsDetails'

const App=(props)=>{
  return (
    <div>
      <h1 style={{fontFamily:'Perpetua'}}>The Blogger</h1>
      <div style={{overflow:"hidden" ,fontFamily:'Arial'} }>
        <p style={{float : 'left'}}><Link to='/'>Home | </Link></p>
        <p style={{float : 'left'}}><Link to='/users'> Users | </Link></p>
        <p style={{float : 'left'}}><Link to='/posts'> Posts</Link></p>
      </div>
      <Route path='/' component={Home} exact={true}></Route>
      <Route path='/users' component={Users} exact={true}></Route>
      <Route path='/users/:id' component={UserDetails}></Route>
      <Route path='/posts' component={Posts} exact={true}></Route>
      <Route path='/posts/:id' component={PostDetails}></Route>
    </div>
  )
}

export default App