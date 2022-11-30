import React, { Component, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Div from 'react-bootstrap/Container'
import './page.css'
import UserPost from '../components/UserPosts'

function PostPage() {
  return (
    <div>
      <Div fluid className=''>
        <Sidebar />
        <Div className=''>
          <Div className=' '>
            <Div className='d-flex justify-content-center py-4'>
              <h1>Vos Posts</h1>
            </Div>
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
          </Div>
        </Div>
      </Div>
    </div>
  )
}

export default PostPage
