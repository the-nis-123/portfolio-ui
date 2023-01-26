import {useState} from 'react'
import Spinner from '../../components/loading/Spinner';
import { useEditDataMutation } from "../../app/api/coreApiSlice";

const SocialHandles = () => {
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
    formData.append("socialHandles", data);

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
      <h3>Social handles <span>&#128175;</span> </h3>
      <form onSubmit={handleUpload}>
        <select name='platform' onChange={handleObjectUpdate}>
          <option>Select media platform</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="github">GitHub</option>
          <option value="linkedin">Linkedin</option>
          <option value="stackoverflow">Stackoverflow</option>
        </select>

        <input 
          type='text' 
          name='url' 
          placeholder='Enter profile link'
          autoComplete="off"
          onChange={handleObjectUpdate}
        />

        <section className='form-buttons-wrapper'>
          <input type='submit' value='Add' />
          {response?.isLoading && <Spinner/>}
        </section>
      </form>
    </section>  
  )
}

export default SocialHandles