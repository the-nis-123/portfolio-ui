import useFormData from "../../hooks/useFormData";
import { useEditDataMutation } from "../../app/api/coreApiSlice";

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

        <input type='submit' value='Add hobbie' />
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