import {Container} from './styles'

export function Textarea({text, ...rest }){
  return (
    <Container {...rest}>
      {text}
    </Container>
  )
}