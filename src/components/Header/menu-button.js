import React from 'react'

import { animations, colors } from '../../styles/'

import styled from 'styled-components'

const Button = styled.button`
align-items: center;
background: ${colors.background};
border: none;
border-radius: 4rem;
color: ${colors.ui};
display: flex;
font-weight: bold;
height: 3rem;
justify-content: center;
outline: none;
padding: .2rem;
width: 3rem;
&.open {
  animation: ${animations.opened} .8s ease;
  font-size: 1.3rem;
}
&.closed {
  animation: ${animations.closed} .8s ease;
  font-size: 2.2rem;
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
