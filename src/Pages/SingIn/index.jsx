import {Container, Form, Background} from "./styles"

import { useAuth } from "../../Hook/auth"

import { useState } from "react"

import {FiMail, FiLock } from 'react-icons/fi'

import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { ButtonText } from "../../Components/ButtonText"

export function SingIn(){
 const [email, setEmail] = useState('') //o nome do estado || função que atualiza o estado
 const [password, setPassword] = useState('')

 

 const {signIn} = useAuth()

 function handleSignIn(){
  signIn({email, password})
 }

  return(
    <Container>
      <Form>

      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
        type='text'
        icon={FiMail}
        placeholder= "E-mail"
        onChange = { e => setEmail(e.target.value)}/>

        <Input
        type='password'
        icon={FiLock}
        placeholder= "Senha"
        onChange= {e => setPassword(e.target.value)}/>

        <Button
        title='Entrar'
        onClick= {handleSignIn}/>

      <div className="buttonNewAccount">
        <ButtonText redirect={'/register'} title='Criar conta'/>
      </div>

      </Form>

      <Background/>
    </Container>
  )
}