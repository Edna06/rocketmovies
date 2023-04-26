import {Container} from './styles'

import {FiStar} from 'react-icons/fi'
import {BsStarHalf} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

export function StarRating({ rating }){

  if (!rating) {
    return null;
  }

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Retorna o componente que exibe as estrelas
  return (
    <Container>
      {Array(fullStars).fill().map((_, i) => <AiFillStar key={i} />)}
      {hasHalfStar && <BsStarHalf/>}
      {Array(emptyStars).fill().map((_, i) => <FiStar key={i} />)}
    </Container>
  );
};