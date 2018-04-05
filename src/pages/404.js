import React from 'react'
import { CustomPage, Highlight } from '../components/General'

const NotFoundPage = ({...props}) => (
  <div>
    <section className='introduction'>
      <h1 className='title-font'>
        <Highlight mobile={props.mobile} text='Not found!' />
      </h1>
      <h2 className='subtitle-font'>
        Sorry, but it seems like there's nothing here to be seen!
      </h2>
      <h2 className='subtitle-font not-found'>
        Why not go
        <CustomPage
          content={(
            <Highlight mobile={props.mobile} text=' back? ' />
          )}
          customClass={`custom-link ${props.mobile ? 'mobile' : 'common'}`}
          page='Home'
        />
      </h2>
    </section>
  </div>
)

export default NotFoundPage
