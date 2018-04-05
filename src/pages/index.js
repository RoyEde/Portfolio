import React from 'react'
import { CustomLink, CustomPage, Highlight, Icon } from '../components/General'

import icon from '../img/icon.png'

const IndexPage = ({...props}) => (
  <div className='page-container'>
    <section className='introduction'>
      <h1 className='title-font'>
        Hi
        <Highlight mobile={props.mobile} text=' people!' />
      </h1>
      <h1 className='title-font'>
        I'm
        <Highlight mobile={props.mobile} text=' Roy,' />
      </h1>
      <h2 className='subtitle-font'>
        Welcome to my
        <Highlight mobile={props.mobile} text=' portfolio!' />
      </h2>
    </section>
    <section>
      <h1 className='title-font'>
        <CustomPage
          content={(
            <Highlight mobile={props.mobile} text='Who?' />
          )}
          customClass={`custom-link ${props.mobile ? 'mobile' : 'common'}`}
          page='About'
        />
      </h1>
      <article>
        <Icon link={'https://github.com/RoyEde'} mobile={props.mobile} src={icon} />
        <h1 className='title-font'>
          <Highlight mobile={props.mobile} text='Roy Eden' />
        </h1>
        <div className='description'>
          <p className='paragraph-font'>
            An aspirant
            <Highlight mobile={props.mobile} text=' Frontend developer ' />
            from
            <Highlight mobile={props.mobile} text=' Buenos Aires, ' />
            Argentina.
          </p>
          <p className='paragraph-font'>
            A
            <CustomLink
              content={(
                <Highlight mobile={props.mobile} text=' freeCodeCampBA ' />
              )}
              link={'https://freecodecampba.org'}
              mobile={props.mobile}
              customClass={`custom-link ${props.mobile ? 'mobile' : 'common'}`}
            />
            <Highlight mobile={props.mobile} text=' coorganizer ' />
            (
            <CustomLink
              content={(
                <Highlight mobile={props.mobile} text=" freeCodeCamp's " />
              )}
              link={'https://freecodecamp.org'}
              mobile={props.mobile}
              customClass={`custom-link ${props.mobile ? 'mobile' : 'common'}`}
            />
            community meetup group here).
          </p>
        </div>
      </article>
    </section>
    <section>
      <h1 className='title-font'>
        <Highlight mobile={props.mobile} text='Tools' />
      </h1>
      <article>
        <p className='paragraph-font'>
          I mostly program in
          <Highlight mobile={props.mobile} text=' Javascript.' />
        </p>
      </article>
    </section>
  </div>
)

// <p className='paragraph-font'>
//   Some of the tools I've worked with:
// </p>
// <ul className='skills'>
//   <li className='paragraph-font'>
//     React.js
//   </li>
//   <li className='paragraph-font'>
//     Express
//   </li>
//   <li className='paragraph-font'>
//     JQuery
//   </li>
//   <li className='paragraph-font'>
//     JavaScript
//   </li>
//   <li className='paragraph-font'>
//     HTML
//   </li>
//   <li className='paragraph-font'>
//     CSS
//   </li>
//   <li className='paragraph-font'>
//     Git
//   </li>
// </ul>

export default IndexPage
