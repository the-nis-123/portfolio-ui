import { useNavigate } from 'react-router-dom';
import  './avatar.css';
import getFileStream from '../../app/api/getFileStream';
import { useEffect, useState } from 'react';
import { EditBox } from "@styled-icons/remix-fill/EditBox";

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
    <div className='avatar'>
      <img src={image} alt=""  onClick={()=>navigate('/')}/>

      <div  onClick={()=>navigate('/')}>
        <h1>{data?.name}</h1>
          <h6>Software Engineer
          (from {data?.location})</h6>
      </div>

      <EditBox size='2em' onClick={() => navigate('/upload') }/>
    </div>
  )
}

export default Avatar