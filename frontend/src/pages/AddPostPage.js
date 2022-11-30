import React from 'react'
import Sidebar from '../components/Sidebar'
import Div from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useForm } from "react-hook-form";
import Brand from '../components/Brand'
import { useNavigate } from 'react-router-dom'

export default function Message() {

  const navigate = useNavigate(); 

  const initValues = {
    postMessage: '',
    // dateOfCreation: '', 
    image: ''
  }

  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: initValues,
  })


  const onSubmit = values => {
    const form = new FormData()
    form.append('file', values.image[0])
    form.append('postMessage', values.postMessage)
    // const data = {
    //   ...values,
    //   image: values.image[0]
    // }


    console.log("fetch at 'post'...");
    const url = 'http://localhost:3000/post';
    const option = {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        // "Content-Type": "multipart/form-data",
        'Authorization':`Bearer ` + localStorage.token
      },
      body: form    
    }
    
    fetch(url, option)
      .then(res => res.json())
      .then(data => {
        alert('Votre poste a bien été crée')
        navigate('/groupo') 
        return data
      })
      .catch(err => alert(err))
  }
 
  const onError1 = err => {
    console.log('err :' + err)
  }

  return (
    <>
      <Brand />
      <Sidebar />
      <Div className='d-flex '>
          <Col className='align-items-center justify-content-center '>
            <Row className='mt-2 p-0 w-75 mx-auto'>
                <Form encType='' onSubmit={handleSubmit(onSubmit, onError1)}>
                  <Form.Group className="mt-3" controlId="postMessage">
                    <Form.Label >Post</Form.Label>
                    <Form.Control {
                      ...register("postMessage",
                      { minLength: {
                        value: 5,
                        message: 'Message trop court'
                      }},
                      {required: "Veuillez saisir un message"}
                      )}
                        style={{height: 250}} className='rounded-1 inputOpacity' type="postMessage" placeholder="Saissisez votre message ici" />
                      {errors.postMessage && (<Form.Text className="text-danger">{errors.postMessage.message} </Form.Text>)}
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choisissez une image</Form.Label>
                    <Form.Control
                      as="input"
                      type="file"
                      {...register("image")}
                    />
                    {errors.image && (<Form.Text className="text-danger">{errors.image.message}</Form.Text>
                    )}
                  </Form.Group>
                  <Row className='justify-content-center'>
                    <Button type="submit" className="w-25 mt-2 btn btn-lg shadow-none">Envoyer</Button>
                  </Row>
              </Form>
            </Row>
            

          </Col>
        </Div>
    </>
  )
}