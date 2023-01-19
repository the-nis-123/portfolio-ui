import useFormData from "../../hooks/useFormData";
import { useUploadDataMutation } from "../../app/api/coreApiSlice";
import Award from "../../components/award card/Award";

const AwardsForm = ({data}) => {
  const { handleChange, formData} = useFormData();
  const [uploadData, response] = useUploadDataMutation();
  
  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const res = await uploadData({
        url: "/api/administrator/awards",
        body: formData
      }).unwrap();
  
      console.log(res);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h4>Awards and certificates <span>&#127891;</span> </h4>
      <form onSubmit={handleUpload}>
        <input 
          name='name' 
          placeholder='Award name' 
          type='text'
          autoComplete="off"
          onChange={handleChange}
        />

        <input 
          name='awardedBy' 
          placeholder='Awarded by' 
          type='text'
          autoComplete="off"
          onChange={handleChange}
        />

        <p>Add award files if any</p>
        <input 
          name='files' 
          type='file'
          onChange={handleChange}
        />

        <input 
          name='name' 
          placeholder='Award link or url if any' 
          type='url'
          autoComplete="off"
          onChange={handleChange}
        />

        <input type='submit' value='Save award' />
      </form>

      <If condition={data}>
        <For each='award' of={data}>
          <Award key={JSON.stringify(award)} data={award} />
        </For>
      </If>
    </section>
  )
}

export default AwardsForm