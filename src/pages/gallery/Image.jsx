import './gallery.css';
import getFileStream from '../../app/api/getFileStream';
import {useEffect, useState} from 'react';

const Image = ({url}) => {
  const [image, setImage] = useState();
  
  useEffect(()=> {
    getFileStream(url)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [url]);

  return (
    <div>Image</div>
  )
}

export default Image