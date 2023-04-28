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
  const [date, setDate] = useState({})


  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const created = new window.Date(date.created_at);
  created.setTime(created.getTime() - 3 * 3600000);
  const day = created.getDate();
  const month = created.toLocaleString('default', { month: '2-digit' });
  const year = String(created.getFullYear()).slice(-2);
  const hours = String(created.getHours()).padStart(2, '0');
  const minutes = String(created.getMinutes()).padStart(2, '0');



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
    async function fetchNoteOfMovie(){
      const response = await api.get(`/movie_notes/${params.id}`)

      setData(response.data)
      setDate(response.data)
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
              <p> {day}/{month}/{year} às {hours}:{minutes}</p>
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
