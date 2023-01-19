import './socials.css';
import {SocialGithubCircular, SocialLinkedinCircular, SocialTwitterCircular} from '@styled-icons/typicons';
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <div className="sub-container">
      <h3>Social Handles</h3>
      <div className='social-handles'>
        <Link to='#'>
          <SocialGithubCircular size='2rem'/>
        </Link>

        <Link to='#'>
          <SocialLinkedinCircular size='2rem'/>
        </Link>

        <Link to='#'>
          <SocialTwitterCircular size='2rem'/>
        </Link>
      </div>
    </div>
  )
}

export default Socials;