import {Container, Form, Background} from "./styles"

import {FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { ButtonText } from "../../Components/ButtonText"

export function SingUp(){
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
        placeholder= "Nome"/>

        <Input
        type='text'
        icon={FiMail}
        placeholder= "E-mail"/>

        <Input
        type='password'
        icon={FiLock}
        placeholder= "Senha"/>

        <Button title='Cadastrar'/>

      <div className="buttonNewAccount">
       <ButtonText  redirect='/login' icon title='Voltar para o login'/> 
      </div>

      </Form>

    </Container>
  )
}