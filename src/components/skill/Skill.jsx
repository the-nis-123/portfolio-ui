import './skills.css';

const Skill = ({data}) => {
  return (
    <div className='skill'>
      <h4 className='skill-name'>{data?.skill}</h4>
      <span className='skill-level'>{data?.level}</span>
      <span className='skill-experience'>{data?.experience} years</span>
    </div>
  )
}

export default Skill