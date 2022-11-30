import React from 'react'
import Div from 'react-bootstrap/esm/Container';

const LoginFunc = (url, data) => { 
  console.log(url);
  console.log(data);
  return(
  <Div>
    data: 
  </Div>
  )
  // fetch(url, {
  //   method: 'POST',
  //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     window.location.href = "/groupo";
  //     return console.log(data);
  //   })
  //   .catch(err => {
  //     return alert(err)
  //   })

  // return (data)
    
}

export default LoginFunc


