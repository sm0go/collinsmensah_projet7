import React from 'react'
import Brand from '../components/Brand'
import Sidebar from '../components/Sidebar'
import { useEffect, useState } from 'react'



export default function Settings() {
  useEffect(() => {
    console.log("fetch at 'get'...");
    const url = 'http://localhost:3000/profile';
    const option = {
      method: 'GET',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization':`Bearer ` + localStorage.token
      },
    }
    fetch(url, option)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => alert(err))
    }, [])

  return (
    <>
      <Brand />
      <Sidebar />

      <div>
        Hello
      </div>
    </>
  )
}
