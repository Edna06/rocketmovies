import {Container, Button, Content, Stars, Title, Info, Author, Date, Tags, Description} from './styles'
import {Tag} from '../../Components/Tag'
import {FiClock} from 'react-icons/fi'

import {Header} from '../../Components/Header/index'
import { ButtonText } from '../../Components/ButtonText'
import { StarRating} from '../../Components/StarRating'

import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../service/api'
import {useState, useEffect} from 'react'

import {useAuth} from '../../Hook/auth'
import avatarPlaceholder from '../../assets/avatar-placeholder.jpg'



export function MoviePreview(){
  const {user} = useAuth()

  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm) {
      await api.delete(`/movie_notes/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNoteOfMovie (){
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data)
    }

    fetchNoteOfMovie()
  }, [])



  return(

    <Container>
      <Header/>


      <Button>
      <ButtonText
      icon
      title="Voltar"
      onClick={handleBack}/>

      <ButtonText
      iconTrash
      title="Excluir"
      onClick={handleRemove}
      />

      </Button>

    {
      data &&
     <main>
        <Content>

       <Title>
         <h1>{data.title}</h1>

        <Stars>
              <StarRating rating={data.rating}/>
        </Stars>
       </Title>

          <Info>
            <Author>
              <img src={avatarUrl} alt="Foto do autor" />
              <p>Por {user.name}</p>
            </Author>

            <Date>
              <span>
                <FiClock/>
                </span>
              <p> {data.created_at}</p>
            </Date>
          </Info>



        <Tags>
          {
            data.tags.map(tag => (
              <Tag
              key={tag.id}
              title={tag.name}/>
            ))

          }

        </Tags>

        <Description>
         {data.description}
        </Description>
        </Content>
      </main>
    }
    </Container>
  )
}
