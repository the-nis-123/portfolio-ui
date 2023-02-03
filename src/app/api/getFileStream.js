const baseURL = 'http://localhost:9000/api/public/files/';

const blobToBase64 = (blob) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}



const readImageFromStream = async (responseBody) => {
  const reader = responseBody.getReader();

  const stream = new ReadableStream({
    start(controller) {
      return pump();
      // The following function handles each data chunk
      function pump() {
        // "done" is a Boolean and value a "Uint8Array"
        return reader.read().then(({ done, value }) => {
          // If there is no more data to read
          if (done) {
            controller.close();
            return;
          }
          // Get the data and send it to the browser via the controller
          controller.enqueue(value);
          return pump();
        });
      }
    },
  });

  const response = new Response(stream);
  const blob = await response.blob();
  return await blobToBase64(blob);
};


const getFileStream = async(url) => {
  try {
    const res = await fetch(baseURL + url);
    return await readImageFromStream(res.body)
  } catch (error) {
    throw new Error(error);
  }
}

export default getFileStream;


