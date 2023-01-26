import {useEffect, useState} from 'react';


const Education = ({data}) => {
  const [image, setImage] = useState();
  
  useEffect(()=> {
    getFileStream(data?.filename)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [data]);

  return (
    <div>Education</div>
  )
}

export default Education