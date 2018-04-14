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
      <Article>
        <Title>
          <Highlight mobile={props.mobile} text='About' />
        </Title>
      </Article>
    </Section>
    <Section>
      <Icon alt='Icon' link={'https://github.com/RoyEde'} mobile={props.mobile} src={icon} />
      <Subtitle>
        <Highlight mobile={props.mobile} text='Bio:' />
      </Subtitle>
      <Article>
        <Paragraph>
          <Highlight mobile={props.mobile} text='Hello!' />
        </Paragraph>
        <Paragraph>
          My name is
          <Highlight mobile={props.mobile} text=' Roy Eden, ' />
          I'm an
          <Highlight mobile={props.mobile} text=' Information Systems Engineering ' />
          student from
          <Highlight mobile={props.mobile} text=' Buenos Aires, ' />
          Argentina.
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          I began programming in late 2015.
        </Paragraph>
        <Paragraph>
          Today I help to coorganize
          <CustomLink
            content=' freeCodeCamp '
            link={'https://freecodecamp.org'}
            mobile={props.mobile}
          />
          meetups with the
          <CustomLink
            content=' freeCodeCampBA '
            link={'https://freecodecampba.org'}
            mobile={props.mobile}
          />
          community (which I joined in 2016).
        </Paragraph>
        <Paragraph>
          <Highlight mobile={props.mobile} text=' I love that, ' />
          because
          <Highlight mobile={props.mobile} text=" that's where I started learning " />
          most of the stuff I currently use and met some of the nicest people ever!
        </Paragraph>
        <Paragraph>
          It's also great to
          <Highlight mobile={props.mobile} text=' give back to the community ' />
          because it helped me grow so much:
        </Paragraph>
        <Paragraph>
          I'm now able to
          <Highlight mobile={props.mobile} text=' help other people starting out on their journey ' />
          or learning new things every now and then!
        </Paragraph>
      </Article>
    </Section>
    <Section>
      <Subtitle>
        <Highlight mobile={props.mobile} text='Technologies:' />
      </Subtitle>
      <Article>
        <Paragraph>
          I've used this
          <Highlight mobile={props.mobile} text=' technologies: ' />
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
          Here I leave some
          <InnerLink
            content=' Projects '
            mobile={props.mobile}
            to='Projects'
          />
          so you can check them out.
        </Paragraph>
      </Article>
    </Section>
    <Section>
      <Subtitle>
        <Highlight mobile={props.mobile} text='Contributions:' />
      </Subtitle>
      <Article>
        <Paragraph>
          I've made some contributions to some
          <Highlight mobile={props.mobile} text=' open source projects: ' />
        </Paragraph>
        <Skills>
          <SkillsItem>
            <CustomLink
              content="freeCodeCampBA's "
              link={'https://freecodecampba.org'}
              mobile={props.mobile}
            />
            new website (not up yet).
          </SkillsItem>
          <SkillsItem>
            <CustomLink
              content='Gatsby.js '
              link={'https://gatsbyjs.org'}
              mobile={props.mobile}
            />
            (documentation translation from english to spanish).
          </SkillsItem>
        </Skills>
      </Article>
    </Section>
    <Section>
      <Subtitle>
        <Highlight mobile={props.mobile} text='Other:' />
      </Subtitle>
      <Article>
        <Paragraph>
          I'm also a
          <Highlight mobile={props.mobile} text=' musician, ' />
          you can check some of my music
          <CustomLink
            content=' here.'
            link={'https://www.instagram.com/royeden_public/'}
            mobile={props.mobile}
          />
        </Paragraph>
      </Article>
    </Section>
  </Page>
)
