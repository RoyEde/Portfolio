import React from 'react'
import {
  Highlight,
  MailForm
} from '../components/General'
import {
  Article,
  Page,
  Section,
  Subtitle,
  Title
} from '../components/General/pages'

export default ({...props}) => (
  <Page>
    <Section>
      <Article>
        <Title>
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text='Contact'
          />
        </Title>
      </Article>
    </Section>
    <Section>
      <Article>
        <Subtitle>
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text='Get in touch with me!'
          />
        </Subtitle>
      </Article>
      <MailForm mobile={props.mobile} />
    </Section>
  </Page>
)
