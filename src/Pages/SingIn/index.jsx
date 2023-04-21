import {Container, Form, Background} from "./styles"

import {Link} from 'react-router-dom'

import {FiMail, FiLock } from 'react-icons/fi'

import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { ButtonText } from "../../Components/ButtonText"

export function SingIn(){
  return(
    <Container>
      <Form>

      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
        type='text'
        icon={FiMail}
        placeholder= "E-mail"/>

        <Input
        type='password'
        icon={FiLock}
        placeholder= "Senha"/>

        <Button title='Entrar'/>

      <div className="buttonNewAccount">
        <ButtonText redirect={'/Register'} title='Criar conta'/>
      </div>

      </Form>

      <Background/>
    </Container>
  )
}