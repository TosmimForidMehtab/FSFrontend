import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RenderFile from '../components/RenderFile';
import fileDownload from 'js-file-download';

const Download = () => {
  const params = useParams();
  const [file, setFile] = useState(null);
  const idJson = JSON.stringify(params);
  const idParam = JSON.parse(idJson).id;
  // console.log(id);
  const API_URL = `https://fileshare-api-dz74.onrender.com/api/files/${idParam}`; // server

  const fecthData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setFile(data);
    } catch (error) {
      console.log(`Error occured while downloading... ${error.message}`);
    }
  };

  useEffect(() => {

    fecthData(API_URL);

  }, []);
  console.log(file);

  const handleDownload = async () => {
    const { data } = await axios.get(`https://fileshare-api-dz74.onrender.com/api/files/${idParam}/download`, { responseType: "blob" });

    fileDownload(data, file?.name);

  };

  return (
    <div className='flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl w-96'>
      {
        file && file.id ? <>
          <img src="/images/file-download.png" alt="" className='w-16 h-16' />
          <h3 className='text-xl'>Your file is ready to download</h3>
          <RenderFile file={file} />
          <button className='button' onClick={handleDownload}>Download</button>
        </> : <span>File does not exist</span>
      }
    </div>
  );
};

export default Download;