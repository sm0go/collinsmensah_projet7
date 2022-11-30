import React, { useState, useEffect} from 'react'
import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import pp from '../image/dog.jpg'
import './Post.css'
import { useNavigate } from 'react-router-dom'


function Post() {
  
  const Navigate = useNavigate()
  const [postData, setPostData] = useState(null)

  useEffect(() => {
      console.log("fetch at 'post'...");
      const url = 'http://localhost:3000/posts';
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
        .then(data => setPostData(data))
        .catch(err => alert(err))
  }, [])

  console.log(postData);

    return (
      <Col className=''>
        {postData && postData.length > 0 && postData.map((value, index) => {
          // console.log('nom : ', value);
          return (
              <Row key={index} className='justify-content-center h-auto m-0 p-2 rounded'>
                <Col md={3} className=' p-2'>
                  <Row className='pe-2'>
                    <a href="/user">
                      <Figure className='m-0'>
                        <Figure.Image className='rounded-circle'
                          height={60}
                          width={60}
                          src={pp}
                          sizes='100x100'
                        />
                      </Figure>
                      <Col className='w-auto'>
                        <Row>
                          <Div>{value.pseudo}</Div>
                        </Row>
                        <Row>
                          <Div className='text-muted'>{value.dateOfCreation}</Div>
                        </Row>
                      </Col>
                    </a>
                  </Row>
                  <Row>
                  </Row>
                </Col>
                <Col md={9} className='py-3 bg-light m-0 border rounded-2 border border-left-0 bg-white '>
                  <a href= {`/thepost?id=${value._id}`} >
                    <Div className=''>
                      {value.postMessage}
                    </Div>
                  </a>
                </Col>
              </Row>
          )
      })} 
       
     </Col>
   )
}

export default Post
