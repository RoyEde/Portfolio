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

const IndexPage = ({...props}) => (
  <div>
    {console.log(props.mobile)}
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
          <HighlightP text='Buenos' />
          <HighlightS text='Aires' />
          as a part of the
          <LinkP
            blank={true}
            link='https://freecodecampba.org'
            text='freeCodeCampBA'
          />
          community.
        </p>
        <p className='paragraph-font'>
          You can
          <HighlightP text='read' />
          a bit
          <HighlightS text='more' />
          about
          <HighlightP text='me' />
          in the
          <Link
            className='highlight secondary'
            to='/about/'
          >
            {' about '}
          </Link>
          section.
        </p>
      </article>
      <img
        alt='Tools'
        className='tools-icon'
        // src={icon}
      />
      <article className='tools'>
        <p className='paragraph-font'>
          Some of the tools I've worked with:
        </p>
        <ul className='skills'>
          <li className='paragraph-font'>
            <HighlightP text='React.js' />
          </li>
          <li className='paragraph-font'>
            <HighlightS text='Express' />
          </li>
          <li className='paragraph-font'>
            <HighlightP text='JQuery' />
          </li>
          <li className='paragraph-font'>
            <HighlightS text='JavaScript' />
          </li>
          <li className='paragraph-font'>
            <HighlightP text='HTML' />
          </li>
          <li className='paragraph-font'>
            <HighlightS text='CSS' />
          </li>
          <li className='paragraph-font'>
            <HighlightP text='Git' />
          </li>
        </ul>
      </article>
    </section>
  </div>
)

export default IndexPage
