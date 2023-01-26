import {useState} from 'react'
import Spinner from '../../components/loading/Spinner';
import { useEditDataMutation } from "../../app/api/coreApiSlice";

const AnnualHighlights = () => {
  const [data, setData] = useState({});
  const [uploadData, response] = useEditDataMutation();

  const handleObjectUpdate = (e) => {
    const newField = {};
    newField[e.target.name] = e.target.value
    setData(state => ({...state, ...newField}));
  }

    
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("highlights", data);

    try {
      const res = await uploadData({
        url: "/api/administrator/profile",
        body: formData
      }).unwrap();
  
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h3>Annual highlights <span>&#128175;</span> </h3>
      <form onSubmit={handleUpload}>
        <p>Add a year</p>
        <input 
          type='month' 
          name='year' 
          placeholder='Enter year'
          autoComplete="off"
          onChange={handleObjectUpdate}
        />


        <input 
          type='text' 
          name='highlights' 
          placeholder='Add highlights, use comma(,) for multiple entries'
          autoComplete="off"
          onChange={handleObjectUpdate}
        />

        <section className='form-buttons-wrapper'>
          <input type='submit' value='Add a highlight' />
          {response?.isLoading && <Spinner/>}
        </section>
      </form>
    </section>
  )
}

export default AnnualHighlights