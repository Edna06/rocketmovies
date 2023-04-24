import {Container, Form, Avatar} from './styles'

import { useState } from 'react'

import { useAuth } from '../../Hook/auth'

import {FiCamera, FiUser, FiMail} from 'react-icons/fi'
import {HiLockClosed, HiLockOpen} from 'react-icons/hi'


import {ButtonText} from '../../Components/ButtonText/index'
import {Button} from '../../Components/Button'
import {Input} from '../../Components/Input'



export function Profile(){
 const {user, updateProfile} = useAuth()

 const [name, setName] = useState(user.name)
 const [email, setEmail] = useState(user.email)
 const [passwordOld, setPasswordOld] = useState()
 const [passwordNew, setPasswordNew] = useState()


async function handleUpdate(){
  const user = {
    name,
    email,
    old_password: passwordOld,
    password: passwordNew
  }

  await updateProfile({user})
}


  return (
  <Container>

      <header>
        <ButtonText redirect={'/'} icon title='Voltar'/>
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


      <Input
      icon={FiUser}
      type='text'
      placeholder="Nome"
      value = {name}
      onChange = { e => setName(e.target.value)}/>

      <Input
      icon={FiMail}
      type='text'
      placeholder="E-mail"
      value = {email}
      onChange = { e => setEmail(e.target.value)}/>

      <Input
      icon={HiLockClosed}
      type='password'
      placeholder="Senha atual"
      onChange = { e => setPasswordOld(e.target.value)}
      />

      <Input
      icon={HiLockOpen}
      type='password'
      placeholder="Nova senha"
      onChange = { e => setPasswordNew(e.target.value)}/>

      <Button title="Salvar" onClick={handleUpdate}/>

    </Form>

  </Container>
  )


}