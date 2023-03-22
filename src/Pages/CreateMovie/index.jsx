import { Container, Head, Content, Info} from "./styles";
import {Header} from "../../Components/Header/index"
import {Button} from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText/index";
import { Input } from "../../Components/Input/index";
import {Markers} from "../../Components/Markers/index"

import { Textarea } from "../../Components/Textarea/index";


export function CreateMovie(){
  return(
    <Container> 
      <Header/>
     
      <Head>
      <ButtonText  icon title="Voltar"/>
      </Head> 

      <main>
       <Content>
      
        <h1>Novo Filme</h1>
  
         <Info>
           <Input placeholder="Título"/>
           <Input placeholder="Sua nota (de 0 a 5)"/>
         </Info>
       
         <Textarea placeholder="Observações"/>
      

          <section>
            <h3>Marcadores</h3>

          <div className="tags">
          <Markers value="React" />
          <Markers placeholder="Novo marcador"  isNew/>
          </div>

          </section>
       </Content>
     </main>

     <footer>
       <Button title="Excluir filme"/>
       <Button title="Salvar alterações"/>
     </footer>

    </Container>
  )
}