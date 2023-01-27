import './sidebar.css';
import TimelineCard from './TimelineCard';
import {Link} from 'react-router-dom';
import Socials from '../social handles/Socials';
import ResumeButton from '../buttons/ResumeButton';
import Avatar from '../avatar badge/Avatar';
import useProfileContext from '../../hooks/useProfileContext';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const {userProfile} = useProfileContext();

  const [highlights, setHighlights] = useState({});
 
  useEffect(() => {
    userProfile?.highlights.map((item)=>{
      let newField = {};
      
      if(highlights[item?.year]){
        newField[item?.year].concat(highlights[item?.year], item?.highlights);
      }else{
        newField[item?.year] = [];
        newField[item?.year].push(item?.highlights);
      }

      setHighlights((prev) => {
        return {
          ...prev,
          ...newField
        }
      });
    });
  }, [userProfile]);



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
          <If condition={Object.keys(highlights).length > 0}>
            <For each='timeline' of={Object.keys(highlights).sort( (a, b) => b - a )}>
              <TimelineCard highlight={highlights[timeline]} year={timeline}/>
            </For>
          </If>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar