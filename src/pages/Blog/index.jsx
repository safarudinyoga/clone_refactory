import React from 'react'
// import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";

import './_blog.sass';
import Navbar from '../../components/Navbar';
import Text from '../../components/Text';
import Img from '../../components/Img';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Blog = props => {

  const history = useHistory();

  return (
    <div className='containerblog'>
      <Navbar active='blog' fill='#003547' />
      <div className='containersubnavbar'>
        <div className='subnavbar subnavbaractive'>
          <Text
            Tag='h3'
            className='medium t-white center-align margin0'
            text='Blog'
          />
        </div>
        <div className='subnavbar'>
          <Text
            Tag='h3'
            className='medium t-white center-align margin0'
            text='Engineering'
          />
        </div>
        <div className='subnavbar'>
          <Text
            Tag='h3'
            className='medium t-white center-align margin0'
            text='Profile'
          />
        </div>
        <div className='subnavbar'>
          <Text
            Tag='h3'
            className='medium t-white center-align margin0'
            text='Tutorial'
          />
        </div>
        <div className='subnavbar'>
          <Text
            Tag='h3'
            className='medium t-white center-align margin0'
            text='Tips & Trick'
          />
        </div>
        <div className='subnavbar'>
          <Text
            Tag='h3'
            className='medium t-white center-align margin0'
            text='Growth & Culture'
          />
        </div>
        <div className='subnavbar'>
          <Text
            Tag='h3'
            className='medium t-white center-align margin0'
            text='Newsroom'
          />
        </div>
        <div className='subnavbar'>
          <Text
            Tag='h3'
            className='medium t-white center-align margin0'
            text='Promo'
          />
        </div>
      </div>
      <section className='sectionfirst'>
        <div
          className='bloglist pointer'
          onClick={() => history.push('/detail-blog')}
        >
          <Img
            src='https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/063-Refactory-HDYBAP017.jpg?fit=768%2C402&#038;ssl=1'
            alt='blog'
            className='imgfirst'
          />
          <Text
            Tag='h3'
            className='medium t-gold left-align margin0 uppercase'
            text='growth & culture'
            style={{
              letterSpacing: '2.5px'
            }}
          />
          <Text
            Tag='h3'
            className='reg raleway left-align'
            text='How Did You Become A Programmer'
            style={{
              fontSize: '28px',
              color: '#373c44',
              margin: '15px 0'
            }}
          />
          <Text
            Tag='h3'
            className='reg left-align'
            text='Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020'
            style={{
              color: '#7a8189',
              lineHeight: '30px',
              margin: '0 0 15px'
            }}
          />
          <Text
            Tag='h3'
            className='semibold t-gold left-align margin0'
            text='Baca Artikel'
            style={{
              color: '#E89A01'
            }}
            onClick={() => history.push('/detail-blog')}
          />
          <div className='listarticle'>
            <div
              className='cardarticle'
              onClick={() => history.push('/detail-blog')}
            >
              <Img
                src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/061-Refactory-TempatYangAsyikUntukBelajarSecaraRemote011.jpg?fit=768%2C403&#038;ssl=1'
                alt='article'
                className='imgarticle'
              />
              <Text
                Tag='h3'
                className='medium t-gold left-align margin0 uppercase'
                text='tips & trick'
                style={{
                  letterSpacing: '2.5px'
                }}
              />
              <Text
                Tag='h3'
                className='reg raleway left-align'
                text='Tempat Yang Asyik Untuk Belajar Secara Remote'
                style={{
                  fontSize: '24px',
                  color: '#373c44',
                  margin: '15px 0'
                }}
              />
              <Text
                Tag='h3'
                className='reg left-align'
                text='Berpikir tentang tempat-tempat yang menarik untuk hangout bersama teman'
                style={{
                  color: '#7a8189',
                  lineHeight: '30px',
                  margin: '0 0 15px'
                }}
              />
              <Text
                Tag='h3'
                className='semibold t-gold left-align margin0'
                text='Baca Artikel'
                style={{
                  color: '#E89A01'
                }}
                onClick={() => history.push('/detail-blog')}
              />
            </div>
            <div
              className='cardarticle'
              onClick={() => history.push('/detail-blog')}
            >
              <Img
                src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/061-Refactory-TempatYangAsyikUntukBelajarSecaraRemote011.jpg?fit=768%2C403&#038;ssl=1'
                alt='article'
                className='imgarticle'
              />
              <Text
                Tag='h3'
                className='medium t-gold left-align margin0 uppercase'
                text='tips & trick'
                style={{
                  letterSpacing: '2.5px'
                }}
              />
              <Text
                Tag='h3'
                className='reg raleway left-align'
                text='Tempat Yang Asyik Untuk Belajar Secara Remote'
                style={{
                  fontSize: '24px',
                  color: '#373c44',
                  margin: '15px 0'
                }}
              />
              <Text
                Tag='h3'
                className='reg left-align'
                text='Berpikir tentang tempat-tempat yang menarik untuk hangout bersama teman'
                style={{
                  color: '#7a8189',
                  lineHeight: '30px',
                  margin: '0 0 15px'
                }}
              />
              <Text
                Tag='h3'
                className='semibold t-gold left-align margin0'
                text='Baca Artikel'
                style={{
                  color: '#E89A01'
                }}
                onClick={() => history.push('/detail-blog')}
              />
            </div>
            <div
              className='cardarticle'
              onClick={() => history.push('/detail-blog')}
            >
              <Img
                src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/061-Refactory-TempatYangAsyikUntukBelajarSecaraRemote011.jpg?fit=768%2C403&#038;ssl=1'
                alt='article'
                className='imgarticle'
              />
              <Text
                Tag='h3'
                className='medium t-gold left-align margin0 uppercase'
                text='tips & trick'
                style={{
                  letterSpacing: '2.5px'
                }}
              />
              <Text
                Tag='h3'
                className='reg raleway left-align'
                text='Tempat Yang Asyik Untuk Belajar Secara Remote'
                style={{
                  fontSize: '24px',
                  color: '#373c44',
                  margin: '15px 0'
                }}
              />
              <Text
                Tag='h3'
                className='reg left-align'
                text='Berpikir tentang tempat-tempat yang menarik untuk hangout bersama teman'
                style={{
                  color: '#7a8189',
                  lineHeight: '30px',
                  margin: '0 0 15px'
                }}
              />
              <Text
                Tag='h3'
                className='semibold t-gold left-align margin0'
                text='Baca Artikel'
                style={{
                  color: '#E89A01'
                }}
                onClick={() => history.push('/detail-blog')}
              />
            </div>
            <div
              className='cardarticle'
              onClick={() => history.push('/detail-blog')}
            >
              <Img
                src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/061-Refactory-TempatYangAsyikUntukBelajarSecaraRemote011.jpg?fit=768%2C403&#038;ssl=1'
                alt='article'
                className='imgarticle'
              />
              <Text
                Tag='h3'
                className='medium t-gold left-align margin0 uppercase'
                text='tips & trick'
                style={{
                  letterSpacing: '2.5px'
                }}
              />
              <Text
                Tag='h3'
                className='reg raleway left-align'
                text='Tempat Yang Asyik Untuk Belajar Secara Remote'
                style={{
                  fontSize: '24px',
                  color: '#373c44',
                  margin: '15px 0'
                }}
              />
              <Text
                Tag='h3'
                className='reg left-align'
                text='Berpikir tentang tempat-tempat yang menarik untuk hangout bersama teman'
                style={{
                  color: '#7a8189',
                  lineHeight: '30px',
                  margin: '0 0 15px'
                }}
              />
              <Text
                Tag='h3'
                className='semibold t-gold left-align margin0'
                text='Baca Artikel'
                style={{
                  color: '#E89A01'
                }}
                onClick={() => history.push('/detail-blog')}
              />
            </div>
          </div>
        </div>
        <div className='sidelist pointer'>
          <Text
            Tag='h3'
            className='medium t-gold left-align uppercase'
            text='hubungkan dengan kami'
            style={{
              margin: '0 0 25px',
              fontSize: '18px'
            }}
          />
          <Text
            Tag='h3'
            className='medium t-black left-align'
            text='Ikuti Refactory'
            style={{
              margin: '0 0 25px',
              fontSize: '28px'
            }}
          />
          <div className='ikutisosmed'>
            <div className='circle' />
            <Text
              Tag='h3'
              className='semibold t-black left-align'
              text='LinkedIn'
              style={{
                fontSize: '14px'
              }}
            />
          </div>
          <div className='ikutisosmed'>
            <div className='circle' />
            <Text
              Tag='h3'
              className='semibold t-black left-align'
              text='Facebook'
              style={{
                fontSize: '14px'
              }}
            />
          </div>
          <div className='ikutisosmed'>
            <div className='circle' />
            <Text
              Tag='h3'
              className='semibold t-black left-align'
              text='Instagram'
              style={{
                fontSize: '14px'
              }}
            />
          </div>
          <div className='ikutisosmed'>
            <div className='circle' />
            <Text
              Tag='h3'
              className='semibold t-black left-align'
              text='Youtube'
              style={{
                fontSize: '14px'
              }}
            />
          </div>
          <div className='artikelpopuler'>
            <Text
              Tag='h3'
              className='medium t-gold center-align uppercase'
              text='artikel populer'
              style={{
                margin: '0 0 25px',
                letterSpacing: '1px'
              }}
            />
            <Img
              src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/IMG_4371-scaled.jpg?fit=768%2C512&#038;ssl=1'
              alt='article'
              className='imgarticle'
              onClick={() => history.push('/detail-blog')}
            />
            <Text
              Tag='h4'
              className='medium t-gold left-align uppercase'
              text='Engineering'
              style={{
                margin: '0 0 25px',
              }}
            />
            <Text
              Tag='h3'
              className='reg t-black left-align'
              text='Bekerja Dengan Ticket: Bagian I'
              style={{
                fontSize: '18px',
                color: '#373c44',
                margin: '0 0 25px',
              }}
            />
            <Text
              Tag='h4'
              className='semibold t-gold left-align uppercase'
              text='baca artikel'
              style={{
                margin: '0 0 50px',
                letterSpacing: '2px'
              }}
              onClick={() => history.push('/detail-blog')}
            />
            <Img
              src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/IMG_4371-scaled.jpg?fit=768%2C512&#038;ssl=1'
              alt='article'
              className='imgarticle'
              onClick={() => history.push('/detail-blog')}
            />
            <Text
              Tag='h4'
              className='medium t-gold left-align uppercase'
              text='tips & trick'
              style={{
                margin: '0 0 25px',
              }}
            />
            <Text
              Tag='h3'
              className='reg t-black left-align'
              text='10 Hal Penting Dalam Memilih Online Bootcamp'
              style={{
                fontSize: '18px',
                color: '#373c44',
                margin: '0 0 25px',
              }}
            />
            <Text
              Tag='h4'
              className='semibold t-gold left-align uppercase'
              text='baca artikel'
              style={{
                margin: '0 0 50px',
                letterSpacing: '2px'
              }}
              onClick={() => history.push('/detail-blog')}
            />
            <Button
              type='button'
              className='buttonmore reg t-white center-align'
              text='Artikel Lain'
              onClick={() => history.push('/detail-blog')}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

Blog.propTypes = {

}

export default Blog
