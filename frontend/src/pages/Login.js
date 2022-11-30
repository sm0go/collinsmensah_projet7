import React from 'react'
import { useForm } from "react-hook-form";
import Div from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import logoWhite from '../image/logo/icon-white.png'
import { useNavigate } from 'react-router-dom';


export default function Log(){
  
  const { register, handleSubmit, formState: { errors }} = useForm()
  const navigate = useNavigate(); 

  const regexPseudoOrEmailOnly = /^([\w]{3,}[\w-]*)[@]?([\w\d-]*)\.?[\w\d-]*$/g
  const onSubmit = data => {
    const emailOrPseudo = data.input.includes('@')
    emailOrPseudo ? data.email = data.input : data.pseudo = data.input
    delete data.input
    console.log('fetch at "login", ');
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if(data.token) {
          localStorage.token = data.token
          navigate(`/groupo`)
        } 
      })
      .catch(err => {
        return alert(err)
      })

  };

  const onError = err => {
    console.log('err :' + err)
  }
  
  return ( 
    <>
      <Div fluid className="vh-100 d-flex align-items-center text-white align-items-center">
      <Div className="flex-column w-50 bg-dark bg-opacity-75 p-3 px-5 rounded-3 shadowContainer "> 
          <Row className='mx-auto'>
            <Figure>
              <Figure.Image
              width={300}
              height={300}
              alt="300x300"
              src={logoWhite}
              />  
            </Figure>
          </Row>
          <Row>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail ou Pseudo</Form.Label>
              <Form.Control 
                {...register('input', { pattern: {
                  value: regexPseudoOrEmailOnly,
                  message: 'E-mail/Pseudo inccorecte' 
                }},
                {required: "Un e-mail ou un pseudo est obligatoire"},
                )}   
                  size='lg' className='rounded-1 inputOpacity' type='text' placeholder="Entrez votre e-mail" />
                <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label >Mot de passe</Form.Label>
              <Form.Control {
                ...register("password", 
                { minLength: {
                  value: 5,
                  message: 'Mot de passe trop court' 
                }},
                {required: "Un mot de passe est obligatoire"}
                )} 
                size='lg' className='rounded-1 inputOpacity' type="password" placeholder="Entrez votre mot de passe" />
                <Form.Text className="errors text-danger">{errors.password?.message}</Form.Text>
            </Form.Group>
            <Button type="submit" className="w-100 mt-2 btn btn-lg shadow-none">Connexion</Button> {/* loginButton */}
          </Form>
          </Row>
          <Row className="mb-2 mt-4 ms-auto"> 
            <Div>Vous n'avez pas encore de compte ? <a className='signupButton' href="/signup">Cliquez ici</a> </Div>
          </Row>
        </Div>
      </Div>
    </>
    )
  }
