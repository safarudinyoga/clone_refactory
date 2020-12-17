import React from 'react'
// import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";

import './_navbar.sass'

import Img from '../Img'
import Text from '../Text'

const Navbar = ({
  active = '',
  fill = ''
}) => {

  const history = useHistory();

  return (
    <div className='containernavbar' style={{background: fill}}>
      <Img
        src="https://refactory.id/wp-content/uploads/2020/01/refactory-hd-125x52.png"
        alt="companylogo"
        className="companylogo pointer"
        onClick={() => history.push('/')}
      />
      <div className='wrappernavbar'>
        <div
          className='wrapperlink pointer'
          onClick={() => history.push('/')}
        >
          <Text
            Tag='h3'
            className={ active === 'home' ? 'semibold t-gold center-align margin0' : 'semibold t-white center-align margin0'}
            text='Home'
          />
        </div>
        <div className='wrapperlink pointer' onClick={() => history.push('/courses')}>
          <Text
            Tag='h3'
            className={ active === 'courses' ? 'semibold t-gold center-align margin0' : 'semibold t-white center-align margin0'}
            text='Courses'
          />
        </div>
        <div className='wrapperlink pointer' onClick={() => history.push('/list-courses')}>
          <Text
            Tag='h3'
            className={ active === 'list-courses' ? 'semibold t-gold center-align margin0' : 'semibold t-white center-align margin0'}
            text='List Courses'
          />
        </div>
        <div className='wrapperlink pointer' onClick={() => history.push('/blog')}>
          <Text
            Tag='h3'
            className={ active === 'blog' ? 'semibold t-gold center-align margin0' : 'semibold t-white center-align margin0'}
            text='Blog'
          />
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {

}

Navbar.defaultProps = {

}

export default Navbar
