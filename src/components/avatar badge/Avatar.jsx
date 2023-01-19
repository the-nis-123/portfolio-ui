import { useNavigate } from 'react-router-dom';
import  './avatar.css';
import image from '../../images/1.jpg';
import getFileStream from '../../app/api/getFileStream';

const Avatar = () => {
  const navigate = useNavigate();


  return (
    <div className='avatar' onClick={()=>navigate('/')}>
      <img src={image} alt="" />

      <div>
        <h1>Kintu Denis</h1>
          <h6>Software Engineer
          (from Kampala, Uganda)</h6>
      </div>
    </div>
  )
}

export default Avatar