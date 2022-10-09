import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import moment from 'moment'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getText, userRequest } from "../Url";
export const Single = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({})
  const location = useLocation()
  const postId = location.pathname.split("/")[2]
  console.log(postId);
  const {currentUser} = useContext(AuthContext)
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/post/${postId}`) 
        setPost(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[postId])
  const handleDelete = async ()=>{
    await userRequest.delete(`http://localhost:5000/api/post/${postId}`)
    alert('deleted successfully')
    navigate('/') 
  }
  return (
    <div className="single">
      <div className="content">
        <img
          src={post?.img}
          alt=""
        />
        <div className="user">
          {post?.userImg && <img
            src={post?.userImg}
            alt=""
          />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && <div className="edit">
            <Link to={`/post?edit=2`}>
              <AiFillEdit />
            </Link>
            <Link onClick={handleDelete}>
              <AiFillDelete />
            </Link>
          </div>}
        </div>
        <h1>{post?.title}</h1>
        <div>{getText(post.desc)}</div>
      </div>
      <Menu cat={post?.cat}/>
    </div>
  );
};
