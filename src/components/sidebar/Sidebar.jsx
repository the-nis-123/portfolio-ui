import './sidebar.css';
import TimelineCard from './TimelineCard';
import {Link} from 'react-router-dom';
import Socials from '../social handles/Socials';
import ResumeButton from '../buttons/ResumeButton';
import Avatar from '../avatar badge/Avatar';
import useProfileContext from '../../hooks/useProfileContext';

const Sidebar = () => {
  const {userProfile} = useProfileContext();

  return (
    <aside className='sidebar auto-hide-scrollbars'>
      <Avatar data={userProfile}/>

      <ResumeButton url={userProfile?.resume}/>

      <div className='menu'>
        <Link to='/'>
          <span className='hearts'>&#9654;</span>
          <span>Me, Programming and Software</span>
        </Link>
        
        <Link to='/timeline'>
          <span className='hearts'>&#9654;</span>
          <span>Career experience</span>
        </Link>

        <Link to='/gallery'>
          <span className='hearts'>&#9654;</span>
          <span>Projects Gallery</span>
        </Link>
        
        <Socials data={userProfile?.socialHandles}/>


        <div className='timeline'>
          <If condition={userProfile?.highlights}>
            <For each='timeline' of={userProfile.highlights.sort( (a, b) => b.year - a.year )}>
              <TimelineCard highlight={timeline} />
            </For>
          </If>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar