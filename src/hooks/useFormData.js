import {useEffect, useState} from 'react';

const useFormData = () => {
  const [data, setData] = useState({});
  const formData = new FormData();

  const handleChange = (e) => {
    e.persist();
    let newEntry = {};
    newEntry[`${e.target.name}`] = e.target.type === 'file'? e.target.files : e.target.value;
    setData( state => ({...state, ...newEntry}) );
  }

  useEffect(() => {
    Object.keys(data).forEach( key => {
      //because the files value is a nested array-like object
      //and we want append all available file objects to a single 
      //fieldname in case user choses multiple files
      if(key === 'files' || key === 'avatar' || key === 'resume'){
        Object.values(data[key]).forEach( fileObj => formData.append(`${key}`, fileObj));
      }
      else{
        formData.append(`${key}`, data[key]);
      }
    });
  }, [data]);


  return { handleChange, formData}
}

export default useFormData;