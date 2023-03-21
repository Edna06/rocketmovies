import {Container, Form, Avatar} from './styles'

import {FiCamera, FiUser, FiMail} from 'react-icons/fi'
import {HiLockClosed, HiLockOpen} from 'react-icons/hi'


import {ButtonText} from '../../Components/ButtonText/index'
import {Button} from '../../Components/Button'
import {Input} from '../../Components/Input'



export function Profile(){
  return (
  <Container>

      <header>
        <ButtonText icon title='Voltar'/>
      </header>

    <Form>
      <Avatar>
        <img 
        src="https://github.com/Edna06.png" 
        alt="foto do usuário" />

        <label htmlFor="avatar">
          <FiCamera/>
          <input type="file" id="avatar" />
        </label>
      </Avatar>
    

      <Input icon={FiUser} placeholder="Nome"/>
      <Input icon={FiMail} placeholder="E-mail"/>
      <Input icon={HiLockClosed} type='password' placeholder="Senha atual"/>
      <Input icon={HiLockOpen} type='password' placeholder="Nova senha"/>

      <Button title="Salvar"/>
    
    </Form>

  </Container>
  )


}