import { Container } from "./styles";
import {FiArrowLeft} from 'react-icons/fi'

export function ButtonText({icon, title, isActive, ...rest}){
 return(
   <Container
    type='button'
    isActive={isActive}
    {...rest}>
    {icon ? <FiArrowLeft/> : "" }
    {title}
   </Container>
 )
}