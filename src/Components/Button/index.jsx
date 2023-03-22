import {Container} from './styles'

export function Button({title, loading, icon:Icon}){
return(
<Container 
type='button'>
  {Icon}
  {loading ? "Carregando..." : title}
</Container>
  )
}