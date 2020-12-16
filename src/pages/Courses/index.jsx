import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios';
// import PropTypes from 'prop-types'

import './_courses.sass';

import Navbar from '../../components/Navbar'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Img from '../../components/Img';
import Footer from '../../components/Footer';

const Courses = props => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json',
      );

      const {data: {data}} = result

      setData(data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className='containercourses'>
      <section className='containeroverlay'>
        <Navbar active='courses'/>
        <div className='overlay' />
        <div className='content'>
          <div className='title'>
            <Text
              Tag='h1'
              className='raleway reg t-white center-align margin0'
              text='Tingkatkan'
              style={{
                fontSize: '40px',
                lineHeight: '50px'
              }}
            />
            <Text
              Tag='h1'
              className='raleway bold t-gold center-align'
              text='skill pemrograman'
              style={{
                fontSize: '40px',
                lineHeight: '50px',
                margin: '0 0 0 8px'
              }}
            />
          </div>
          <Text
            Tag='h1'
            className='raleway reg t-white center-align'
            text='kapan pun, dimana pun.'
            style={{
              margin: '0 auto',
              fontSize: '40px',
              lineHeight: '50px',
            }}
          />
          <Text
            Tag='h3'
            className='reg center-align'
            text='We’re a brand of passionate software engineers and educators with an engaging curriculum backed by real-world software projects ready to boost your career.'
            style={{
              margin: '20px auto 50px',
              color: '#EFEFEF',
              lineHeight: '3rem',
              width: '47%'
            }}
          />
          <div className='wrapperbutton'>
            <Button
              type='button'
              className='button1 t-white reg center-align'
              text='Masuk & Memulai Belajar'
            />
            <Button
              type='button'
              className='button2 t-white reg center-align'
              text='Daftar Sekarang'
            />
          </div>
        </div>
      </section>
      <section className='sectiontwo'>
        <div className='contentfirst'>
          <Text
            Tag='h3'
            className='raleway reg t-black left-align margin0'
            text='Bagaimana Refactory'
            style={{
              fontSize: '28px',
              color: '#0B162B',
              lineHeight: '40px'
            }}
          />
          <Text
            Tag='h3'
            className='raleway reg t-black left-align margin0'
            text='Course membantu'
            style={{
              fontSize: '28px',
              color: '#0B162B',
              lineHeight: '40px'
            }}
          />
          <Text
            Tag='h3'
            className='raleway semibold t-gold left-align margin0'
            text='meningkatkan skill'
            style={{
              fontSize: '28px',
              lineHeight: '40px'
            }}
          />
          <Text
            Tag='h3'
            className='raleway reg t-black left-align margin0'
            text='Anda.'
            style={{
              fontSize: '28px',
              color: '#0B162B',
              lineHeight: '40px'
            }}
          />
          <Button
            type='button'
            className='button1 medium t-white center-align'
            text='Pelajari Lebih'
          />
        </div>
        <div className='contentsecond'>
          <Img
            src='https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png?fit=839%2C481&ssl=1'
            alt='image'
            className='img'
          />
        </div>
      </section>
      <section className='sectionthree'>
        <div className='content'>
          <div className='contenttextarea'>
            <Text
              Tag='h3'
              className='raleway bold t-black left-align'
              text='Kursus pemrograman untuk semua orang tanpa terkecuali'
              style={{
                fontSize: '26px',
                color: '#0B162B',
                lineHeight: '30px',
                margin: '0 0 30px'
              }}
            />
            <Text
              Tag='h3'
              className='raleway reg t-black left-align'
              text='Refactory Course dirancang untuk memudahkan setiap orang mampu meningkatkan keahlian dalam software engineering tanpa dibatasi oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun usia.'
              style={{
                width: '90%',
                fontSize: '14px',
                color: 'rgba(11, 22, 43, 0.6)',
                lineHeight: '30px',
                margin: '0 0 20px'
              }}
            />
            <Text
              Tag='h3'
              className='raleway reg t-black left-align'
              text='Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi keahlian yang sudah diperoleh dalam studi sehingga dapat membuka kesempatan tak terbatas pada karir software engineering.'
              style={{
                width: '90%',
                fontSize: '14px',
                color: 'rgba(11, 22, 43, 0.6)',
                lineHeight: '30px',
                margin: '0 0 20px'
              }}
            />
            <Text
              Tag='h3'
              className='raleway reg t-black left-align'
              text='Bagi karyawan atau tenaga profesional, Refactory Course dapat meningkatkan keahlian software engineer dalam menunjang menyelesaikan tugas pekerjaannya tanpa khawatir dengan keterbatasan waktu.'
              style={{
                width: '90%',
                fontSize: '14px',
                color: 'rgba(11, 22, 43, 0.6)',
                lineHeight: '30px',
                margin: '0 0 20px'
              }}
            />
            <Text
              Tag='h3'
              className='raleway reg t-black left-align'
              text='Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk meningkatkan keahlian sehingga mampu berkarya dan mendapat keuntungan karir tanpa khawatir mahalnya belajar.'
              style={{
                width: '90%',
                fontSize: '14px',
                color: 'rgba(11, 22, 43, 0.6)',
                lineHeight: '30px',
                margin: '0 0 20px'
              }}
            />
            <Button
              type='button'
              className='button1 reg t-white center-align'
              text='Daftar Sekarang'
            />
          </div>
          <div className='contentpicture'>
            <Img
              src='https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/IMG_1152-1.jpg?fit=690%2C800&ssl=1'
              alt='image'
              className='img'
            />
          </div>
        </div>
      </section>
      <section className='sectionfour'>
        <Text
          Tag='h3'
          className='uppercase raleway reg center-align'
          text='meet our graduates'
          style={{
            margin: "0 auto",
            color: 'rgba(11, 22, 43, 0.6)',
            letterSpacing: '2px'
          }}
        />
        <Text
          Tag='h3'
          className='raleway bold center-align'
          text='Review'
          style={{
            fontSize: '38px',
            margin: "30px auto",
            color: '#0B162B',
            lineHeight: '42px',
            letterSpacing: '2px'
          }}
        />
        <div className='report'>
          <Text
            Tag='h3'
            className='raleway reg center-align margin0'
            text='Read what our alumni said on'
            style={{
              fontSize: '24px',
              color: '#0B162B',
              lineHeight: '30px',
            }}
          />
          <Text
            Tag='h3'
            className='raleway bold center-align'
            text='Course Report'
            style={{
              fontSize: '24px',
              margin: "0 0 0 8px",
              color: '#0B162B',
              lineHeight: '30px',
            }}
          />
        </div>
        <div className='contentcard'>
          {data.map(res =>
          <div className='card' key={res.id}>
            <Img
              src={res.user.photo_url}
              alt='alumni'
              className='img'
            />
            <Text
              Tag='h2'
              className='raleway uppercase t-black reg left-align'
              text={res.user.name}
              style={{
                fontSize: '28px',
                margin: '0 0 20px'
              }}
            />
            <Text
              Tag='h2'
              className='medium left-align'
              text={res.user.from}
              style={{
                color: '#999999',
                fontSize: '18px',
                margin: '0'
              }}
            />
            <div className='star'>
              {[...Array(res.star)].map((x, i) => i).map(res =>
                <Fragment key={res}>
                  <Text
                    Tag='h2'
                    className='medium left-align margin0'
                    text='★'
                    style={{
                      color: '#E48800',
                      fontSize: '40px',
                    }}
                  />
                </Fragment>
              )}
            </div>
            <Text
              Tag='h2'
              className='bold left-align'
              text={res.title}
              style={{
                color: 'rgba(11, 22, 43, 0.8)',
                fontSize: '18px',
                margin: '0 0 20px'
              }}
            />
            <Text
              Tag='h3'
              className='light left-align'
              text={res.description}
              style={{
                color: '#0B162B',
                margin: '0 0 20px',
                lineHeight: '30px'
              }}
            />
          </div>
          )}
        </div>
      </section>
      <section className='sectionfive'>
        <Text
          Tag='h3'
          className='raleway reg t-white left-align margin0'
          text='Ready to start Learning?'
          style={{
            fontSize: '24px'
          }}
        />
        <Button
          type='button'
          className='button1 reg t-white center-align'
          text='Daftar Sekarang'
        />
      </section>
      <section className='sectionsix'>
        <Text
          Tag='h3'
          className='raleway semibold t-gold uppercase center-align'
          text='Langkah Mudah'
          style={{
            margin: '0 auto 20px',
            letterSpacing: '2px'
          }}
        />
        <Text
          Tag='h3'
          className='raleway bold t-black  center-align'
          text='Memulai Belajar di
          Refactory Course'
          style={{
            width: '20%',
            fontSize: '24px',
            margin: '0 auto 20px',
          }}
        />
        <Img
          src='https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame-3-1.png?fit=1024%2C199&ssl=1'
          alt='process'
          className='img'
        />
        <Button
          type='button'
          className='button1 reg t-white center-align'
          text='Pelajari Lebih'
        />
      </section>
      <Footer />
    </div>
  )
}

Courses.propTypes = {

}

export default Courses
