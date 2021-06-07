import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import Post from '../../components/posts/post/Post'
import'./Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts()
        
    }, [])


    const BASE_URL = 'https://dummyapi.io/data/api/post?limit=10';
    const APP_ID = '60be1436a22a1ab98b347161';

    const getPosts = async () => {
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
        .then(({ data }) => {
            setPosts(data.data)
            console.log(data.data)

        })
        .catch(console.error)

    }
    return(
        <div className = 'postsContainer'>
            {
               posts.length > 0 ? posts.map(post => <Post post={post} key={post.id} />) : <h4>Loading</h4> 
            }
        </div>
    
    )
        }

export default Posts
