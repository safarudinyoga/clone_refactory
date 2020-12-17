import React, { useEffect, useState, Fragment } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios';


import './_detailcourses.sass';

import Text from '../../components/Text'
import Img from '../../components/Img'
import Button from '../../components/Button'
import NavbarSmall from '../../components/NavbarSmall'
import FooterSmall from '../../components/FooterSmall'

const DetailCourses = props => {

  const [data, setData] = useState([]);
  const dataCourse = [
    {
      "id": 1,
      "section": "HTML Dasar",
      "data": [
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        },
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        },
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        }
      ]
    },
    {
      "id": 1,
      "section": "HTML Dasar",
      "data": [
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        },
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        },
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        }
      ]
    },
    {
      "id": 1,
      "section": "HTML Dasar",
      "data": [
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        },
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        },
        {
          "id": 1,
          "title": "Pengenalan HTML",
          "url": "https://course.refactory.id/p/html-css-introduction",
          "time-in": "5:45"
        }
      ]
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json',
      );

      const {data} = result

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className='containerdetailcourses'>
      <div className='wrappercontent'>
        <NavbarSmall />
        <section className='sectioncarousel'>
          <div className='content'>
            <Text
              Tag='h3'
              className='bold raleway t-white center-align margin0'
              text='HTML & CSS Introduction'
              style={{
                letterSpacing: '-1px',
                fontSize: '4.8rem',
                margin: '0 0 35px'
              }}
            />
            <div className='line'>
              <Text
                Tag='h3'
                className='bold raleway t-white center-align margin0'
                text='HTML'
                style={{
                  fontSize: '1.6rem',
                }}
              />
              <Text
                Tag='h3'
                className='reg raleway t-white center-align'
                text='dan'
                style={{
                  letterSpacing: '-1px',
                  fontSize: '1.6rem',
                  margin: '0 4px'
                }}
              />
              <Text
                Tag='h3'
                className='bold raleway t-white center-align margin0'
                text='CSS'
                style={{
                  fontSize: '1.6rem',
                }}
              />
              <Text
                Tag='h3'
                className='reg raleway t-white center-align'
                text='adalah materi dasar untuk pengembangan web. Setiap web'
                style={{
                  letterSpacing: '-1px',
                  fontSize: '1.6rem',
                  margin: '0 0 0 4px'
                }}
              />
            </div>
              <Text
                Tag='h3'
                className='reg raleway t-white center-align margin0'
                text='developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS.'
                style={{
                  letterSpacing: '-1px',
                  fontSize: '1.6rem',
                  lineHeight: '2.4rem'
                }}
              />
              <Button
                type='button'
                className='button1 bold t-white center-align'
                text='Mulai Belajar'
              />
          </div>
        </section>
        <section className='sectiontwo'>
          <Text
            Tag='h3'
            className='reg raleway t-white center-align '
            text='Tentang Course'
            style={{
              color: '#36414D',
              letterSpacing: '-1px',
              fontSize: '2.4rem',
              lineHeight: '2.4rem',
              margin: '0 0 50px'
            }}
          />
          <Text
            Tag='h3'
            className='reg raleway t-white center-align margin0'
            text='Hai Refactorian, pada course ini kita akan belajar mengenal apa itu HTML dan CSS, mengenal dasar-dasarnya, mengetahui bagaimana cara menggunakannya dan lain-lain. simak videonya dan jangan lupa untuk praktikan.'
            style={{
              maxWidth: '590px',
              color: '#36414D',
              fontSize: '1.6rem',
              lineHeight: '2.4rem',
            }}
          />
        </section>
        <section className='sectionthree'>
          <Text
            Tag='h3'
            className='reg raleway center-align'
            text='Tentang Course'
            style={{
              color: '#36414D',
              fontSize: '2.4rem',
              margin: '0 0 30px'
            }}
          />
          {dataCourse.map((res, i) =>
            <div className='contentsection' key={i}>
              <div className='headertitle'>
                <Text
                  Tag='h3'
                  className='bold raleway center-align margin0'
                  text={res.section}
                  style={{
                    color: '#2b3636',
                    fontSize: '1.6rem',
                  }}
                />
              </div>
              {res.data.map((respon, index) =>
                <div className='headercontent pointer' key={index}>
                  <Img
                    src='https://fedora.teachablecdn.com/assets/icons/youtube-brands-43c32617529d416391eed20028644a3045ecdb646146cc146bc8a6250fec979d.svg'
                    alt='youtube'
                    className='iconyoutube'
                  />
                  <Text
                    Tag='h3'
                    className='reg raleway t-white center-align margin0'
                    text={respon.title}
                    style={{
                      color: '#2b3636',
                      fontSize: '1.6rem',
                      lineHeight: '2.4rem',
                    }}
                  />
                  <Text
                    Tag='h3'
                    className='reg raleway t-white center-align'
                    text={`(${respon['time-in']})`}
                    style={{
                      color: '#2b3636',
                      margin: '0 0 0 5px',
                      fontSize: '1.6rem',
                      lineHeight: '2.4rem',
                    }}
                  />
                  <Button
                    type='button'
                    className='buttonstart bold t-white uppercase center-align'
                    text='start'
                  />
                </div>
              )}
            </div>
          )}
        </section>
        <section className='sectionfour'>
          <Img
            src='https://cdn.fs.teachablecdn.com/KeagvIv6QC6TQCzyKzrL'
            alt='htmlicon'
            className='iconhtml'
          />
          <div className='contenthtml'>
            <Text
              Tag='h3'
              className='bold raleway t-black left-align'
              text='Alasan Mempelajari HTML dan CSS'
              style={{
                color: '#36414D',
                margin: '0 0 30px',
                fontSize: '2.4rem'
              }}
            />
            <Text
              Tag='h3'
              className='reg raleway t-black left-align margin0'
              text='Setiap web developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS, dari mempelajari HTML dan CSS dalam course ini harapannya peserta akan lebih paham bagaimana konsep dasar pengembangan website.'
              style={{
                color: '#36414D',
                fontSize: '1.6rem'
              }}
            />
          </div>
        </section>
        <FooterSmall />
      </div>
    </div>
  )
}

DetailCourses.propTypes = {

}

export default DetailCourses
