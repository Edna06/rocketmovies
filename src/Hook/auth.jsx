//arquivo com o contexto de autenticação

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
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }

    }
  }



  function signOut() {
    const user = localStorage.removeItem('@rocketmovies:user')
    const token = localStorage.removeItem('@rocketmovies: token')

    setData({})
  }


  async function updateProfile({user}){
    try {
      await api.put('/users', user)
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

      setData({
        user,
        token: data.token
      })
      alert('perfil atualizado!')
    }
    catch(error){
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o perfil')
      }
    }
  }



  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user')
    const token = localStorage.getItem('@rocketmovies: token')


    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user) //pegado os dados do usuário que estavam armazenados em formato de texto e passando para JSON
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{user: data.user, signIn, signOut, updateProfile}}>
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