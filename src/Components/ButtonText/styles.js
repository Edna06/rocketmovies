import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Container = styled(Link)`
width: auto;
display: flex;
gap: 5px;
align-items: center;

color: ${({theme}) => theme.COLORS.PINK};
border: none;
background: none;
    
font-weight: 400;
font-size: 16px;
line-height: 21px;
`