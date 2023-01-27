import './socials.css';
import {SocialGithubCircular, SocialLinkedinCircular, 
  SocialTwitterCircular, SocialFacebook} from '@styled-icons/typicons';
import { Link } from 'react-router-dom';

const Socials = ({data}) => {
  
  return (
    <div className="sub-container">
      <h3>Social Handles</h3>
      <div className='social-handles'>
        <If condition={data}>
          <For each='socialLink' of={data}>
            {socialLink?.platform === 'github' && <Link to={socialLink.url}> <SocialGithubCircular size='2rem'/> </Link>}
            {socialLink?.platform === 'linkedin' && <Link  to={socialLink.url}> <SocialLinkedinCircular size='2rem'/> </Link>}
            {socialLink?.platform === 'twitter' && <Link  to={socialLink.url}> <SocialTwitterCircular size='2rem'/> </Link>}
            {socialLink?.platform === 'facebook' && <Link  to={socialLink.url}> <SocialFacebook size='2rem'/> </Link>}
          </For>
        </If>
       
      </div>
    </div>
  )
}

export default Socials;