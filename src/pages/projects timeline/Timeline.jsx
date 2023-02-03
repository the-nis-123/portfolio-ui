import  './timeline.css';
import { useGetProjectsQuery } from '../../app/api/coreApiSlice';
import Post from './PostCard';
import Loading from '../../components/loading/Loading';

function Timeline() {

  const {isLoading, data, isError, Error} = useGetProjectsQuery();

  if(isLoading){
    return <Loading />
  }

  return (
    <div className='page-wrapper'>
      <section>
        <If condition={data}>
          <For each="post" of={data}>
            <Post data={post}/>
          </For>
        </If>
      </section>
    </div>
  )
}

export default Timeline;