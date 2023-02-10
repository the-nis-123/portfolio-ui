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
      <If condition={image}>
        <img src={image} alt=""/>
      </If>

      <If condition={!image}>
        <div className='skeleton'/>
      </If>
    </div>
  )
}

export default ImageCard