import React from 'react'
// import PropTypes from 'prop-types'

import './_detailblog.sass';

import Navbar from '../../components/Navbar';
import Text from '../../components/Text';
import Img from '../../components/Img';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const DetailBlog = props => {
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
        <div className='bloglist'>
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
            text='How Did You Become A Programmer?'
            style={{
              fontSize: '28px',
              color: '#373c44',
              margin: '20px 0'
            }}
          />
          <div className='by'>
            <Text
              Tag='h3'
              className='reg raleway left-align'
              text='By Isna | August 4, 2020'
              style={{
                fontSize: '14px',
                color: '#666666',
                margin: '0 0 50px'
              }}
            />
          </div>
          <Text
            Tag='h3'
            className='reg left-align'
            text='Setiap kali mendengar kata “pemrograman”, kira-kira hal apa yang langsung terlintas di pikiran kalian guys? Ribet, susah dipelajari, ngoding, IT, lalu apa lagi? Mungkin beberapa kata tersebut yang paling mudah terlintas di pikiran kita ketika mendengar kata “pemrograman”. Tidak sedikit pula yang mempunyai pemikiran bahwa apabila seseorang ingin belajar pemrograman atau bisa ngoding harus kuliah di jurusan Teknologi Informatika. Hmm.. ternyata _statement_ seperti ini belum tentu selalu benar. Mengapa demikian? Karena seperti halnya kita ingin mahir dalam bermain tenis meja misalnya, kita tidak dituntut untuk mempunyai latar belakang pendidikan olahraga agar bisa bermain tenis meja. Yang perlu kita siapkan adalah meja tenis, bet, dan  bola pingpong. Barulah setelah itu kita bisa mulai latihan bermain tenis meja.'
            style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 30px',
              lineHeight: '25px'
            }}
          />
          <Text
            Tag='h3'
            className='reg left-align'
            text='Ada banyak cara berbeda untuk menjadi seorang _programmer_. Ada yang mulai mempelajari pemrograman di dunia perkuliahan, ada yang belajar pemrograman secara otodidak, dan ada juga yang mulai mempelajari pemrograman karena ketagihan main game online.'
            style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 30px',
              lineHeight: '25px'
            }}
          />
          <Text
            Tag='h3'
            className='reg left-align'
            text='Setiap orang mempunyai “cara” dan motivasi sendiri untuk memulai mempelajari pemrograman. Beberapa programmer Refactory juga ada loh yang mempunyai latar belakang pendidikan non-IT. Kita simak yuk alasan mereka memulai belajar pemrograman!'
            style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 30px',
              lineHeight: '25px'
            }}
          />
          <Text
            Tag='h3'
            className='reg left-align'
            text='**Muhamad Firhat (Front End Developer) – Belajar Pemrograman Secara Otodidak**'
            style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 30px',
              lineHeight: '25px'
            }}
          />
          <Text
            Tag='h3'
            className='reg left-align'
            text='“Saya mulai menyukai dan tertarik untuk belajar pemrograman sejak berada di bangku SMA. Saat itu belajar pemrograman saya jadikan sebagai hobi dan saya belajar secara otodidak. Namun di awal karir saya, saya tidak langsung bekerja sebagai _programmer_, melainkan akuntan. Saya berfikir bahwa bekerja akan terasa lebih menyenangkan ketika kita sekaligus bisa menyalurkan hobi kita. Dan benar saja, saat ini saya sangat menikmati pekerjaan saya sebagai _programmer_”.'
            style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 30px',
              lineHeight: '25px'
            }}
          />
          <Text
            Tag='h3'
            className='reg left-align'
            text='**Akbar Rachman (Mobile Developer) – Belajar Pemrograman Secara Otodidak**'
            style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 30px',
              lineHeight: '25px'
            }}
          />
          <Text
            Tag='h3'
            className='reg left-align'
            text='“Berbekal niat dan semangat untuk belajar pemrograman, saya beranikan diri untuk ikut belajar ngoding. Saya mengawalinya dengan menekuni mobile development dan sekarang saya mulai mempelajari DevOps. Hal terberat yang saya hadapi selama belajar pemrograman adalah tidak adanya latar belakang pendidikan IT pada diri saya. Namun dengan menerapkan metode belajar learning by doing secara intensif, saya mulai bisa memahami setiap proses ketika belajar pemrograman”'
            style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 30px',
              lineHeight: '25px'
            }}
          />
          <Text
            Tag='h3'
            className='reg left-align'
            text='Nah, setelah menyimak alasan mereka, kalian mulai termotivasi untuk belajar pemrograman belum nih? Intinya adalah apabila kita ingin mempelajari hal baru itu butuh proses. Jadi buat kalian yang ingin memulai belajar pemrograman, kalian juga harus siap untuk menikmati setiap proses yang akan kalian jalani selama proses belajar. Dan buat kalian yang tidak mempunyai latar belakang pendidikan IT, jangan cemas! Ada istilah _learning by doing_ (belajar dan melakukannya). Dalam realitanya, langkah ini sering menunjukkan hasil yang lebih baik daripada belajar menggunakan _text book_. Mengapa demikian? Karena seringkali buku sulit untuk dicerna. Apabila kita belajar sambil mempraktekkan langsung apa yang kita pelajari, kita akan lebih mudah mengingatnya. Kalian juga bisa memulai belajar basic programming gratis secara online lewat program [Bootcamp Prep Refactory](http://enroll.refactory.id/program/bootcamp-prep).'
            style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 30px',
              lineHeight: '25px'
            }}
          />
        </div>
        <div className='sidelist'>
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
            />
            <Img
              src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/IMG_4371-scaled.jpg?fit=768%2C512&#038;ssl=1'
              alt='article'
              className='imgarticle'
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
            />
            <Button
              type='button'
              className='buttonmore reg t-white center-align'
              text='Artikel Lain'
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

DetailBlog.propTypes = {

}

export default DetailBlog
