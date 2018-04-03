import React from 'react'
import Link from 'gatsby-link'
import icon from '../img/icon.png'

const HighlightP = ({text}) => (
  <span className='highlight primary'>
    {` ${text} `}
  </span>
)

const HighlightS = ({text}) => (
  <span className='highlight secondary'>
    {` ${text} `}
  </span>
)

const LinkP = ({blank, link, text}) => (
  <a
    className='highlight primary'
    href={link}
    rel='noopener noreferrer'
    target={blank ? '_blank' : ''}
  >
    {` ${text} `}
  </a>
)

const LinkS = ({blank, link, text}) => (
  <a
    className='highlight secondary'
    href={link}
    rel='noopener noreferrer'
    target={blank ? '_blank' : ''}
  >
    {` ${text} `}
  </a>
)

const IndexPage = () => (
  <div>
    <h1 className='title-font'>
      Hi
      <HighlightP text='people!' />
      I'm
      <HighlightS text='Roy,' />
    </h1>
    <h2 className='subtitle-font'>
      <HighlightS text='Welcome' />
      to my
      <HighlightP text='portfolio!' />
    </h2>
    <section className='presentation'>
      <img
        alt='Icon'
        className='main-icon'
        src={icon}
      />
      <article className='info'>
        <p className='paragraph-font'>
          <HighlightP text="I'm" />
          a
          <HighlightS text='Front-End' />
          developer.
        </p>
        <p className='paragraph-font'>
          I
          <HighlightS text='also' />
          help
          <HighlightP text='coorganize' />
          <LinkS
            blank={true}
            link='https://freecodecamp.org'
            text='freeCodeCamp'
          />
          events in
          <HighlightP text='Buenos Aires' />
          as a part of the
          <LinkP
            blank={true}
            link='https://freecodecampba.org'
            text='freeCodeCampBA'
          />
          communnity.
        </p>
      </article>
    </section>
    <section className='tools'>
      <img
        alt='Tools'
        className='tools-icon'
        // src={icon}
      />
      <article className='info'>
        <p className='paragraph-font'>
          The tools I work with:
        </p>
      </article>
    </section>
  </div>
)

export default IndexPage
