import useFormData from "../../hooks/useFormData";
import { useEditDataMutation } from "../../app/api/coreApiSlice";
import Spinner from '../../components/loading/Spinner';

const BioForm = () => {
  
  const { handleChange, formData} = useFormData();
  const [uploadData, response] = useEditDataMutation();

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const res = await uploadData({
        url: '/api/administrator/profile',
        body: formData
      }).unwrap();

      console.log('res', res);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section>
      <h3>Biography <span>&#9997;</span></h3>
      <form onSubmit={handleUpload}>
        <textarea 
          name="intro"
          autoComplete="off"
          placeholder='Write a little about yourself'
          onChange={handleChange}
        />

        <textarea 
          name="motivation" 
          autoComplete="off"
          placeholder='Motivation to do software'
          onChange={handleChange}
        />

        <section className='form-buttons-wrapper'>
          <input type='submit' value='Save bio' />
          {response?.isLoading && <Spinner/>}
        </section>
      </form>
    </section>

  )
}

export default BioForm