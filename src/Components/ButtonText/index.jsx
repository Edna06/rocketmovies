import { Container } from "./styles";
import {FiArrowLeft} from 'react-icons/fi'

export function ButtonText({icon, title, redirect}){
 return(
   <Container
    to = {redirect}>
    {icon ? <FiArrowLeft/> : "" }
    {title}
   </Container>
 )
}