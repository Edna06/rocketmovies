import { Container } from "./styles";
import {FiArrowLeft, FiTrash} from 'react-icons/fi'

export function ButtonText({icon, iconTrash, title, ...rest}){
 return(
   <Container {...rest}>
    {icon ? <FiArrowLeft/> : ""}
    {iconTrash ? <FiTrash/> : ""}
    {title}
   </Container>
 )
}