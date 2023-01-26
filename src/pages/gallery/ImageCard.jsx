import getFileStream from '../../app/api/getFileStream';
import {useEffect, useState} from 'react';


const ImageCard = ({url}) => {
  const [image, setImage] = useState();
  
  useEffect(()=> {
    getFileStream(`/api/public/files/${url}`)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [url]);

  return (
    <div className='gallery-card'>ImageCard</div>
  )
}

export default ImageCard