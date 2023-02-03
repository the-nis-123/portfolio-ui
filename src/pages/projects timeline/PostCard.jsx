import {useEffect, useState} from 'react'
import getFileStream from '../../app/api/getFileStream';


const PostCard = ({data}) => {
  const [image, setImage] = useState();
  console.log(data);
  
  useEffect(()=> {
    getFileStream(data?.avatar)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [data]);

  return (
    <div className='post'>
      <div>
        <div>
          <If condition={data?.files?.length>0}>
            <For each="image" of={data?.files}>
              <img src="" alt="" key={image}/>
            </For>
          </If>
        </div>

        <p>{data?.projectName}</p>
        <p>
          <span>live</span>
          <span>source code</span>
        </p>
      </div>

      <p>{data?.description}</p>

      <p>{data?.achievements}</p>
    </div>
  )
}

export default PostCard