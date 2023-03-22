import { Container } from "./styles";
import { Tag } from "../Tag/index";
import { StarRating } from "../StarRating/index"

export function NoteOfMovies({data, ...rest}){
return (

  <Container {...rest}>
    
    <header>
    <h2>{data.title}</h2>

    <StarRating rating={data.rating} />
    </header>

    <main>
      <p>
        {data.description}   
      </p>
    </main>

  {data.tags && 
    <footer>
      {
        data.tags.map( tag => 
          <Tag key={tag.id} title={tag.name}/> 
         )
      }
    </footer>
  }

  </Container>
  )
}
