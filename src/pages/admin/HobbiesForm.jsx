import useFormData from "../../hooks/useFormData";
import { useEditDataMutation } from "../../app/api/coreApiSlice";
import Spinner from '../../components/loading/Spinner';

const HobbiesForm = ({ data }) => {

  const {handleChange, formData} = useFormData();
  const [uploadData, response] = useEditDataMutation();
    
  const handleUpload = async (e) => {
    e.preventDefault();

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
      <h3>Hobbies <span>&#128175;</span> </h3>
      <form onSubmit={handleUpload} className='flexed-form'>
        <input 
          type='text' 
          name='hobbies' 
          placeholder='hobbies'
          autoComplete="off"
          onChange={handleChange}
        />

        <section className='form-buttons-wrapper'>
          <input type='submit' value='Add hobbie' />
          {response?.isLoading && <Spinner/>}
        </section>
      </form>

      <If condition={data}>
        <ul>
          <For each='hobbie' of={data}>
            <li key={hobbie}>{hobbie}</li>
          </For>
        </ul>
      </If>
    </section>
  )
}

export default HobbiesForm