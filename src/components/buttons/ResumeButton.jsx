import  './buttons.css';
import {DownloadCloud2} from '@styled-icons/remix-line/DownloadCloud2';
import { useState } from 'react';


const ResumeButton = ({userProfile}) => {
  let url = "http://localhost:9000/api/public/files/" + userProfile?.resume;
  let file =  userProfile?.name?.split(' ')[0] + '_' + userProfile?.name?.split(' ')[1] + "'s_resume" 

  const [downloadStatus, setStatus] = useState();
  console.log(downloadStatus);

  const handleDownload =  () => {
    fetch(url).then(response => {
      setStatus(response);
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let downloadButton = document.createElement('a');
        downloadButton.href = url;
        downloadButton.download = file;
        downloadButton.click();
      })
    })
  }

  return (
    <section className='sub-container'>
      <div 
        className='download'
        onClick={handleDownload}
      >
        <span>Resume</span>
        <DownloadCloud2 size='1.2rem' />
      </div>
    </section>
  )
}

export default ResumeButton