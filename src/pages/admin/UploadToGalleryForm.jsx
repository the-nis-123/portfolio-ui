import useFormData from "../../hooks/useFormData";
import { useUploadDataMutation } from "../../app/api/coreApiSlice";

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
      <h4>Upload to gallery <span>&#128526;</span> </h4>
      <form onSubmit={handleUpload}>
        <p>upload images and screen shots to your gallery</p>
        <input 
          type='file' 
          name='files' 
          multiple
          onChange={handleChange}
        />

        <input 
          type='submit' 
          value='Upload to gallery' 
        />
      </form>
    </section>
  )
}

export default UploadToGalleryForm