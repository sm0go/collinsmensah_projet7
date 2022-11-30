import React from 'react'
import Div from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useForm } from "react-hook-form";
import Brand from './Brand'
import Sidebar from './Sidebar'

export default function Message() {

  const RegexCharacterOnly = /^[a-zA-ZÀ-ÿ -]([^0-9&~"(_^à@)=}\]\\`|{}#/%*$£¤!?,.;:§µ<>]*)$/g
  const RegexEmailOnly = /[a-z0-9-_]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+/g

  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdministrator: false,
    image: ""
  }

  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: initValues,
  })

  return (
    <>
      <Brand></Brand>
      <Sidebar />
      <Div className='d-flex vh-100'>
          <Col className='align-items-center justify-content-center '>
            <Row className='mt-5 p-0 w-75 mx-auto'>
                <Form>
                  <Form.Group className="mb-2" controlId="email">
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
                  <Row className='d-flex'>
                    <Col>
                      <Form.Group className="mb-2" controlId="firstName">
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
                      <Form.Group className="mb-2" controlId="lastName">
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
                  <Form.Group className="mb-2" controlId="messageForm">
                    <Form.Label >Votre message</Form.Label>
                    <Form.Control {
                      ...register("messageForm",
                      { minLength: {
                        value: 5,
                        message: 'Message trop court'
                      }},
                      {required: "Veuillez saisir un message"}
                      )}
                      size='xxl' style={{height: 150}} className='rounded-1 inputOpacity' type="messageForm" placeholder="Saissisez votre message" />
                      {errors.messageForm && (<Form.Text className="text-danger">{errors.messageForm.message} </Form.Text>)}
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