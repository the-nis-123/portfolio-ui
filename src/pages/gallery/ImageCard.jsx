import getFileStream from '../../app/api/getFileStream';
import {useEffect, useState} from 'react';


const ImageCard = ({url}) => {
  const [image, setImage] = useState();

  useEffect(()=> {
    getFileStream(url)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))

  }, [url]);

  return (
    <div className='gallery-card'>
      <img src={image} alt=""/>
    </div>
  )
}

export default ImageCard