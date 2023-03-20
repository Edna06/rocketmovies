import {Container, Profile, Search} from "./styles"
import {Input} from "../Input/index"

export function Header(){
  return(

 <Container>
   <h1>RocketMovies</h1>

    <Search>
   <Input placeholder="Pesquisar pelo título"/>
    </Search>

    <Profile>
      <div>
        <strong>Edna Moreira</strong>
        <span>Sair</span>
      </div>

      <img src="https://github.com/Edna06.png" alt="foto do usuário" />
    </Profile>

 </Container>

  )
}