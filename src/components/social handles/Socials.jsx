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
            {data?.platform === 'github' && <Link to={data.url}> <SocialGithubCircular size='2rem'/> </Link>}
            {data?.platform === 'linkedin' && <Link  to={data.url}> <SocialLinkedinCircular size='2rem'/> </Link>}
            {data?.platform === 'twitter' && <Link  to={data.url}> <SocialTwitterCircular size='2rem'/> </Link>}
            {data?.platform === 'facebook' && <Link  to={data.url}> <SocialFacebook size='2rem'/> </Link>}
          </For>
        </If>
       
      </div>
    </div>
  )
}

export default Socials;