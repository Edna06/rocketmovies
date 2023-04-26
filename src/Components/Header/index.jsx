import {Container, Profile, Search, Span} from "./styles"
import {Input} from "../Input/index"

import {useAuth} from '../../Hook/auth'

import {api} from '../../service/api'
import avatarPlaceholder from '../../assets/avatar-placeholder.jpg'


export function Header({onChange}){

  const {signOut, user} = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(

 <Container>
   <h1>RocketMovies</h1>

    <Search>
   <Input
   placeholder="Pesquisar pelo título"
   onChange = {onChange}
   />
    </Search>

    <Profile to='/profile'>
      <div>
        <strong>{user.name}</strong>
        <Span onClick={signOut}>
          Sair
        </Span>
      </div>

      <img
      src={avatarUrl}
      alt= {`foto de ${user.name}`} />
    </Profile>

 </Container>

  )
}