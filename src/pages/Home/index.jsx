import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios';

import './_home.sass';

import Navbar from '../../components/Navbar'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Img from '../../components/Img';
import Footer from '../../components/Footer';

const Home = props => {

  const [data, setData] = useState([]);
  const [dataSeenOn, setDataSeenOn] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json',
      );

      const {data: {data}} = result

      setData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataSeenOn = async () => {
      const result = await axios(
        'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/seen_on.json',
      );

      const {data: {data}} = result

      setDataSeenOn(data);
    };

    fetchDataSeenOn();
  }, []);

  return (
    <div className='containerhome'>
      <section className='containeroverlay'>
        <Navbar active='home'/>
        <div className='overlay' />
        <div className='content'>
          <div className='title'>
            <Text
              Tag='h1'
              className='semibold raleway t-white left-align margin0'
              text='Empowering'
            />
            <Text
              Tag='h1'
              className='semibold raleway t-gold left-align'
              text='People'
              style={{
                margin: '0 0 0 5px',
                color: '#e48800'
              }}
            />
          </div>
          <Text
            Tag='h1'
            className='semibold raleway t-white left-align margin0'
            text='Through Programming'
            style={{padding: "0 80px"}}
          />
          <Text
            Tag='h3'
            className='reg t-white left-align'
            text='Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa course maupun custom training yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.'
            style={{
              padding: '0 80px',
              width: '65%',
              lineHeight: '3rem',
              margin: '20px 0'
            }}
          />
          <div className='wrapperbutton'>
            <Button
              type='button'
              className='button1 medium t-white center-align'
              text='Temukan Solusi Anda'
            />
            <Button
              type='button'
              className='button2 medium t-white center-align'
              text='Tingkatkan Skill Anda'
            />
          </div>
          <Text
            Tag='h3'
            className='uppercase reg t-white center-align'
            text='PARTNER EKSKLUSIF KAMI'
            style={{
              letterSpacing: '2px',
              margin: '100px auto 0'
            }}
          />
          <div className='wrapperpartner'>
            {data.map(res =>
              <div className='wrappericon' key={res.id}>
                <Img
                  src={res.photo_url}
                  alt={res.name}
                  className='img'
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className='containercontent'>
        <Text
          Tag='h2'
          className='semibold t-black center-align'
          text='Apa Yang Refactory Dapat Bantu?'
        />
        <div className='content'>
          <div className='firstcontent'>
            <Img
              src='https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1'
              alt='content'
              className='icon'
            />
            <div className='titlecontent'>
              <Text
                Tag='h2'
                className='raleway t-black semibold center-align'
                text='Memperkuat Tim'
                style={{
                  fontSize: '28px'
                }}
              />
              <Text
                Tag='h2'
                className='raleway t-black italic semibold center-align'
                text='Engineer'
                style={{
                  margin: '0 5px',
                  fontSize: '28px '
                }}
              />
              <Text
                Tag='h2'
                className='raleway t-black semibold center-align'
                text='Anda'
                style={{
                  fontSize: '28px'
                }}
              />
            </div>
            <Text
              Tag='h3'
              className='reg t-black center-align'
              text='Bisnis di jaman modern membutuhkan keterampilan pengembangan terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan course dan juga dapat menyediakan tim yang menangani kebutuhan digital Anda.'
              style={{
                color: 'rgba(11, 22, 43, 0.6)',
                maxWidth: '465px',
                margin: '0 auto',
                lineHeight: '30px'
              }}
            />
          </div>
          <div className='secondcontent'>
          <Img
              src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?fit=28%2C48&ssl=1'
              alt='content'
              className='icon'
            />
            <div className='titlecontent'>
              <Text
                Tag='h2'
                className='raleway t-black semibold center-align'
                text='Wujudkan'
                style={{
                  fontSize: '28px'
                }}
              />
              <Text
                Tag='h2'
                className='raleway t-black italic semibold center-align'
                text='Software'
                style={{
                  margin: '0 5px',
                  fontSize: '28px '
                }}
              />
              <Text
                Tag='h2'
                className='raleway t-black semibold center-align'
                text='Impian Anda'
                style={{
                  fontSize: '28px'
                }}
              />
            </div>
            <Text
              Tag='h3'
              className='reg t-black center-align'
              text='Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk.'
              style={{
                margin: '0 auto',
                color: 'rgba(11, 22, 43, 0.6)',
                maxWidth: '465px',
                lineHeight: '30px'
              }}
            />
          </div>
        </div>
      </section>
      <section className='containerinsight'>
        <Text
          Tag='h3'
          className='reg t-black center-align raleway uppercase'
          text='INSIGHT TERBARU'
          style={{
            letterSpacing: '2px',
            fontSize: '18px',
            margin: '0 auto',
            color: 'rgba(11, 22, 43, 0.6)'
          }}
        />
        <Text
          Tag='h3'
          className='bold t-black center-align raleway'
          text='Knowledge Sharing'
          style={{
            fontSize: '28px',
            margin: '20px auto',
            color: '#0B162B'
          }}
        />
      </section>
      <div className='containerlihatsemua'>
        <Text
          Tag='h3'
          className='reg t-black center-align raleway'
          text='Lihat Semua'
          style={{
            fontSize: '18px',
            color: '#007BFF'
          }}
        />
      </div>
      <section className='containerseen'>
        <Text
          Tag='h2'
          className='raleway bold t-black center-align uppercase'
          text='as seen on'
          style={{
            margin: '0 auto 50px',
            color: '#0B162B',
            letterSpacing: '2px'
          }}
        />
        <div className='wrapperseen'>
          {dataSeenOn.map(res =>
            <div className='wrapper' key={res.id}>
              <Img
                src={res.photo_url}
                alt={res.name}
                className='img'
              />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}

Home.propTypes = {

}

export default Home
