import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
export const Menu = ({cat}) => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/post${cat}`) 
        setPosts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[cat])
    // const posts =[
    //     {
    //       id:uuidv4,
    //       title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //       img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
    //     },
    //     {
    //       id:uuidv4,
    //       title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //       img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
    //     },
    //     {
    //       id:uuidv4,
    //       title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //       img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
    //     },
    //     {
    //       id:uuidv4,
    //       title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //       img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
    //     },
    //     {
    //       id:uuidv4,
    //       title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //       img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
    //     },
    //     {
    //       id:uuidv4,
    //       title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //       img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
    //     },
    //   ]
  return (
    <div className="menu">
        <h1>Other post you may like</h1>
        {posts?.map(post=>{
            return(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="/" />
                    <h2>{post.title}</h2>
                    <button>Read more</button>
                </div>
            )
        })}
    </div>
  )
}
