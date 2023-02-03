import { useEffect } from "react"

const useFileDownload = (url, file) => {
  let download;
  useEffect(() => {
    download  = () => {
      fetch(url).then(response => {
        response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let downloadButton = document.createElement('a');
          downloadButton.href = url;
          downloadButton.download = file;
          downloadButton.click();
        })
      })
    }

    download();

  }, [url, file])

  return download;
}

export default useFileDownload