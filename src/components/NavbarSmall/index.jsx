import React from 'react'
import { useHistory } from "react-router-dom";
// import PropTypes from 'prop-types'

import Button from '../Button'
import Img from '../Img'
import Text from '../Text'

import './_navbarsmall.sass'

const Navbar = props => {

  const history = useHistory();

  return (
    <div className='containernavbarsmall'>
      <div className='containercontent'>
        <Img
          src='https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/SQaHwR3NQii4vEWEdBeg'
          alt='companylogo'
          className='companylogo pointer'
          onClick={() => history.push('/')}
        />
        <div className='wrappernavbar'>
          <div className='wrapperlink'>
            <Text
              Tag='h4'
              className='light t-white center-align margin0'
              text='Courses'
              style={{
                fontSize: '15px'
              }}
            />
          </div>
          <div className='wrapperlink'>
            <Text
              Tag='h4'
              className='light t-white center-align margin0'
              text='Roadmap'
              style={{
                fontSize: '15px'
              }}
            />
          </div>
          <div className='wrapperlink'>
            <Text
              Tag='h4'
              className='light t-white center-align margin0'
              text='Login'
              style={{
                fontSize: '15px'
              }}
            />
          </div>
          <div className='wrapperlink'>
            <Button
              type='button'
              className='button1 reg t-white center-align'
              text='Sign Up'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {

}

export default Navbar
