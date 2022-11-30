import React, { Component, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Div from 'react-bootstrap/Container'
import './page.css'
import Brand from '../components/Brand'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import pp from '../image/dog.jpg'
import '../components/Post.css'
import Post from '../components/Posts'

function Profile() {

  return (
    <>
      <Div fluid className=''>
        <Sidebar />
        <Div className=''>
          <Div className='px-2 vh-100 '>
            <Div className='d-flex justify-content-center'>
              <Brand />
            </Div>
            <Post />
          </Div>
        </Div>
      </Div>
    </>
  )
}

export default Profile





