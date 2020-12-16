import React from 'react'
// import PropTypes from 'prop-types'

import './_footer.sass'

import Text from '../Text'

const Footer = props => {
  return (
    <div className='containerfooter'>
      <div className='wrapperfooter'>
        <div className='sitemap'>
          <Text
            Tag='h3'
            className='raleway pointer-none semibold t-grey left-align'
            text='Site Map'
            style={{margin: '0 0 16px'}}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Home'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Bootcamp'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Software Development'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Courses'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Custom Trainings'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Blog'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
        </div>
        <div className='company'>
          <Text
            Tag='h3'
            className='raleway pointer-none semibold t-grey left-align'
            text='Company'
            style={{margin: '0 0 16px'}}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='About Us'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <div className='career'>
            <Text
              Tag='h4'
              className='raleway reg t-grey left-align margin0'
              text='Career'
              style={{
                fontSize: '14px',
                lineHeight: '26px',
              }}
            />
            <div className='hiring'>
              <Text
                Tag='h4'
                className='raleway reg t-black left-align margin0'
                text="We're Hiring"
                style={{
                  fontSize: '14px',
                  lineHeight: '26px',
                  letterSpacing: '1px'
                }}
              />
            </div>
          </div>
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Press Kit'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='FAQ'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
        </div>
        <div className='connect'>
          <Text
            Tag='h3'
            className='raleway pointer-none semibold t-grey left-align'
            text='Connect'
            style={{margin: '0 0 16px'}}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Facebook'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Instagram'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='Youtube'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
          <Text
            Tag='h4'
            className='raleway reg t-grey left-align margin0'
            text='LinkedIn'
            style={{
              fontSize: '14px',
              lineHeight: '26px'
            }}
          />
        </div>
        <div className='socialmedia'>
          <div className='wrappericon'>
            <div className='sosmedicon' />
            <div className='sosmedicon' />
            <div className='sosmedicon' />
            <div className='sosmedicon' />
          </div>
          <div className='wrapperaddress'>
            <div className='companyaddress'>
              <Text
                Tag='h3'
                className='raleway pointer-none semibold t-grey left-align'
                text='Company Address'
                style={{margin: '0 0 16px'}}
              />
              <Text
                Tag='h4'
                className='raleway reg t-grey left-align margin0'
                text='Jln. Palagan Tentara Pelajar'
                style={{
                  fontSize: '14px',
                  lineHeight: '26px'
                }}
              />
              <Text
                Tag='h4'
                className='raleway reg t-grey left-align margin0'
                text='Km. 9,8'
                style={{
                  fontSize: '14px',
                  lineHeight: '26px'
                }}
              />
              <Text
                Tag='h4'
                className='raleway reg t-grey left-align margin0'
                text='Ngaglik, Kab. Sleman'
                style={{
                  fontSize: '14px',
                  lineHeight: '26px'
                }}
              />
              <Text
                Tag='h4'
                className='raleway reg t-grey left-align margin0'
                text='DI Yogyakarta 55581'
                style={{
                  fontSize: '14px',
                  lineHeight: '26px'
                }}
              />
            </div>
            <div className='contact'>
              <Text
                Tag='h3'
                className='raleway pointer-none semibold t-grey left-align'
                text='Contact'
                style={{margin: '0 0 16px'}}
              />
              <Text
                Tag='h4'
                className='raleway reg t-grey left-align margin0'
                text='marketing@refactory.id'
                style={{
                  fontSize: '14px',
                  lineHeight: '26px'
                }}
              />
              <Text
                Tag='h4'
                className='raleway reg t-grey left-align'
                text='+62 8122 8203 381'
                style={{
                  fontSize: '14px',
                  lineHeight: '26px',
                  margin: '0 0 25px'
                }}
              />
              <Text
                Tag='h4'
                className='raleway reg t-grey left-align margin0'
                text='Dewita: 0857 2582 7222'
                style={{
                  fontSize: '14px',
                  lineHeight: '26px'
                }}
              />
              <Text
                Tag='h4'
                className='raleway reg t-grey left-align margin0'
                text='Septin: 0878 2080 0206'
                style={{
                  fontSize: '14px',
                  lineHeight: '26px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='wrapperprivacy'>
        <Text
          Tag='h4'
          className='reg t-white left-align margin0'
          text='© 2020 Refactory - All Rights Reserved - Terms of Services / Privacy Policy'
          style={{
            fontSize: '14px',
          }}
        />
      </div>
    </div>
  )
}

Footer.propTypes = {

}

export default Footer
