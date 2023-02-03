import useFormData from "../../hooks/useFormData";
import { useUploadDataMutation } from "../../app/api/coreApiSlice";
import Spinner from '../../components/loading/Spinner';

const UploadAvatar = () => {

  const { handleChange, formData} = useFormData();
  const [uploadData, response] = useUploadDataMutation();

    
  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const res = await uploadData({
        url: "/api/administrator/files",
        body: formData
      }).unwrap();
  
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h3>Upload/Change your Avatar<span>&#128526;</span> </h3>
      <form onSubmit={handleUpload}>
        <input 
          type='file' 
          name='avatar' 
          accept=".jpg, .png, .jpeg"
          onChange={handleChange}
        />

        <section className='form-buttons-wrapper'>
          <input 
            type='submit' 
            value='Upload avatar' 
          />

          {response?.isLoading && <Spinner/>}
        </section>
      </form>
    </section>
  )
}

export default UploadAvatar