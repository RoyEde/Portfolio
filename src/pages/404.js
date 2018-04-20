import React from 'react'
import {
  Highlight,
  InnerLink
} from '../components/General'
import {
  Article,
  Page,
  Section,
  Subtitle,
  Title
} from '../components/General/pages'

import kittens from './../img/kittens.png'

const NotFoundPage = ({...props}) => (
  <Page>
    <Section>
      <Title>
        <Highlight
          mobile={props.mobile}
          text='Not found!'
        />
      </Title>
      <Subtitle>
        Sorry, but it seems like there's nothing here to be seen... except for kittens:
      </Subtitle>
      <Article>
        <img style={{
          margin: '1vh',
          width: '60vw'
        }} src={kittens} />
        <Subtitle>
          Why not go
          <InnerLink
            content=' back?'
            mobile={props.mobile}
            to='/'
          />
        </Subtitle>
      </Article>
    </Section>
  </Page>
)

export default NotFoundPage
