import React, { useEffect, useState } from 'react'
import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import pp from '../image/dog.jpg'
import './Post.css'
import Comments from './Comments'
import Sidebar from './Sidebar'
import Button from 'react-bootstrap/Button'
import * as MdIcon from 'react-icons/md'
import * as BiIcon from 'react-icons/bi'
import Btn from './SupprEditBtn'
import Brand from './Brand' 


function SelectedPost() {
  const [data, setData] = useState(null)
  const id = new URL(window.location.href).searchParams.get("id")
  console.log(id);
  useEffect(() => {
      console.log("fetch at 'post'...");
      const url = `http://localhost:3000/post/${id}`;
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
        .then(data => {
          ;
          // return setData(data)
        })
        .catch(err => alert(err))
  }, [])


  const test = []
  test.push(data)
  console.log(test);

  

  return (
    <>
      <Brand />
      <Sidebar />
      <Div className='posts d-flex w-75 mt-4'>
      <div className="d-flex me-2 mt-3" style={{height: 50, position: 'relative', }}>
        <div className="vr"></div>
      </div>
        <Col className='justify-content-center h-auto m-0 p-2 rounded'>
            <Col className='d-flex p-2'>
              <a href="/user" className='w-auto me-auto pe-0' style={{marginRight: 'auto'}}>
                <Col className='d-flex align-items-center'>
                  <Figure className='m-0'>
                    <Figure.Image className='rounded-circle'
                      height={50}
                      width={50}
                      src={pp}
                      sizes='100x100'
                    />
                  </Figure>
                  <Div className='text-muted pe-0'>Posté le {test.dateOfCreation}{'Date'}</Div>
                </Col>
              </a>
              <Btn className='ml-auto justify-content-end  align-items-center' />
            </Col>
            <Row  className=' py-3 bg-light m-0 border rounded-2 border border-left-0 bg-white '>
                <Div className=''>
                  Ceci est le post selectionné. Ceci est le post selectionnéCeci est le post selectionnéCeci est le post selectionnéCeci est le post selectionnéCeci est le post selectionnéCeci est le post selectionnéCeci est le post selectionnéCeci est le post selectionnéCeci est le post selectionné
                </Div>
            </Row>
           <Comments />
        </Col>
      </Div>
    </>
  )
}

export default SelectedPost