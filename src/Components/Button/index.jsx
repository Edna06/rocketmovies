import {Container} from './styles'

export function Button({title, loading, icon:Icon, ...rest}){
return(
<Container
type='button'
disabled={loading}
{...rest}>
  {Icon}
  {loading ? "Carregando..." : title}
</Container>
  )
}