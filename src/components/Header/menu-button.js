import React from 'react'

import { colors } from '../../styles/'

import styled, {keyframes} from 'styled-components'

const opened = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: rotate(-720deg);
  }
`

const closed = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: rotate(720deg);
  }
`

const Button = styled.button`
background: ${colors.background};
border: none;
border-radius: 4rem;
color: ${colors.ui};
font-weight: bold;
height: 3rem;
outline: none;
padding: .2rem;
width: 3rem;
&.open {
  animation: ${opened} .8s ease;
  font-size: 1.3rem;
}
&.closed {
  animation: ${closed} .8s ease;
  font-size: 1.6rem;
}
`

export default ({handleClick, open}) => (
  <Button
    className={open ? 'open' : 'closed'}
    onClick={handleClick}
  >
    {open ? 'X' : '≡'}
  </Button>
)
