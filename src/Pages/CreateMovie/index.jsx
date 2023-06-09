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

import { toast } from "react-toastify";

export function CreateMovie(){

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleAddTag(){
    setTags( prevState => [...prevState, newTag]);
    setNewTag('')
  }

  function handleRemoveTag(tagDeleted){
    setTags(prevState => [...prevState.filter( tag => tag !== tagDeleted)])
  }

  function handleClearNote(){
    const response = window.confirm('Você deseja realmente remover os dados inseridos?')

    if(response){
      setTitle("")
      setRating("")
      setDescription("")
    }
  }

  async function handleNewNote(){
    if(!title){
      return toast.warn('Digite o título da nota')
    }
    if(newTag){
      return toast.info('Você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio')
    }

    toast.success('Nota criada com sucesso!')
    handleBack()

    await api.post('/movie_notes', {
      title,
      rating,
      description,
      tags
    })
  }

  return(
    <Container>
      <Header/>

      <Head>
      <ButtonText  onClick={handleBack} icon title="Voltar"/>
      </Head>

      <main>
       <Content>

        <h1>Novo Filme</h1>

         <Info>
           <Input
           value={title}
           placeholder="Título"
           onChange = { e => setTitle(e.target.value)}
           />

           <Input
           value={rating}
           placeholder="Sua nota (de 0 a 5)"
           onChange = { e => setRating(e.target.value)}
           />
         </Info>

         <Textarea
         value={description}
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
       <Button title="Limpar"
       onClick={handleClearNote}/>
       <Button
       title="Salvar filme"
       onClick={handleNewNote} />
     </footer>

    </Container>
  )
}