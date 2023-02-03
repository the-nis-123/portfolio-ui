import { useEditDataMutation } from "../../app/api/coreApiSlice";
import { useState } from "react";
import Spinner from '../../components/loading/Spinner';
import Skill from "../../components/skill/Skill";
import useFormData from "../../hooks/useFormData";


const SkillsForm = ({skillsData, otherSkillsData}) => {
  const [skills, setSkills] = useState({});
  const [otherSkills, setOtherSkills] = useState("");
  const {handleChange, formData} = useFormData();

  const [uploadSkills, skillsRes] = useEditDataMutation();
  const [uploadOtherSkills, otherSkillsRes] = useEditDataMutation();

  
  const handleObjectUpdate = (e) => {
    const newField = {};
    newField[e.target.name] = e.target.value
    setSkills(state => ({...state, ...newField}));
  }

  const handleUploadSkill = async (e) => {
    e.preventDefault();
    formData.append('skills', JSON.stringify(skills))

    try {
        const res = await uploadSkills({
        url: "/api/administrator/profile",
        body: formData
      }).unwrap();
  
    } catch (error) {
      console.log(error);
    }
  }

  const handleOtherSkillsUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('otherSkills', otherSkills);
    
    try {
        const res = await uploadOtherSkills({
        url: "/api/administrator/profile",
        body: formData
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section>
      <h3>Add a new skill <span>&#128187;</span></h3>
      <section>
        <form onSubmit={handleUploadSkill}>
          <input 
            type='text' 
            name='skill' 
            placeholder='Skill'
            autoComplete="off"
            onChange={handleObjectUpdate}
          />

          <input 
            type='Number' 
            name='experience' 
            placeholder='Years of experience'
            onChange={handleObjectUpdate}
            autoComplete="off"
          />

          <input 
            type='text' 
            name='level' 
            placeholder='Skill level'
            onChange={handleObjectUpdate}
            autoComplete="off"
          />

          <p>Add skill icon</p>
          <input 
            name='files' 
            type='file'
            onChange={handleChange}
            accept=".jpg, .jpeg, .png"
          />

          <section className='form-buttons-wrapper'>
            <input type='submit' value='Add' />
            {skillsRes?.isLoading && <Spinner/>}
          </section>
        </form>

        <If condition={skillsData}>
          <For each='skill' of={skillsData}>
            <Skill key={JSON.stringify(skill)} data={skill} />
          </For>
        </If>
      </section>
      
      <section>
        <h3>Other skills <span>&#9989;</span> </h3>

        <form className="flexed-form" onSubmit={handleOtherSkillsUpload}>
          <input 
            type='text' 
            name="otherSkills"
            placeholder='Other Skills' 
            onChange={(e) => setOtherSkills(e.target.value)}
            autoComplete="off"
          />

          <section className="form-buttons-wrapper">
            <input type='submit' value='Add to other skills' />
            {otherSkillsRes?.isLoading && <Spinner/>}
          </section>
        </form>
      </section>

      <If condition={otherSkillsData}>
        <ul>
          <For each='otherSkill' of={otherSkillsData}>
            <li key={otherSkill}>{otherSkill}</li>
          </For>
        </ul>
      </If>
    </section>
  )
}

export default SkillsForm