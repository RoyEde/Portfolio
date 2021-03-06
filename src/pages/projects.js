import React from 'react'
import {
  CustomLink,
  Highlight,
  ProjectHighlight,
  ProjectImg
} from '../components/General'
import {
  Article,
  Description,
  Page,
  Paragraph,
  Section,
  Separator,
  Skills,
  SkillsItem,
  Subtitle,
  Title
} from '../components/General/pages'

import nativeTicTacToe from '../img/Tic-Tac-Toe-Native.png'
import webTicTacToe from '../img/Tic-Tac-Toe-Web.png'
import webPortofolio from '../img/Portfolio.png'

export default ({...props}) => (
  <Page>
    <Section>
      <Article>
        <Title>
          <Highlight mobile={props.mobile} text='Projects' />
        </Title>
        <Subtitle>
          <Highlight mobile={props.mobile} text={`${props.mobile ? 'Tap' : 'Click'} `} />
          any
          <Highlight mobile={props.mobile} text=' image ' />
          to go to the
          <Highlight mobile={props.mobile} text=' project!' />
        </Subtitle>
      </Article>
    </Section>
    <Section>
      <Title>
        <Highlight mobile={props.mobile} text='React.js:' />
      </Title>
      <Article>
        <Subtitle>
          <Highlight mobile={props.mobile} text='Personal portfolio:' />
        </Subtitle>
        <Paragraph>
          A
          <CustomLink
            content=' freeCodeCamp '
            link={'https://freecodecamp.org'}
            mobile={props.mobile}
          />
          project.
        </Paragraph>
        <ProjectImg
          alt='Portfolio'
          src={webPortofolio}
        />
        <Description>
          <Paragraph>
            Ever heard of
            <Highlight mobile={props.mobile} text=' inception?' />
          </Paragraph>
        </Description>
        <Description>
          <Paragraph>
            This project uses
            <CustomLink
              content=' Gatsby.js.'
              link={'https://gatsbyjs.org'}
              mobile={props.mobile}
            />
          </Paragraph>
          <Paragraph>
            I bootstrapped this project with
            <Highlight mobile={props.mobile} text=' gatsby-cli ' />
            and used
            <Highlight mobile={props.mobile} text=' React.js ' />
            and
            <Highlight mobile={props.mobile} text=' styled-components.' />
          </Paragraph>
        </Description>
        <Description>
          <Paragraph>
            <Highlight mobile={props.mobile} text='The challenge?' />
          </Paragraph>
          <Paragraph>
            Organizing all the info and styling the page.
          </Paragraph>
        </Description>
        <Description>
          <Paragraph>
            <Highlight mobile={props.mobile} text='Used' />
          </Paragraph>
          <Skills>
            <SkillsItem>
              React.js
            </SkillsItem>
            <SkillsItem>
              Styled-components
            </SkillsItem>
            <SkillsItem>
              Javascript
            </SkillsItem>
            <SkillsItem>
              SASS
            </SkillsItem>
            <SkillsItem>
              CSS
            </SkillsItem>
          </Skills>
        </Description>
        <Paragraph>
          <CustomLink
            content='Click here to view the code!'
            link={'https://github.com/RoyEde/Portfolio'}
            mobile={props.mobile}
          />
        </Paragraph>
      </Article>
      <Separator />
      <Article>
        <Subtitle>
          <Highlight mobile={props.mobile} text='Tic-Tac-Toe:' />
        </Subtitle>
        <Paragraph>
          <CustomLink
            content=" freeCodeCamp's "
            link={'https://freecodecamp.org'}
            mobile={props.mobile}
          />
          Tic-Tac-Toe project.
        </Paragraph>
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
        <Description>
          <Paragraph>
            <Highlight mobile={props.mobile} text='The challenge?' />
          </Paragraph>
          <Paragraph>
            Programming the logic and maintaining everything simple.
          </Paragraph>
        </Description>
        <Description>
          <Paragraph>
            <Highlight mobile={props.mobile} text='Used' />
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
        </Description>
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

        <Subtitle>
          <Highlight mobile={props.mobile} text='Tic-Tac-Toe:' />
        </Subtitle>
        <Paragraph>
          A  mobile port of my
          <CustomLink
            content=' equivalent project made in React.js '
            link={'https://github.com/RoyEde/react_tic-tac-toe'}
            mobile={props.mobile}
          />
          .
        </Paragraph>
        <ProjectHighlight
          alt='React Tic-Tac-Toe'
          link='https://expo.io/@royede/ReactNative_Tic-Tac-Toe'
          src={nativeTicTacToe}
        />
        <Description>
          <Paragraph>
            I bootstrapped this project using
            <Highlight mobile={props.mobile} text=' create-react-native-app ' />
            and used
            <Highlight mobile={props.mobile} text=' Javascript ' />
            (logicwise) and
            <Highlight mobile={props.mobile} text=' React-native ' />
            (structurewise).
          </Paragraph>
        </Description>
        <Description>
          <Paragraph>
            <Highlight mobile={props.mobile} text='The challenge?' />
          </Paragraph>
          <Paragraph>
            Creating responsive styling.
          </Paragraph>
        </Description>
        <Description>
          <Paragraph>
            <Highlight mobile={props.mobile} text='Used' />
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
        </Description>
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
