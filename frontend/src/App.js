import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Login from './pages/Login'
import {Route, Routes, Link, Outlet, Navigate, Router} from "react-router-dom"
import Signup from './pages/Signup'
import Groupo from './pages/GroupoPage'
import Message from './pages/MessagePage'
import Post from './pages/PostPage'
import Add from './pages/AddPostPage'
import SelectedPost from './components/SelectedPost';
import Msg from './components/MessageForm'
import User from './pages/UserPage'
import SltMsg from './components/SelectedMessage'
import Text from './pages/Test'
import ProtectedRoutes from './components/ProtectedRoutes';
import Settings from './pages/Settings'


function App() {
  return (
      <>
        <Routes>
          <Route path='/' caseSensitive={false} element={<Layout />} />
          <Route path='/login' caseSensitive={false} element={<Login />} />
          <Route path='/signup' caseSensitive={false} element={<Signup />} />
          <Route path='/test2' caseSensitive={false} element={<ProtectedRoutes login={{value: 'true'}}  name='Collins' age='50' />} />
          
            <Route element={<ProtectedRoutes />}>
              <Route path='/groupo' caseSensitive={false} element={<Groupo postData=''/>} />
              <Route path='/profile/message' caseSensitive={false} element={<Message messageId=''/>} />
              <Route path='/profile/post' caseSensitive={false} element={<Post />} />
              <Route path='/profile/add' caseSensitive={false} element={<Add />} />
              <Route path='/settings' caseSensitive={false} element={<Settings />} />
              <Route path='/thepost' caseSensitive={false} element={<SelectedPost />} />
              <Route path='/sendmessage' caseSensitive={false} element={<Msg />} />
              <Route path='/user' caseSensitive={false} element={<User />} />
              <Route path='/themessage' caseSensitive={false} element={<SltMsg />} />
            </Route>
          <Route path='/test' caseSensitive={false} element={<Text />} />
        </Routes>
      </>  
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/groupo">Profile</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  ); 
}

export default App;




