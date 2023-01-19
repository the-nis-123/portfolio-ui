import { useState } from "react";
import { useEditDataMutation } from "../../app/api/coreApiSlice";

const EductaionForm = ({data}) => {
  const [educationStatus, setEducationStatus] = useState(true);
  const [education, setEducation] = useState({});
  const [uploadData, response] = useEditDataMutation();

  
  
  const handleObjectUpdate = (e) => {
    const newField = {};
    newField[e.target.name] = e.target.value
    setEducation(state => ({...state, ...newField}));
  }
  
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    try {
      const res = await uploadData({
        url: "/api/administrator/profile",
        body: formData.append('education', JSON.stringify(education))
      }).unwrap();
  
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h4>Add education details <span>&#127971;</span></h4>
      <form onSubmit={handleUpload}>
        <input 
          name='institution' 
          placeholder='Institution' 
          type='text'
          autoComplete="off"
          onChange={handleObjectUpdate}
        />

        <input 
          name='field' 
          placeholder='Field of study' 
          type='text'
          autoComplete="off"
          onChange={handleObjectUpdate}
        />

        <input 
          name='programme' 
          placeholder='Programme persued' 
          type='text'
          autoComplete="off"
          onChange={handleObjectUpdate}
        />

        <p>Start date</p>
        <input 
          type='month' 
          autoComplete="off"
          name='start_date'
          onChange={handleObjectUpdate}
        />

        <p>End date</p>
        <section className='activity-status'>
          <input 
            name='ongoing' 
            type='checkbox'
            autoComplete="off"
            value={educationStatus}
            checked={educationStatus && true}
            onChange={() => setEducationStatus(state => !state)}
          /> 
          <span>I'm currently enrolled here</span>
        </section>

        <If condition={!educationStatus}>
          <input 
            type='month' 
            name='end_date'
            autoComplete="off"
            onChange={handleObjectUpdate}
          />
        </If>

        <input type='submit' value='Save education' />
      </form>

      <If condition={data}>
        <For each='institution' of={data}>
          <Award key={JSON.stringify(institution)} data={institution} />
        </For>
      </If>
    </section>
  )
}

export default EductaionForm