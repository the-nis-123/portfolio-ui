import {useEffect, useState} from 'react'

const PostCard = ({data}) => {
  const [image, setImage] = useState();
  
  useEffect(()=> {
    getFileStream(`/api/public/files/${data?.avatar}`)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [data]);

  return (
    <div className='post'>PostCard</div>
  )
}

export default PostCard