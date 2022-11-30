import React from 'react'
import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import pp from '../image/dog.jpg'
import './Post.css'

export default function Comments() {
  return (
    <>
       <Col className='mt-3'>
          <Row className='mx-3 my-2 py-1 d-flex' >
            <Col sm={2} className='w-auto'>
              <a href="/user">
                <Figure className='m-0'>
                  <Figure.Image className='rounded-circle'
                    height={30}
                    width={30}
                    src={pp}
                    sizes='100x100'
                  />
                </Figure>
              </a>
            </Col>
            <Col sm={10} className=' bg-light rounded-2 bg-white '>
              <Div className=''>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend
              </Div>
            </Col>
          </Row>
        <Div className='mt-2 w-75' style={{ borderTop: "1px solid #A9A9A9" }} />
        </Col>
    </>
  )
}
