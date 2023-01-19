import { useState } from "react";
import useFormData from "../../hooks/useFormData";
import { useUploadDataMutation } from "../../app/api/coreApiSlice";

const ProjectForm = () => {
  const [projectStatus, setProjectStatus] = useState(true);
  const { handleChange, formData} = useFormData();
  const [uploadData, response] = useUploadDataMutation();

  
  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const res = await uploadData({
        url: "/api/administrator/projects",
        body: formData.append('isOnGoing', projectStatus)
      }).unwrap();
  
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section>
      <h4>Add new project <span>&#128540;</span> </h4>
      <form onSubmit={handleUpload}>
        <input 
          name='name' 
          placeholder='Name of project' 
          type='text'
          onChange={handleChange}
          autoComplete="off"
        />
        
        <input 
          name='role' 
          placeholder='Your position on this project' 
          type='text'
          onChange={handleChange}  
          autoComplete="off"  
        />
        
        <textarea 
          name="description"
          autoComplete="off"
          placeholder='describe this project'
          onChange={handleChange}
        />
        
        <textarea 
          name="achievements"
          autoComplete="off"
          placeholder='contributions and achievements'
          onChange={handleChange}
        />
        
        <p>Add files(images)</p>
        <input 
          type='file' 
          name='files'
          multiple
          onChange={handleChange}
        />
        
        <p>Links</p>
        <input 
          type='url' 
          name='active_url' 
          autoComplete="off"
          placeholder='Active url'
          onChange={handleChange}
        />
        
        <input 
          type='url' 
          name='source_code_url' 
          autoComplete="off"
          placeholder='Source code url'
          onChange={handleChange}
        />

        <p>Start date</p>
        <input 
          type='month' 
          name='startDate'
          autoComplete="off"
          onChange={handleChange}
        />
        
        <p>End date</p>
        <section className='activity-status'>
          <input 
            name='isOnGoing' 
            type='checkbox'
            autoComplete="off"
            value={projectStatus}
            checked={projectStatus && true}
            onChange={() => setProjectStatus(state => !state)}
          /> 
          <span>I'm currently working on this</span>
        </section>

        <If condition={!projectStatus}>
          <input 
            type='month' 
            name='endDate'
            autoComplete="off"
            onChange={handleChange}
          />
        </If>

        
        <input 
          type='submit' 
          value='Add project' 
        />
      </form>
    </section>
  )
}

export default ProjectForm;