import {useEffect, useState} from 'react';
import './education.css';
import getFileStream from '../../app/api/getFileStream';

const Education = ({data}) => {
  const [image, setImage] = useState();
  
  console.log(data);

  useEffect(()=> {
    getFileStream(data?.filename)
    .then((data)=> {
      setImage(data);
    })
    .catch(err => console.error(err))
  }, [data]);

  return (
    <div className='education-card'>
      <h3>Institution: {data?.institution}</h3>
      <p>Field of Study: {data?.field}</p>
      <p>Program: {data?.programme}</p>
      <p>Start Date: {data?.start_date.split('-')[1] + '/' + data?.start_date.split('-')[0]}</p>
      
      <p>End Date :
        {
          data?.end_date?  data?.end_date.split('-')[1] + '/' + data?.end_date.split('-')[0] :
          'On-goining'
        }
      </p>
    </div>
  )
}

export default Education