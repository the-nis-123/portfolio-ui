import {useEffect, useState} from 'react'
import getFileStream from '../../app/api/getFileStream';


const PostCard = ({data}) => {
  const [image, setImage] = useState();
  
  console.log(image);

  useEffect(()=> {
    getFileStream(data?.file)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [data]);

  return (
    <div className='post'>
      <div>
        <If condition={image}>
          <img src={image} alt="" key={image}/>
        </If>

        <If condition={!image}>
          <div className='skeleton'/>
        </If>

        <h2>{data?.projectName}</h2>

      
      </div>

      <h3>Description</h3>
      <p>{data?.description}</p>

      <h3>Achievements</h3>
      <p>{data?.achievements}</p>

      <h3>Tech stack</h3>
      <p className='links'>
        <span>live</span>
        <span>source code</span>
      </p>

      <h3>Project links</h3>
      <p className='links'>
        <span>live</span>
        <span>source code</span>
      </p>
    </div>
  )
}

export default PostCard