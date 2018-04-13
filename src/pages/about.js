import React from 'react'
import {
  CustomLink,
  Highlight,
  InnerLink,
  ProjectHighlight
} from '../components/General'
import {
  Article,
  Description,
  Page,
  Paragraph,
  Section,
  Skills,
  SkillsItem,
  Subtitle,
  Title
} from '../components/General/pages'

export default ({...props}) => (
  <Page>
    <Section>
      <Article>
        <Title>
          <Highlight mobile={props.mobile} text='About' />
        </Title>
      </Article>
    </Section>
  </Page>
)
