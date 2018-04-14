import styled from 'styled-components'

import { colors, screen } from '../../styles/'

const Article = styled.article`
align-items: center;
display: flex;
flex-direction: column;
font-size: 1.2rem;
justify-content: center;
text-align: center;
`

const Description = styled.div`
font-family: sans-serif;
font-size: 1rem;
font-style: italic;
margin-bottom: 1rem;
`

const Page = styled.div`
min-height: ${() => window.innerHeight - 104}px;
min-width: 40vw;
@media screen and (min-width: ${screen.mobile}) {
  min-height: ${() => window.innerHeight - 112}px;
}
`

const Paragraph = styled.p`
font-family: 'Merriweather Sans', sans-serif;
font-size: inherit;
&:first-of-type {
  margin-top: 1rem;
}
`

const Section = styled.section`
margin-bottom: 3rem;
&:first-of-type {
  margin-top: 2rem;
}
`

const Separator = styled.hr`
border-color: #ddd;
margin-bottom: 2rem;
margin-top: 2rem;
`

const Skills = styled.ul`
margin-bottom: 1rem;
margin-top: 1rem;
list-style-position: inside;
text-align: left;
min-width: 80%;
@media screen and (min-width: ${screen.mobile}) {
  min-width: 65%;
}
`

const SkillsItem = styled.li`
font-family: 'Merriweather Sans', sans-serif;
font-size: inherit;
list-style-type: none;
&:before {
  content: '#';
  color: ${colors.secondary};
  padding-right: .6rem;
  transition: color .8s;
}
@media screen and (min-width: ${screen.mobile}) {
  &:before {
    color: ${colors.primary};
  }
  &:hover:before {
    color: ${colors.secondary};
  }
}
`

const Subtitle = styled.h2`
font-family: 'Merriweather Sans', sans-serif;
font-size: 1.6rem;
`

const Title = styled.h1`
font-family: 'Merriweather', sans-serif;
font-size: 2rem;
`

export {
  Article,
  Description,
  Page,
  Paragraph,
  Section,
  Separator,
  Skills,
  SkillsItem,
  Subtitle,
  Title
}
