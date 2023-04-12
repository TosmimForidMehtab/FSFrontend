import React from 'react'
import { sizeInMb } from '../miscellaneous/sizeInMb'

const RenderFile = ({ file }) => {
    return (
        <div className='flex items-center w-full p-4 my-2'>
            <img src={`/images/${file.format}.png`} alt="" className='w-14 h-14' />
            <span className='mx-2'>{file.name}</span>
            <span className='ml-auto'>{sizeInMb(file.sizeInBytes)}</span>
            {/* {console.log(file.id)} */}
        </div>
    )
}

export default RenderFile