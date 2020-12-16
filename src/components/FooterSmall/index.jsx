import React from 'react'
import PropTypes from 'prop-types'

import './_footersmall.sass'
import Text from '../Text'

const FooterSmall = props => {
  return (
    <div className='containerfootersmall'>
      <Text
        Tag='h3'
        className='light t-white left-align margin0'
        text='© Refactory 2020'
        style={{
          fontSize: '18px'
        }}
      />
      <Text
        Tag='h3'
        className='light t-white left-align margin0'
        text='Terms of Services Privacy Policy'
        style={{
          fontSize: '18px'
        }}
      />
    </div>
  )
}

FooterSmall.propTypes = {

}

export default FooterSmall
