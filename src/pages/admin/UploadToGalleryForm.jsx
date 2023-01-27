import useFormData from "../../hooks/useFormData";
import { useUploadDataMutation } from "../../app/api/coreApiSlice";
import Spinner from '../../components/loading/Spinner';

const UploadToGalleryForm = () => {

  const { handleChange, formData} = useFormData();
  const [uploadData, response] = useUploadDataMutation();

    
  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const res = await uploadData({
        url: "/api/administrator/files",
        body: formData
      }).unwrap();
  
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h3>Upload to gallery <span>&#128526;</span> </h3>
      <form onSubmit={handleUpload}>
        <p>upload images and screen shots to your gallery</p>
        <input 
          type='file' 
          name='files' 
          multiple
          onChange={handleChange}
        />

        <p>Upload/Change your resume</p>
        <input type='file' name='resume'  onChange={handleChange}/>

        <p>Upload/updated your avatar</p>
        <input type='file' name='avatar'  onChange={handleChange}/>

        <section className='form-buttons-wrapper'>
          <input 
            type='submit' 
            value='Upload to gallery' 
          />

          {response?.isLoading && <Spinner/>}
        </section>
      </form>
    </section>
  )
}

export default UploadToGalleryForm