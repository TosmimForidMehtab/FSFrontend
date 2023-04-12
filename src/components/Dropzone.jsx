import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = ({ setFile }) => {

  const onDrop = useCallback(
    (acceptedFiles) => {
      // console.log(acceptedFiles);
      setFile(acceptedFiles[0])
      // console.log(isDragAccept);
    },
    [],
  )


  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop, multiple: false,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'audio/mpeg': ['.mp3'],
    }
  });

  return (
    <div className='p-4 w-full'>
      <div {...getRootProps()} className='h-80 w-full rounded-md cursor-pointer focus:outline-none'>
        <input {...getInputProps()} />

        <div className=
          {'flex flex-col items-center justify-center border-2 border-dashed border-yellow-light rounded-xl h-full space-y-3 ' + (isDragReject === true ? "border-red-500" : "") + (isDragAccept === true ? "border-green-500" : "")}
        >

          <img src='/images/folder.png' alt='Folder' className='w-16 h-16' />

          {
            isDragReject ? (<p>Please select jpeg/png/mp3 files only</p>) : (<>
              <p >Drag & Drop files here</p>
              <p className='mt-2 text-base text-gray-300'>Only png, jpeg and mp3 files are supported</p>
            </>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Dropzone