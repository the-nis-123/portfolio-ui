import  './timeline.css';
import { useGetProjectsQuery } from '../../app/api/coreApiSlice';

function Timeline() {

  const res = useGetProjectsQuery();
  console.log(res);
  

  return (
    <div className='page-wrapper'>
      <section className='post'>1</section>
      <section className='post'>2</section>
      <section className='post'>3</section>
      <section className='post'>4</section>
    </div>
  )
}

export default Timeline;