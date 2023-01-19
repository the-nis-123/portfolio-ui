import useFormData from "../../hooks/useFormData";
import { useEditDataMutation } from "../../app/api/coreApiSlice";
import { useSelector } from "react-redux";

const BioForm = () => {
  
  const { handleChange, formData} = useFormData();
  const [uploadData, response] = useEditDataMutation();
  const userId = useSelector(state => state.userId);

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const res = await uploadData({
        url: '/api/administrator/profile',
        body: formData,
        params: {id: userId}
      }).unwrap();

      console.log('res', res);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section>
      <h4>Biography <span>&#9997;</span></h4>
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

        <input type='submit' value='Save bio' />
      </form>
    </section>

  )
}

export default BioForm