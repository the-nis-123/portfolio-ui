import { useEditDataMutation } from "../../app/api/coreApiSlice";
import { useState } from "react";

const socialHandles = [{
  "name":"linkedin",
  "url":"https://www.linkedin.com/in/kintu-denis/"
},
{
  "name":"twitter",
  "url":"https://twitter.com/tthhenis"
},
{
  "name":"github",
  "url":"https://github.com/the-nis-123"
}
]

const SkillsForm = ({skillsData, otherSkillsData}) => {
  const [skills, setSkills] = useState({});
  const [otherSkills, setOtherSkills] = useState("");

  const [uploadSkills, skillsRes] = useEditDataMutation();
  const [uploadOtherSkills, otherSkillsRes] = useEditDataMutation();

  
  const handleObjectUpdate = (e) => {
    const newField = {};
    newField[e.target.name] = e.target.value
    setSkills(state => ({...state, ...newField}));
  }

  const handleUploadSkill = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('skills', JSON.stringify(skills))
    formData.append('socialHandles', JSON.stringify(socialHandles))

    try {
        const res = await uploadSkills({
        url: "/api/administrator/profile",
        body: formData
      }).unwrap();
  
      console.log(res);
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
  
      console.log(res);
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
          
          <input type='submit' value='Add' />
        </form>

        <If condition={skillsData}>
          <For each='institution' of={skillsData}>
            <Award key={JSON.stringify(institution)} data={institution} />
          </For>
        </If>
      </section>
      
      <section>
        <h4>Other skills <span>&#9989;</span> </h4>

        <form className="flexed-form" onSubmit={handleOtherSkillsUpload}>
          <input 
            type='text' 
            placeholder='Other Skills' 
            onChange={(e) => setOtherSkills(e.target.value)}
            autoComplete="off"
          />

          <input type='submit' value='Add to other skill' />
        </form>
      </section>

      <If condition={otherSkillsData}>
        <ul>
          <For each='otherSkill' of={otherSkillsData}>
            <li key={otherSkill} data={institution}>{otherSkill}</li>
          </For>
        </ul>
      </If>
    </section>
  )
}

export default SkillsForm