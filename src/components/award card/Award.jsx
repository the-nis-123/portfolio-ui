import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react';

const Award = ({data}) => {
  const [image, setImage] = useState();
  
  useEffect(()=> {
    getFileStream(data?.filename)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [data]);

  return (
    <div className='award-award'>
      <img src='' alt='' />

      <div>
        <h3>Award name</h3>
        
        <h5>
          <span>Issued By:</span>
          <span>name of issuerer</span>
        </h5>

        <Link to="#">View it here</Link>
      </div>
    </div>
  )
}

export default Award