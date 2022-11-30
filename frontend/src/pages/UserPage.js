import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import pp from '../image/dog.jpg'
import '../components/Post.css'
import Sidebar from '../components/Sidebar'
import UserPost from '../components/UserPosts'
import Button from 'react-bootstrap/Button'
import * as MdIcon from 'react-icons/md'
import * as BiIcon from 'react-icons/bi'
import Brand from '../components/Brand'

export default function Profile() {
  return (
    <>
      <Brand/>
      <Sidebar />

      <Div className='w-75 mt-2'>
        <Row className='p-2 rounded'>
            <Col className='rounded-2 w-auto vh-100'>
              <Row sm={12}  className='bg-light rounded-4 my-4 justify-content-center align-items-center '>
                  <Figure className='w-auto m-0 py-3'>
                    <a className='' href="">
                    <Figure.Image className='rounded-circle m-0'
                      height={200}
                      width={200}
                      src={pp}
                      sizes='100x100'
                    />
                    </a>
                  </Figure>
                  <Col sm={12} className='w-auto fs-2'>
                    <Row>
                      <Div className='color-custom'>Profile de 'UserName'</Div>
                    </Row>
                    <Row>
                      <Div>'firstName' 'lastName'</Div>
                    </Row>
                    <Row>
                      <Div className='text-muted'>Crée le 'Date'</Div>
                    </Row>
                  </Col>
              </Row>
              <Div className='w-75' style={{ borderTop: "1px solid #A9A9A9" }} />

              <Col className='justify-content-cente fs-6'>
                <Row className=' mb-2'>
                  <Row className='mx-3 mb-4 mt-2 fs-3 '>
                    Informations
                  </Row>
                  <Row className='mx-3 my-2'>
                    Psudonyme: 'UserName'
                  </Row>
                  <Row className='mx-3 my-2'>
                    Prénom: 'firstName'
                  </Row>
                  <Row className='mx-3 my-2 '>
                    Nom: 'lastName'
                  </Row>
                  <Div className='mb-3 w-75' style={{ borderTop: "1px solid #A9A9A9" }} />
                  <Row className='mx-3 my-2 '>
                    Titre Administrateur: 'True Or False'
                  </Row>
                  <Row className='mx-3 my-2 '>
                    Bio: 'Description'
                  </Row>
                </Row>
                <Div sm={8} className="mb-3" style={{}}>
                <Button className='bg-info btn-edit m-1 justify-content-start x' ><BiIcon.BiEdit />Editer</Button>
                <Button className='btn-delete m-1 justify-content-start x' ><MdIcon.MdOutlineDelete />Supprimer</Button>
                </Div>
              </Col>
              <Div className='mb-3 w-75' style={{ borderTop: "1px solid #A9A9A9" }} />
              <Row>
                <Row className='mt-4 justify-content-center fs-3'>Les Posts Récents de 'UserName'</Row>
                <UserPost />
              </Row>
            </Col>
        </Row>
      </Div>
    </>
  )
}
