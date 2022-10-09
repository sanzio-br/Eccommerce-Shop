import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"
import { getText } from '../Url';
export const Home = () => {
  const [posts, setPosts] = useState([])
  const cat = useLocation().search;
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
  //   {
  //     id:uuidv4,
  //     title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  //     img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
  //   },
  //   {
  //     id:uuidv4,
  //     title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  //     img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
  //   },
  //   {
  //     id:uuidv4,
  //     title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  //     img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
  //   },
  //   {
  //     id:uuidv4,
  //     title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  //     img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
  //   },
  //   {
  //     id:uuidv4,
  //     title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  //     img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
  //   },
  //   {
  //     id:uuidv4,
  //     title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  //     img:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg"
  //   },
  // ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post)=>{
          return(
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`./uploads/${post.img}`} alt="/"/>
              </div>
              <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <div>{getText(post.desc)}</div>
                <button>Read More</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
