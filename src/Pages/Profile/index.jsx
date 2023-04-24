import {Container, Form, Avatar} from './styles'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../Hook/auth'

import {api} from '../../service/api'

import avatarPlaceholder from '../../assets/avatar-placeholder.jpg'

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

 const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
 const [avatar, setAvatar] = useState(avatarURL)
 const [avatarFile, setAvatarFile] = useState(null)

 const navigate = useNavigate()

function handleBack(){
  navigate(-1)
}


async function handleUpdate(){
  const update = {
    name,
    email,
    old_password: passwordOld,
    password: passwordNew
  }

  const userUpdate = Object.assign(user, update)

  await updateProfile({user: userUpdate, avatarFile})
}

function handleChangeAvatar(event){
  const file = event.target.files[0]
  setAvatarFile(file)

  const imagePreview = URL.createObjectURL(file)
  setAvatar(imagePreview)
}


  return (
  <Container>

      <header>
        <ButtonText
        icon
        title='Voltar'
        onClick={handleBack}
        />
      </header>

    <Form>
      <Avatar>
        <img
        src={avatar}
        alt="foto do usuário" />

        <label htmlFor="avatar">
          <FiCamera/>
          <input
          type="file"
          id="avatar"
          onChange={handleChangeAvatar} />
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