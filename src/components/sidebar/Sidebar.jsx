import './sidebar.css';
import TimelineCard from './TimelineCard';
import {Link} from 'react-router-dom';
import Socials from '../social handles/Socials';
import ResumeButton from '../buttons/ResumeButton';
import Avatar from '../avatar badge/Avatar';

const timelines = [
  {year: 2017, works: ['Joined Merock Agency']},
  {year: 2018, works: ['Built and launched first WordPress site',  'Learning ReactJs and Advanced JavaScript']},
  {year: 2019, works: ['A lot more WordPress sites', 'Lots of personal projects with ReactJs']},
  {year: 2020, works: ['First professional project with ReactJs', 'Leaving Merock Agency']},
  {year: 2021, works: ['Started freelancing', 'Management system at Zegans', 'Started working towards full MERN stack development']},
  {year: 2022, works: ['Published with Hashnode', 'Started work on Otcust', 'More WordPress projects']},
  {year: 2023, works: ['Started mentoring at Code The Dream', 'Built, launched this portifolio project in 2 days']}
]

const Sidebar = () => {

  return (
    <aside className='sidebar auto-hide-scrollbars'>
      <Avatar/>

      <ResumeButton />

      <div className='menu'>
        <Link to='/'>
          <span>Me, Programming and Software</span>
          <span className='hearts'>&hearts;</span>
        </Link>
        
        <Link to='/timeline'>
          <span>Experience Timeline</span>
          <span className='hearts'>&hearts;</span>
        </Link>

        <Link to='/gallery'>
          <span>Projects Gallery</span>
          <span className='hearts'>&hearts;</span>
        </Link>
        
        <Socials />


        <div className='timeline'>
          <For each='timeline' of={timelines.sort( (a, b) => b.year - a.year )}>
            <TimelineCard summary={timeline} />
          </For>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar