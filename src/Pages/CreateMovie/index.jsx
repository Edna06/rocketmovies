import { Container} from "./styles";
import {Header} from '../../Components/Header/index'
import { ButtonText } from "../../Components/ButtonText/index";
import { Input } from "../../Components/Input/index";


export function CreateMovie(){
  return(
    <Container> 
      <Header/>

      <Button>
      <ButtonText  icon title="Voltar"/>
      </Button>

      <main>
       
       <Content>
      
        <h1>Novo Filme</h1>
      
  
         <Info>
           
         </Info>
       

      
      
       </Content>
     </main>

    </Container>
  )
}