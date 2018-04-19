import { keyframes } from 'styled-components'

const animations = {
  shake: keyframes`
  10%, 70% {
    transform: translateX(-1px) rotate(10deg);
  }
  20%, 80% {
    transform: translateX(1px) rotate(-10deg);
  }
  30%, 50%, 90% {
    transform: translateX(-2px) rotate(10deg);
  }
  40%, 60%, 99% {
    transform: translateX(2px) rotate(-10deg);
  }
  `,
  opened: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: rotate(-720deg);
    }
  `,
  closed: keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: rotate(720deg);
  }
  `
}

const colors = {
  primary: '#db995a',
  secondary: '#db3069',
  background: '#342e37',
  mobile: '#1446a0',
  ui: '#ffffff'
}

const fonts = {
  title: 'Merriweather',
  paragraph: 'Merriweather Sans',
  backup: 'sans-serif'
}

const screen = {
  mobile: '769px'
}

export { animations, colors, fonts, screen }
