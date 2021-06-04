import { useState, useEffect } from 'react'


const Home = () => {

    const postStyle = {
        padding: "2rem",
        margin: "1rem",
        backgroundColor: "gray",
        color: "#fff"
    }
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const allPosts = await apiGetPosts()
            setPosts(allPosts)
        }

        getPosts()
        
        return () => {}
    }, [])
    
    const apiGetPosts = async () => {
        const res = await fetch('http://localhost:5000/posts')
        const data = await res.json()
            
        return data
    }

    return (
        <div>
            {
                posts.map(
                    (post, index) => {
                        return <div style={postStyle}>
                            <h3>{ post.title }</h3>
                            <div>{ post.content }</div>
                            <div>{ post.author }</div>
                        </div>
                    }
                )
            }
        </div>
    )

}

export default Home
