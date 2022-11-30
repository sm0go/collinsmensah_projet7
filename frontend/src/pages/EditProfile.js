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

export default function Message() {

  const RegexCharacterOnly = /^[a-zA-ZÀ-ÿ -]([^0-9&~"(_^à@)=}\]\\`|{}#/%*$£¤!?,.;:§µ<>]*)$/g
  const RegexEmailOnly = /[a-z0-9-_]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+/g

  const initValues = {
    pseudo: '',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
    usersCommented: [],
    comments: [],
  }

  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: initValues,
  })

  const onSubmit = data => {
    const url = 'http://localhost:3000/signup';
    fetch(url, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => alert(err))
  }
 
  const onError = err => {
    console.log('err :' + err)
  }


  return (
    <>
      <Brand />
      <Sidebar />
      <Div className='d-flex '>
          <Col className='align-items-center justify-content-center '>
            <Row className='mt-2 p-0 w-75 mx-auto'>
              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <Form.Group className="mb-1" controlId="pseudo">
                  <Form.Label >Pseudo</Form.Label>
                  <Form.Control {
                    ...register("pseudo",
                    { minLength: {
                      value: 5,
                      message: 'Pseudonyme trop court'
                    }, pattern: {
                      value: RegexCharacterOnly,
                      message: 'Pseudo incorrecte'
                    }},
                    {required: "Veuillez saisir un pseudonyme"}
                    )}
                    size='md' className='rounded-1 inputOpacity' type="pseudo" placeholder="Votre Pseudonyme" />
                    {errors.pseudo && (<Form.Text className="text-danger">{errors.pseudo.message} </Form.Text>)}
                </Form.Group>
                <Row className='d-flex'>
                  <Col>
                    <Form.Group className="mb-1" controlId="firstName">
                      <Form.Label >Prénom</Form.Label>
                      <Form.Control {
                        ...register("firstName",
                        { minLength: {
                          value: 5,
                          message: 'Mot de passe trop court'
                        }, pattern: {
                          value: RegexCharacterOnly,
                          message: 'Prénom incorrecte'
                        }},
                        {required: "Un mot de passe est obligatoire"}
                        )}
                        size='md' className='rounded-1 inputOpacity' type="firstName" placeholder="Votre Prénom" />
                        {errors.firstName && (<Form.Text className="text-danger">{errors.firstName.message} </Form.Text>)}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="lastName">
                      <Form.Label >Nom</Form.Label>
                      <Form.Control {
                        ...register("lastName",
                        { minLength: {
                          value: 5,
                          message: 'Nom trop court'
                        }, pattern: {
                          value: RegexCharacterOnly,
                          message: 'Nom incorrecte'
                        }},
                        {required: "Un nom est obligatoire"}
                        )}
                        size='md' className='rounded-1 inputOpacity' type="lastName" placeholder="Votre Nom" />
                        {errors.lastName && (<Form.Text className="text-danger">{errors.lastName.message} </Form.Text>)}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-1" controlId="email">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    {...register("email",
                    { pattern: {
                      value: RegexEmailOnly,
                      message: 'E-mail incorrecte'
                    }},
                    {required: "Un e-mail est obligatoire"},
                    )}
                      size='md' className='formControl rounded-1 inputOpacity' type="email" placeholder="Votre Email" />
                    {errors.email && (<Form.Text className="text-danger">{errors.email.message}</Form.Text>)}
                </Form.Group>
                <Form.Group className="mb-1" controlId="postMessage">
                  <Form.Label >Post</Form.Label>
                  <Form.Control {
                    ...register("postMessage",
                    { minLength: {
                      value: 5,
                      message: 'Message trop court'
                    }},
                    {required: "Veuillez saisir un message"}
                    )}
                    size='xxl' style={{height: 100}} className='rounded-1 inputOpacity' type="postMessage" placeholder="Saissisez votre message ici" />
                    {errors.postMessage && (<Form.Text className="text-danger">{errors.postMessage.message} </Form.Text>)}
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Selectionnez un photo de profile</Form.Label>
                  <Form.Control
                    as="input"
                    type="file"
                    {...register("profilePic")}
                  />
                  {errors.profilePic && (
                    <Form.Text className="text-danger">
                      {errors.profilePic.message}
                    </Form.Text>
                  )}
                  </Form.Group>
              </Form>
            </Row>

            <Row className='justify-content-center'>
              <Button type="submit" className="w-25 mt-2 btn btn-lg shadow-none">Envoyer</Button>
            </Row>
          </Col>
        </Div>
    </>
  )
}