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

import { useGetProfileQuery } from '../../app/api/coreApiSlice';

const Upload = () => {
  const {isLoading, isError, error, data} = useGetProfileQuery();
  
  return (
    <div className='page-wrapper upload'>
      <BioForm />
      <ProjectForm/>
      <SkillsForm/>
      <EductaionForm/>
      <AwardsForm/>
      <HobbiesForm/>
      <UploadToGalleryForm/>
      <AnnualHighlights/>
      <SocialHandles />
    </div>
  )
}

export default Upload