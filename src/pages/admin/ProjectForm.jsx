import { useState } from "react";
import useFormData from "../../hooks/useFormData";
import { useUploadDataMutation } from "../../app/api/coreApiSlice";
import Spinner from '../../components/loading/Spinner';

const ProjectForm = () => {
  const [projectStatus, setProjectStatus] = useState(true);
  const { handleChange, formData} = useFormData();
  const [uploadData, response] = useUploadDataMutation();

  
  const handleUpload = async (e) => {
    e.preventDefault();
    formData.append('isOnGoing', projectStatus)

    try {
      const res = await uploadData({
        url: "/api/administrator/projects",
        body: formData
      }).unwrap();
  
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section>
      <h3>Add new project <span>&#128540;</span> </h3>
      <form onSubmit={handleUpload}>
        <input 
          name='projectName' 
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
        
        <p>Add project cover image</p>
        <input 
          type='file' 
          name='files'
          onChange={handleChange}
          accept=".jpg, .jpeg, .png"
        />
        
        <p>Links</p>
        <input 
          type='url' 
          name='activeUrl' 
          autoComplete="off"
          placeholder='Active url'
          onChange={handleChange}
        />
        
        <input 
          type='url' 
          name='sourceUrl' 
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

        <section className='form-buttons-wrapper'>
          <input 
            type='submit' 
            value='Add project' 
          />
          {response?.isLoading && <Spinner/>}
        </section>
      </form>
    </section>
  )
}

export default ProjectForm;