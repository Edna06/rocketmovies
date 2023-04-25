import { Container, Head, Content, Info} from "./styles";
import {Header} from "../../Components/Header/index"
import {Button} from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText/index";
import { Input } from "../../Components/Input/index";
import {Markers} from "../../Components/Markers/index"

import { Textarea } from "../../Components/Textarea/index";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../service/api";


export function CreateMovie(){

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")



  function handleAddTag(){
    setTags( prevState => [...prevState, newTag]);
    setNewTag('')
  }

  function handleRemoveTag(tagDeleted){
    setTags (prevState => [...prevState.filter( tag => tag !== tagDeleted)])
  }

  async function handleNewNote(){
    await api.post('/movie_notes', {
      title,
      rating,
      description,
      tags
    })
    alert('Nota criada com sucesso!')

  }



  return(
    <Container>
      <Header/>

      <Head>
      <ButtonText  redirect='/' icon title="Voltar"/>
      </Head>

      <main>
       <Content>

        <h1>Novo Filme</h1>

         <Info>
           <Input
           placeholder="Título"
           onChange = { e => setTitle(e.target.value)}
           />

           <Input
           placeholder="Sua nota (de 0 a 5)"
           onChange = { e => setRating(e.target.value)}
           />
         </Info>

         <Textarea
         placeholder="Observações"
         onChange = { e => setDescription(e.target.value)}/>


          <section>
            <h3>Marcadores</h3>

          <div className="tags">
            {
              tags.map((tag, index) => (
                <Markers
                key={String(index)}
                value={tag}
                onClick = {() => handleRemoveTag(tag)}
                />
              ))
              }

             <Markers
             isNew
             placeholder="Novo marcador"
             onChange = { e => setNewTag(e.target.value)}
             value={newTag}
             onClick={handleAddTag}
             />
          </div>

          </section>
       </Content>
     </main>

     <footer>
       <Button title="Excluir filme"/>
       <Button
       title="Salvar alterações"
       onClick={handleNewNote} />
     </footer>

    </Container>
  )
}