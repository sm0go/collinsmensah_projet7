import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import pp from '../image/dog.jpg'
import '../components/Post.css'
import Sidebar from '../components/Sidebar'
import Button  from 'react-bootstrap/Button'
import ProfilePost from '../components/ProfilePost'
import Brand from '../components/Brand'
import * as MdIcon from 'react-icons/md'
import * as BiIcon from 'react-icons/bi'
import { useEffect, useState } from 'react'


function Fetch() {

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
    
    return ( null
      // <>
      //   <Brand />
      //   <Sidebar />
      //   <Div className='w-75 mt-2'>
      //     <Row className='p-2 rounded'>
      //         <Col className='rounded-2 w-auto vh-100'>
      //           <Row sm={12}  className='bg-light rounded-4 my-4 justify-content-center align-items-center '>
      //               <Figure className='w-auto m-0 py-3'>
      //                 <Figure.Image className='rounded-circle m-0 shadow-custom' 
      //                   height={200}
      //                   width={200}
      //                   src={pp}
      //                   sizes='100x100'
      //                 />
      //               </Figure>
      //               <Col sm={12} className='w-auto fs-2'>
      //                 <Row>
      //                   <Div className='color-custom'>{profileData.pseudo}</Div>
      //                 </Row>
      //                 <Row>
      //                   <Div>{profileData.firstName} {profileData.lastName}</Div>
      //                 </Row>
      //                 <Row>
      //                   <Div className='text-muted'>Crée le {profileData.dateOfCreation}</Div>
      //                 </Row>
      //               </Col>
      //           </Row>
      //           <Div className='w-75' style={{ borderTop: "1px solid #A9A9A9" }} />
  
      //           <Col className='justify-content-cente fs-6'>
      //             <Row className=' mb-2'>
      //               <Row className='mx-3 mb-4 mt-2 fs-3 '>
      //                 Informations
      //               </Row>
      //               <Row className='mx-3 my-2'>
      //                 Pseudonyme: {profileData.pseudo}
      //               </Row>
      //               <Row className='mx-3 my-2'>
      //                 Prénom: {profileData.firstName}
      //               </Row>
      //               <Row className='mx-3 my-2 '>
      //                 Nom: {profileData.lastName}
      //               </Row>
      //               <Div className='mb-3 w-75' style={{ borderTop: "1px solid #A9A9A9" }} />
      //               <Row className='mx-3 my-2 '>
      //                 Titre Administrateur: {profileData.isAdministrator === true ? 'oui' : 'non'}
      //               </Row>
      //               <Row className='mx-3 my-2 '>
      //                 Bio: Editez votre bio en cliquant sur 'Editer'
      //               </Row>
      //             </Row>
      //             <Div sm={8} className="mb-3" style={{}}>
      //             <Button className='bg-info btn-edit m-1 justify-content-start x' ><BiIcon.BiEdit />Editer</Button>
      //             <Button className='btn-delete m-1 justify-content-start x' ><MdIcon.MdOutlineDelete />Supprimer</Button>
      //             </Div>
      //           </Col>
      //           <Div className='mb-3 w-75' style={{ borderTop: "1px solid #A9A9A9" }} />
      //           <Row>
      //             <Row className='mt-4 justify-content-center fs-3'>Vos Posts</Row>
      //             <ProfilePost />
      //           </Row>
      //         </Col>
      //     </Row>
      //   </Div>
      // </>
    )
}


export default Fetch()