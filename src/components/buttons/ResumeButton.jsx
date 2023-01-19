import  './buttons.css';
import {DownloadCloud2} from '@styled-icons/remix-line/DownloadCloud2';

const ResumeButton = () => {
  return (
    <section className='sub-container'>
      <button className='download'>
        <span>Resume</span>
        <DownloadCloud2 size='1.2rem' />
      </button>
    </section>
  )
}

export default ResumeButton