import "./home.css"
import Header from "../components/header/Header"
import Posts from "../components/posts/Posts"
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useLocation } from "react-router";


export default function Home() {

  const[posts, setPosts] = useState([]);
  // const {search} = useLocation();
  useEffect(()=>{
    const fetchPosts = async() =>{
      const res = await axios.get("http://localhost:4000/api/posts");
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  },[])
  return (
    <>
    <Header/>
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
        {/* home page */}
    </div>
    </>
  )
}
