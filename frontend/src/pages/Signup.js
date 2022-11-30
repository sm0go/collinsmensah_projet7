import React  from 'react'
import { useForm } from "react-hook-form";
import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as FiIcon from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


export default function SignupFrom() {

  const regexCharacterOnly = /^[a-zA-ZÀ-ÿ -]([^0-9&~"(_^à@)=}\]\\`|{}#/%*$£¤!?,.;:§µ<>]*)$/g
  const regexPseudoOnly = /^[a-zÀ-ÿ0-9]([^ &~"(_^à@)=}\]\\`|{}#/%*$£¤!?,.;:§µ<>-]*)$/g
  const regexEmailOnly = /^[a-z0-9-_]+@[a-z-]+(?:\.[a-z0-9-]+)+/g
  const regexPasswordOnly = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
  const navigate = useNavigate(); 

  const initValues = {
    pseudo: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdministrator: false,
    image: "",
    posts: [],
  }
  
  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: initValues,
  })

  const onSignup = data => {
    const url = 'http://localhost:3000/signup';
    const option = {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }
    
    fetch(url, option)
      .then(res => res.json())
      .then(data => {
        if(data.token){
          localStorage.token = data.token
          navigate('/groupo')
        } 
    })
      .catch(err => alert(err))
  }
 
  const onError = err => {
    console.log('err :' + err)
  }

  return (
    <>
    <Div fluid className="vh-100 bg my-2 text-white">
      <Div className="d-flex flex-column w-50 bg-dark bg-opacity-75 p-3 px-5 rounded-3 shadowContainer"> 
        <Row className='my-3 mx-auto'>
          <Button className='addImage btn shadow-none' style={{ fontSize: 17 }}>Ajouter une image</Button>
        </Row>
        <Row>
          <Form onSubmit={handleSubmit(onSignup, onError)}>
            <Row className='form-row'>
              <Form.Group className="mb-2" controlId="pseudo">
                <Form.Label>Pseudonyme</Form.Label>
                <Form.Control {
                  ...register('pseudo', { pattern: {
                    value: regexPseudoOnly,
                    message: 'Pseudo inccorecte' 
                  }, minLength: {
                    value: 3,
                    message: 'Pseudonyme trop court' 
                  }}, {required: "Un psuedonyme est obligatoire"})
                } size='md' className='rounded-3 inputOpacity' type="pseudo" placeholder="JeanDupont137" />
                {errors.pseudo && (<Form.Text className="text-danger">{errors.pseudo.message}</Form.Text>)}
              </Form.Group>
              <Col>
                <Form.Group className="mb-2" controlId="firstName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control {
                    ...register('firstName', { pattern: {
                      value: regexCharacterOnly,
                      message: 'Prénom inccorecte' 
                    }, minLength: {
                      value: 3,
                      message: 'Prénom trop court' 
                    }}, {required: "Un prénom est obligatoire"})
                  } size='md' className='rounded-3 inputOpacity' type="firstName" placeholder="Jean" />
                  {errors.firstName && (<Form.Text className="text-danger">{errors.firstName.message}</Form.Text>)}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2" controlId="lastName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control {
                    ...register('lastName', { pattern: {
                      value: regexCharacterOnly,
                      message: 'Nom inccorecte' 
                    }, minLength: {
                      value: 3,
                      message: 'Nom trop court' 
                    }}, {required: "Un prénom est obligatoire"})
                  } 
                  size='md' className='rounded-3 inputOpacity' type="lastName" placeholder="Dupont" />
                  {errors.lastName && (<Form.Text className="text-danger">{errors.lastName.message}</Form.Text>)}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control {
                ...register('email', { pattern: {
                  value: regexEmailOnly,
                  message: 'E-mail incorrecte' 
                }}, {required: "Un prénom est obligatoire"})
              }  size='md' className='rounded-3 inputOpacity' type="email" placeholder="jeandupont@gmail.com" />
              {errors.email && (<Form.Text className="text-danger">{errors.email.message}</Form.Text>)}
              </Form.Group>
            <Row className ='d-flex align-items-center'>
              <Col >
                <Form.Group className="mb-2" controlId="password">
                  <Form.Label >Mot de passe</Form.Label>
                  <Form.Control {
                    ...register('password', { pattern: {
                      value: regexPasswordOnly,
                      message: `Mot de passe incorrect : 
                       Pour plus sécurité, les mot de passe doivent contenir au moins 8 caractères et contenir toutes les catégories suivantes : majuscules, minuscules, chiffres et symboles.` 
                    }}, {required: "Un mot de passe est obligatoire"})
                  }  size='md' className='rounded-3 inputOpacity' type="password" placeholder="*******" />
                  {errors.password && (<Form.Text className="text-info">{errors.password.message}</Form.Text>)} 
                  </Form.Group>
              </Col>
            </Row> 
            <Row className='d-flex align-items-center'>
              <Col sm={2} className=''>
                <a className='loginButton h-auto' href="/login"><FiIcon.FiCornerDownLeft size={40}  /></a>
              </Col>
              <Col sm={10}>
                <Button type="submit" className="w-100 my-3 btn shadow-none">Inscription</Button>
              </Col>
            </Row>
          </Form>
        </Row>
        <Row className="mb-2 mt-3 me-auto text-decoration-none"> 
        </Row>
      </Div>
    </Div>
  </>
  )
}

