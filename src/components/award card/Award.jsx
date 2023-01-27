import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react';
import getFileStream from '../../app/api/getFileStream';

const Award = ({data}) => {
  const [image, setImage] = useState();
  
  useEffect(()=> {
    getFileStream(data?.files[0])
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [data]);

  return (
    <div className='award-award'>
      <img src={image} alt='' />

      <div>
        <h3>{data?.name}</h3>
        
        <h5>
          <span>Issued By:</span>
          <span>{data?.awardedBy}</span>
        </h5>

        <Link to={data?.url}>View it here</Link>
      </div>
    </div>
  )
}

export default Award