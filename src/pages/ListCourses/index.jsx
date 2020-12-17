import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
// import axios from 'axios';
// import PropTypes from 'prop-types'

import './_listcourses.sass';

import NavbarSmall from '../../components/NavbarSmall'
import Img from '../../components/Img';
import Text from '../../components/Text';
import FooterSmall from '../../components/FooterSmall';

const ListCourses = props => {

  const history = useHistory();

  const [data, setData] = useState([
    {
      id: 1,
      photo_url: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7",
      title: "HTML & CSS",
      short_description: "Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web",
      user: {
        photo_url: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi",
        name: "Harlita Keni Damonti"
      }
    },
    {
      id: 2,
      photo_url: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7",
      title: "HTML & CSS",
      short_description: "Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web",
      user: {
        photo_url: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi",
        name: "Harlita Keni Damonti"
      }
    },
    {
      id: 3,
      photo_url: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7",
      title: "HTML & CSS",
      short_description: "Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web",
      user: {
        photo_url: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi",
        name: "Harlita Keni Damonti"
      }
    },
  ]);

  // KENA CORS GITHUB

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://github.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/blob/main/list-course.json',
  //     );

  //     const {data: {data}} = result

  //     setData(data);
  //   };

  //   fetchData();
  // }, []);

  console.log(data);

  return (
    <div className='containerlistcourses'>
      <NavbarSmall />
      <div className='wrappercontent row'>
        {data.map(res =>
        <div
          className='col-xs-12 col-sm-6 col-md-4 paddingsize pointer'
          key={res.id}
          onClick={() => history.push('/detail-courses/html-css')}
        >
          <div className='card'>
            <Img
              src={res.photo_url}
              alt="courses"
              className='img'
            />
            <div className='contentcard'>
              <Text
                Tag='h3'
                className='bold raleway left-align'
                text={res.title}
                style={{
                  color: '#3B8C9B',
                  fontSize: '18px',
                  margin: '0 0 15px'
                }}
              />
              <Text
                Tag='h3'
                className='light raleway left-align'
                text={res.short_description}
                style={{
                  color: '#72bcca',
                  fontSize: '14px',
                  margin: '0 0 15px'
                }}
              />
              <div className='footercard'>
                <Img
                  src={res.user.photo_url}
                  alt={res.user.name}
                  className='imgfootercard'
                />
                <Text
                  Tag='h3'
                  className='light t-black left-align'
                  text={res.user.name}
                  style={{
                    fontSize: '15px',
                    margin: '0 0 0 10px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
      <FooterSmall />
    </div>
  )
}

ListCourses.propTypes = {

}

export default ListCourses
