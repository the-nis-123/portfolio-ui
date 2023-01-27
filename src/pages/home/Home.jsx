import  './home.css';
import Skill from '../../components/skill/Skill';
import Award from '../../components/award card/Award';
import Education from '../../components/education badge/Education';
import useProfileContext from '../../hooks/useProfileContext';
import Loading from '../../components/loading/Loading';

function Home() {
  const {userProfile, error, isLoading, 
    awards, awardsError, awardsLoading} = useProfileContext();


  if(isLoading || awardsLoading){
    return <Loading/>
  }

  return (
    <div className='page-wrapper'>
      <section>
        <h3> <span>&#9997;</span> Intro</h3>
        <p>{userProfile?.intro}</p>
      </section>
      
      <section>
        <h3>Why and how I became a software engineer
          <span>&#128525;</span>
        </h3>
        <p>{userProfile?.motivation}</p>
      </section>


      <section>
        <h3>Skills <span>&#128187;</span> </h3>
        <If  condition={userProfile?.skills}>
          <For each='skill' of={userProfile.skills}>
            <Skill key={skill.skill} data={skill} />
          </For>
        </If>

        <h3> <span>&#9989;</span> Other skills</h3>
        <If  condition={userProfile?.otherSkills}>
          <For each='otherSkill' of={userProfile.otherSkills}>
            <p key={otherSkill}>{otherSkill}</p>
          </For>
        </If>
      </section>

      <section>
        <h3> <span>&#127971;</span> Education</h3>
        <If  condition={userProfile?.education}>
          <For each='school' of={userProfile.education}>
            <Education key={school.startDate} data={school} />
          </For>
        </If>
      </section>

      <section>
        <h3>Awards <span>&#127891;</span></h3>
        <If  condition={awards}>
          <For each='award' of={awards}>
            <Award key={award._id} data={award} />
          </For>
        </If>
      </section>

      <section>
        <h3>What I love doing <span>&#128175;</span></h3>
        <If  condition={userProfile?.hobbies}>
          <For each='hobbie' of={userProfile.hobbies}>
            <p key={hobbie}>{hobbie}</p>
          </For>
        </If>
      </section>
    </div>
  )
}

export default Home