import {Container, Head, Content, Wrapper} from './styles'

import {Header} from '../../Components/Header'
import {Button} from '../../Components/Button'
import {NoteOfMovies} from '../../Components/NoteOfMovie'

import {FiPlus} from "react-icons/fi"

import { useState, useEffect } from 'react'

import { api } from '../../service/api'

export function Home(){
  const [search, setSearch] = useState("")

  const [notes, setNotes] = useState([])


  useEffect(()=> {
    async function fetchNotes(){
      const response = await api.get(`/movie_notes?title=${search}`)
      setNotes(response.data)
    }

   fetchNotes()
  }, [search])

return(
<Container>
  <Header
    onChange = {(e) => setSearch(e.target.value)}
  />

  <Head>
    <h1>
      Meus Filmes
    </h1>

    <Wrapper to="/createMovie">
      <Button icon={<FiPlus/>} title="Adicionar filme"/>
    </Wrapper>
  </Head>


  <Content>
    <main>
      {
      notes.map( note => (

        <NoteOfMovies
        key={String(note.id)}
        data={note}/>
          ))
          }

    </main>
  </Content>
</Container>

  )
}