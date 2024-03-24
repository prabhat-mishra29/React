import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../Components/index'
import data from "../Appwrite/database_storage";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        data.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                            {/* de-structuring post to get post-id,title,featuredImage */}
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts