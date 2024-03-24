//Show post :- which includes a title,name and an image that is store in appwrite 'storage'.

import React from 'react'
import data from "../Appwrite/database_storage"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    // Appwrite takes '$id' as a prop.so we use this type of convention.
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={data.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard;