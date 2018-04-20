import React from 'react'
import {
  CustomLink,
  Highlight,
  Icon,
  InnerLink
} from '../components/General'
import {
  Article,
  Page,
  Paragraph,
  Section,
  Skills,
  SkillsItem,
  Subtitle,
  Title
} from '../components/General/pages'

import icon from '../img/icon.png'

export default ({...props}) => (
  <Page>
    <Section>
      <Title>
        Hi
        <Highlight
          mobile={props.mobile}
          progress={props.progress}
          text=' people!'
        />
      </Title>
      <Title>
        I'm
        <Highlight
          mobile={props.mobile}
          progress={props.progress}
          text=' Roy,'
        />
      </Title>
      <Subtitle>
        Welcome to my
        <Highlight
          mobile={props.mobile}
          progress={props.progress}
          text=' portfolio!'
        />
      </Subtitle>
    </Section>
    <Section>
      <Title>
        <InnerLink
          content='Who?'
          mobile={props.mobile}
          progress={props.progress}
          to='/About'
        />
      </Title>
      <Article>
        <Icon alt='Icon' link={'https://github.com/RoyEde'} mobile={props.mobile} src={icon} />
        <Title>
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text='Roy Eden'
          />
        </Title>
        <Paragraph>
          An aspirant
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text=' Frontend developer '
          />
          from
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text=' Buenos Aires, '
          />
          Argentina.
        </Paragraph>
        <Paragraph>
          A
          <CustomLink
            content=' freeCodeCampBA '
            link={'https://freecodecampba.org'}
            mobile={props.mobile}
            progress={props.progress}
          />
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text=' coorganizer '
          />
          (
          <CustomLink
            content=" freeCodeCamp's "
            link={'https://freecodecamp.org'}
            mobile={props.mobile}
            progress={props.progress}
          />
          community meetup group here).
        </Paragraph>
        <Paragraph>
          Also a
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text=' musician '
          />
          and
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text=' composer.'
          />
        </Paragraph>
      </Article>
    </Section>
    <Section>
      <Title>
        <Highlight
          mobile={props.mobile}
          progress={props.progress}
          text='Tools'
        />
      </Title>
      <Article>
        <Paragraph>
          My current
          <Highlight
            mobile={props.mobile}
            progress={props.progress}
            text=' toolkit '
          />
          includes these technologies:
        </Paragraph>
        <Skills>
          <SkillsItem>HTML</SkillsItem>
          <SkillsItem>CSS</SkillsItem>
          <SkillsItem>Vanilla Javascript</SkillsItem>
          <SkillsItem>React.js</SkillsItem>
          <SkillsItem>Git</SkillsItem>
          <SkillsItem>Express</SkillsItem>
          <SkillsItem>JQuery</SkillsItem>
        </Skills>
        <Paragraph>
          You can view how I used them in some of my
          <InnerLink
            content=' Projects '
            mobile={props.mobile}
            progress={props.progress}
            to='/Projects'
          />
          .
        </Paragraph>
      </Article>
    </Section>
    <Section>
      <Article>
        <Subtitle>
          Want to
          <InnerLink
            content=' get in touch?'
            mobile={props.mobile}
            progress={props.progress}
            to='/Contact'
          />
        </Subtitle>
      </Article>
      <Article />
    </Section>
  </Page>
)
