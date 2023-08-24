import axios from "axios"
import PostCard from "./PostCard"
import {useEffect, useState} from 'react'
import PostProps from "../types/types";

// async function getPosts() {
    
// }

    

const PostList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        
        setData(res.data);
        

        }).catch((err) => { 
            console.log(err);
         });
    }, []);
    

         

  return (
    <div>
        {
            data.map((post: PostProps) => (
                <PostCard key={post.id} {...post} />
            ))
        }
    </div>
  )
}

export default PostList