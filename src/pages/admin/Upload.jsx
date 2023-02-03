import './upload.css';
import BioForm from './BioForm';
import ProjectForm from './ProjectForm';
import UploadToGalleryForm from './UploadToGalleryForm';
import EductaionForm from './EductaionForm';
import SkillsForm from './SkillsForm';
import AwardsForm from './AwardsForm';
import AnnualHighlights from './AnnualHighlights';
import SocialHandles from './SocialHandles';
import HobbiesForm from './HobbiesForm';
import UploadAvatar from './UploadAvatar';
import UploadResume from './UploadResume';

import useProfileContext from '../../hooks/useProfileContext';
import Loading from '../../components/loading/Loading';

const Upload = () => {
  const {userProfile, error, isLoading} = useProfileContext();

  if(isLoading){
    return <Loading />
  }

  return (
    <div className='page-wrapper upload'>
      <BioForm intro={userProfile?.intro} motivation={userProfile?.motivation}/>
      <UploadAvatar />
      <UploadResume />
      <ProjectForm/>
      <SkillsForm skillsData={userProfile?.skills} otherSkillsData={userProfile?.otherSkills}/>
      <EductaionForm education={userProfile?.education}/>
      <AwardsForm awards={userProfile?.awards}/>
      <HobbiesForm hobbies={userProfile?.hobbies}/>
      <UploadToGalleryForm gallery={userProfile?.gallery}/>
      <AnnualHighlights highlights={userProfile?.highlights}/>
      <SocialHandles socials={userProfile?.socialHandles}/>
    </div>
  )
}

export default Upload