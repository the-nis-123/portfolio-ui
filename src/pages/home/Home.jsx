import  './home.css';
import { useGetProfileQuery } from '../../app/api/coreApiSlice';
import { setUserId } from '../../app/features/authSlice';
import { useDispatch } from 'react-redux';
import Skill from '../../components/skill/Skill';
import Award from '../../components/award card/Award';
import Education from '../../components/education badge/Education';

function Home() {
  const dispatch = useDispatch();
  const {isLoading, isError, error, data} = useGetProfileQuery();
  data && dispatch(setUserId(data._id));
  console.log(data);

  return (
    <div className='page-wrapper'>
      <section>
        <h3> <span>&#9997;</span> Intro</h3>
        <p>{data?.intro}</p>
      </section>
      
      <section>
        <h3>Why and how I became a software engineer
          <span>&#128525;</span>
        </h3>
        <p>{data?.motivation}</p>
      </section>


      <section>
        <h3>Skills <span>&#128187;</span> </h3>
        <Skill />
        <Skill />
        <Skill />

        <h4> <span>&#9989;</span> Other skills</h4>
      </section>

      <section>
        <h3> <span>&#127971;</span> Education</h3>
        <Education />
        <Education />
        <Education />
      </section>

      <section>
        <h3>Awards <span>&#127891;</span></h3>
        <Award />
        <Award />
        <Award />
      </section>

      <section>
        <h3>What I love doing <span>&#128175;</span></h3>

      </section>
    </div>
  )
}

export default Home