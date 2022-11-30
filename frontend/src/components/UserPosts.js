import React from 'react'
import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import pp from '../image/dog.jpg'
import './Post.css'
import Comments from './Comments'
import Brand from './Brand'
import Btn from './SupprEditBtn'



function UserPost() {
  return (
    <>
      <Div className='posts d-flex'>
      <div className="d-flex me-2 mt-3" style={{height: 50, position: 'relative', }}>
        <div className="vr"></div>
      </div>
        <Col className='justify-content-center h-auto m-0 p-2 rounded'>
            <Row className='d-flex  p-2 w-auto'>
                  <a  href="/user" className='w-auto px-0'>
                    <Col className='d-flex align-items-center '>
                      <Figure className='m-0 px-2'>
                        <Figure.Image className='rounded-circle p-0 m-0'
                          height={50}
                          width={50}
                          src={pp}
                          sizes='100x100'
                        />
                      </Figure>
                      <Col className='text-muted pe-0'>Posté le 'Date'</Col>
                    </Col>
                  </a>

                <Col >
                  <Btn  className=''/>
                </Col>
            </Row>

            <Row  className=' py-3 bg-light m-0 border rounded-2 border border-left-0 bg-white '>
              <a href="/thepost">
                <Div className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et felis in libero dictum euismod. Ut mollis aliquet tincidunt. Ut porttitor justo volutpat rhoncus convallis. Suspendisse id leo suscipit, luctus velit eu, sodales ante. Mauris consectetur, arcu et tristique ultrices, quam justo finibus neque, tincidunt ultricies neque quam sit amet felis. Suspendisse id eros nisl. Ut nisi enim, vestibulum non eleifend dapibus, fermentum in orci. Sed quam dui, malesuada vitae lectus venenatis, euismod consequat nibh. Nam molestie gravida leo nec varius. Vivamus gravida elit tempus, egestas nisl et, tempus magna. Sed auctor eu magna at hendrerit. Sed commodo eros sapien. In porttitor dui ligula, et ultricies ex laoreet ut. Curabitur ut facilisis dolor, ut elementum est.
                </Div>
              </a>
            </Row>
            <Div className='my-3' style={{ borderTop: "1px solid #A9A9A9" }} />
           <Comments />
        </Col>
      </Div>
    </>
  )
}

export default UserPost