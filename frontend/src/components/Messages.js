import React from 'react'
import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import pp from '../image/dog.jpg'
import './Post.css'
import * as MdIcon from 'react-icons/md'
import Button from 'react-bootstrap/Button'
import Btn from './SupprEditBtn'
import * as BiIcon from 'react-icons/bi'

function Message() {
  return (
    <>
      <Col className='posts'>
        <Row className='m-0 p-2 rounded x'>
            <Col className=''>
              <Col className='d-flex mb-3'>
                <a href="/user">
                  <Figure className='m-0'>
                    <Figure.Image className='rounded-circle'
                      height={40}
                      width={40}
                      src={pp}
                      sizes='100x100'
                    />
                  </Figure>
                  <Col className='w-auto'>
                    <Row>
                      <Div>'UserName'</Div>
                    </Row>
                    <Row>
                      <Div className='text-muted'>Reçu le 'Date'</Div>
                    </Row>
                  </Col>
                </a>
                <Button className='btn-delete justify-content-start ' style={{height: 40, position:'relative', top: 60, left: 20}} ><MdIcon.MdOutlineDelete /></Button>
              </Col>

            </Col>
            <Col md={12} className='d-flex rounded-2'>
              <a href="/themessage" className=''>
                <Div className='text-shrink bg-white rounded-2' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et felis in libero dictum euismod. Ut mollis aliquet tincidunt. Ut porttitor justo volutpat rhoncus convallis. Suspendisse id leo suscipit, luctus velit eu, sodales ante. Mauris consectetur, arcu et tristique ultrices, quam justo finibus neque, tincidunt ultricies neque quam sit amet felis. Suspendisse id eros nisl. Ut nisi enim, vestibulum non eleifend dapibus, fermentum in orci. Sed quam dui, malesuada vitae lectus venenatis, euismod consequat nibh. Nam molestie gravida leo nec varius. Vivamus gravida elit tempus, egestas nisl et, tempus magna. Sed auctor eu magna at hendrerit. Sed commodo eros sapien. In porttitor dui ligula, et ultricies ex laoreet ut. Curabitur ut facilisis dolor, ut elementum est.
                </Div>
              </a>
          
            </Col>
        <Div className='mt-2 w-100' style={{ borderTop: "1px solid #A9A9A9" }} />

        </Row>
      </Col>
    </>
  )
}

export default Message