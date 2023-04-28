//arquivo com o contexto de autenticação
import { toast } from "react-toastify";

import { createContext, useContext, useState, useEffect } from "react";

import {api} from '../service/api'

export const AuthContext = createContext({})




function AuthProvider({children}){
  const [data, setData] = useState({})


  async function signIn({email, password}) {
    try {
      const response = await api.post('/session', {email, password})
      const {user, token} = response.data

      api.defaults.headers.common["Authorization"] = `Bearer ${token}` //verificando se o usuário existe
      setData({user, token}) //vai me retornar os dados do usuário

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketmovies: token', token)
    }
    catch(error) {
      if(error.response){
        toast.warn(error.response.data.message)
      } else {
        toast.error("Não foi possível entrar.")
      }

    }
  }

  function signOut() {
    const user = localStorage.removeItem("@rocketmovies:user")
    const token = localStorage.removeItem("@rocketmovies: token")

    setData({})
  }


  async function updateProfile({user, avatarFile}){
    try {

      if(avatarFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)

        user.avatar = response.data.avatar
      }

        await api.put('/users', user)
        localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

       setData({ user, token: data.token})
       toast.success('perfil atualizado!')


     } catch(error){
       if(error.response){
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível atualizar o perfil')
      }
    }
  }


  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user")
    const token = localStorage.getItem("@rocketmovies: token")


    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user) //pegado os dados do usuário que estavam armazenados em formato de texto e passando para JSON
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user
      }}
      >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export{
AuthProvider,
useAuth
}