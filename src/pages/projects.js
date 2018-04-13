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

import nativeTicTacToe from '../img/Tic-Tac-Toe-Native.png'
import webTicTacToe from '../img/Tic-Tac-Toe-Web.png'

export default ({...props}) => (
  <Page>
    <Section>
      <Article>
        <Title>
          <Highlight mobile={props.mobile} text='Projects' />
        </Title>
        <Subtitle>
          <Highlight mobile={props.mobile} text='Click ' />
          on any
          <Highlight mobile={props.mobile} text=' image ' />
          to take you to the
          <Highlight mobile={props.mobile} text=' project!' />
        </Subtitle>
      </Article>
    </Section>
    <Section>
      <Title>
        <Highlight mobile={props.mobile} text='React.js:' />
      </Title>
      <Article>
        <ProjectHighlight
          alt='React Tic-Tac-Toe'
          link='https://royede.github.io/react_tic-tac-toe/'
          src={webTicTacToe}
        />
        <Description>
          <Paragraph>
            I bootstrapped this project with
            <Highlight mobile={props.mobile} text=' create-react-app ' />
            and used
            <Highlight mobile={props.mobile} text=' Javascript ' />
            (logicwise) and
            <Highlight mobile={props.mobile} text=' React.js ' />
            (structurewise).
          </Paragraph>
          <Paragraph>
            It's based off React's introduction tutorial.
          </Paragraph>
        </Description>
        <Paragraph>
          This project uses:
        </Paragraph>
        <Skills>
          <SkillsItem>
            React.js
          </SkillsItem>
          <SkillsItem>
            Javascript
          </SkillsItem>
          <SkillsItem>
            CSS
          </SkillsItem>
        </Skills>
        <Paragraph>
          <CustomLink
            content='Click here to view the code!'
            link={'https://github.com/RoyEde/react_tic-tac-toe'}
            mobile={props.mobile}
          />
        </Paragraph>
      </Article>
    </Section>
    <Section>
      <Title>
        <Highlight mobile={props.mobile} text='React-Native:' />
      </Title>
      <Article>
        <ProjectHighlight
          alt='React Tic-Tac-Toe'
          link='https://expo.io/@royede/ReactNative_Tic-Tac-Toe'
          src={nativeTicTacToe}
        />
        <Description>
          <Paragraph>
            This project was a  mobile port of my
            <CustomLink
              content=' equivalent project made in React.js '
              link={'https://github.com/RoyEde/react_tic-tac-toe'}
              mobile={props.mobile}
            />
            .
          </Paragraph>
          <Paragraph>
            I bootstrapped this one using
            <Highlight mobile={props.mobile} text=' create-react-native-app ' />
            and used
            <Highlight mobile={props.mobile} text=' Javascript ' />
            (logicwise) and
            <Highlight mobile={props.mobile} text=' React-native ' />
            (structurewise).
          </Paragraph>
        </Description>
        <Paragraph>
          This project uses:
        </Paragraph>
        <Skills>
          <SkillsItem>
            React-native
          </SkillsItem>
          <SkillsItem>
            Javascript
          </SkillsItem>
          <SkillsItem>
            CSS-in-JS
          </SkillsItem>
        </Skills>
        <Paragraph>
          <CustomLink
            content='Click here to view the code!'
            link={'https://github.com/RoyEde/react-native_tic-tac-toe'}
            mobile={props.mobile}
          />
        </Paragraph>
      </Article>
    </Section>
  </Page>
)
