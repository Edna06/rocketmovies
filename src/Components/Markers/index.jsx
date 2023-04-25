import {Container} from './styles'

import {FiPlus, FiX} from 'react-icons/fi'


export function Markers({ isNew = false, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input
      type="text"
      value={value}
      readOnly={!isNew}
      {...rest}
      />

      <button
      type='button'
      className = {isNew ? 'button-add' : 'button-delete'}
      onClick={onClick}
      >

       {isNew ? <FiPlus/> : <FiX/>}

      </button>
    </Container>
  )
}


