import { useState } from 'react';
import Dropzone from './components/Dropzone.jsx';
import RenderFile from './components/RenderFile.jsx';
import axios from 'axios';
import DownloadFile from './components/DownloadFile.jsx';

axios.defaults.baseURL = "https://fileshare-api-dz74.onrender.com/"; // server

function App() {
  const [file, setFile] = useState(null);
  const [id, setId] = useState(null);
  const [downloadPageLink, setDownloadPageLink] = useState(null);
  const [uploadState, setUploadState] = useState("Upload");

  const handleUpload = async () => {
    if (uploadState === "Uploading") return;
    setUploadState("Uploading");
    const formData = new FormData();
    formData.append('myFile', file);
    try {
      const { data } = await axios({
        method: "post",
        data: formData,
        url: "api/files/upload",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setDownloadPageLink(data.downloadPageLink);
      setId(data.id);
    } catch (error) {
      console.log(error.response.data);
      setUploadState("Upload Failed");
    }
  };

  const resetComponent = () => {
    setFile(null);
    setDownloadPageLink(null);
    setUploadState("Upload");
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-full min-h-screen'>
      <h3 className='my-4 text-3xl font-medium'>Select or Drop a file here</h3>
      <div className='flex flex-col items-center w-96 bg-gray-800 shadow-xl rounded-xl justify-center'>

        {
          !downloadPageLink && <Dropzone setFile={setFile} />
        }

        {
          file && <RenderFile file={{
            format: file.type.split('/')[1],
            name: file.name,
            sizeInBytes: file.size
          }} />
        }

        {
          !downloadPageLink && file &&
          <button className='button' onClick={handleUpload}>{uploadState}</button>
        }

        {
          downloadPageLink && <div className='p-2 text-center'>
            <DownloadFile downloadPageLink={downloadPageLink} />
            <button className='button' onClick={resetComponent} >Upload New File</button>
          </div>
        }


      </div>
    </div>

  );
}

export default App;
