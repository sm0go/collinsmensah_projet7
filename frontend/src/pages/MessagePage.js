import React from 'react'
import Sidebar from '../components/Sidebar'
import Div from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
import Msg from '../components/Messages'
import * as BiIcon from 'react-icons/bi'
import Button from 'react-bootstrap/Button'
import './page.css'

export default function Message() {

  return (
    <Div>
      <Sidebar />
      <Div className='my-5 px-3'>
        <a href='/sendmessage' className='d-flex btn send-button shadow-none'>
          <Div>
            Envoyer
          </Div>
          <BiIcon.BiMailSend />
        </a>
        <Row className='d-flex my-4 justify-content-center align-items-center ' style={{height: 40, fontSize: 20}}>
          <Row className='justify-content-center'>
          Message
          </Row>
        </Row>
        <Row className='d-flex flex-column'>
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
          <Msg />
        </Row>
      </Div>
    </Div>
  )
}
