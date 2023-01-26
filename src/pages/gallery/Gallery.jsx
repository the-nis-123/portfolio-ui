import './gallery.css';
import useProfileContext from '../../hooks/useProfileContext';
import ImageCard from './ImageCard';
import Loading from '../../components/loading/Loading';

const Gallery = () => {
  const {userProfile, error, isLoading} = useProfileContext();

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='page-wrapper'>
      <section className='gallery'>
        <For each="image" of={userProfile?.gallery}>
          <ImageCard key={image} url={image}/>
        </For>
      </section>
    </div>
  )
}

export default Gallery