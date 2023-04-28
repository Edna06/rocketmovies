import { useState } from "react"

import {Container, Form, Background} from "./styles"

import {FiMail, FiLock, FiUser} from 'react-icons/fi'

import {useNavigate } from "react-router-dom"

import {api} from '../../service/api'

import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { ButtonText } from "../../Components/ButtonText"

import { toast } from "react-toastify";

export function SingUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleSingleUp(){
    if(!name || !email || !password){
      return alert("preencha todos os campos!")
    }

    api.post('/users', {name, email, password})
    .then(() => {
      toast.success("Usuário cadastrado com sucesso!")
      navigate('/')
      })
    .catch ( error => {
      if(error.response) {
        toast.error( error.response.data.message)
      } else (
        toast.warn("Não foi possível cadastrar")
      )
    })
  }

  return(
    <Container>

        <Background/>

      <Form>

      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
        type='text'
        icon={FiUser}
        placeholder= "Nome"
        onChange = { e => setName(e.target.value)}
        />

        <Input
        type='text'
        icon={FiMail}
        placeholder= "E-mail"
        onChange = { e => setEmail( e.target.value)}/>

        <Input
        type='password'
        icon={FiLock}
        placeholder= "Senha"
        onChange = { e => setPassword(e.target.value)}/>

        <Button
        title='Cadastrar'
        onClick={handleSingleUp}
        />

      <div className="buttonNewAccount">
       <ButtonText
       icon
       onClick = {handleBack}
       title='Voltar para o login'
       />
      </div>

      </Form>

    </Container>
  )
}