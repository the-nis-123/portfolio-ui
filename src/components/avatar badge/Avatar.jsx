import { useNavigate } from 'react-router-dom';
import  './avatar.css';
import getFileStream from '../../app/api/getFileStream';
import { useEffect, useState } from 'react';

const Avatar = ({data}) => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  
  useEffect(()=> {
    getFileStream(data?.avatar)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [data]);

  return (
    <div className='avatar' onClick={()=>navigate('/')}>
      <img src={image} alt="" />

      <div>
        <h1>{data?.name}</h1>
          <h6>Software Engineer
          (from {data?.location})</h6>
      </div>
    </div>
  )
}

export default Avatar