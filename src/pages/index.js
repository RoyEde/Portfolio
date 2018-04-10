import React from 'react'
import { CustomLink, Highlight, Icon } from '../components/General'

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
        {/* <CustomPage
          className='page'
          content='Who?'
          mobile={props.mobile}
          page='About'
        /> */}
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
              content=' freeCodeCampBA '
              link={'https://freecodecampba.org'}
              mobile={props.mobile}
            />
            <Highlight mobile={props.mobile} text=' coorganizer ' />
            (
            <CustomLink
              content=" freeCodeCamp's "
              link={'https://freecodecamp.org'}
              mobile={props.mobile}
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
        <div className='description'>
          <p className='paragraph-font'>
            My current
            <Highlight mobile={props.mobile} text=' toolkit ' />
            includes these technologies:
          </p>
          <ul className='skills'>
            <li className='paragraph-font'>
              HTML
            </li>
            <li className='paragraph-font'>
              CSS
            </li>
            <li className='paragraph-font'>
              Vanilla Javascript
            </li>
            <li className='paragraph-font'>
              React.js
            </li>
            <li className='paragraph-font'>
              Git
            </li>
            <li className='paragraph-font'>
              Express
            </li>
            <li className='paragraph-font'>
              JQuery
            </li>
          </ul>
          <p className='paragraph-font'>
            You can view how I used them in some of my
            {/* <CustomPage
              className='page'
              content=' Projects '
              mobile={props.mobile}
              page='Projects'
            /> */}
            .
          </p>
        </div>
      </article>
    </section>
    <section>
      <h1 className='title-font'>
        {/* <CustomPage
          className='page'
          content='Contact'
          mobile={props.mobile}
          page='Contact'
        /> */}
      </h1>
      <article>

      </article>
    </section>
  </div>
)

export default IndexPage
