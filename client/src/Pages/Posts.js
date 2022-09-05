import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      fetch(`http://localhost:5000/api/posts/all`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPosts(data)
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPosts();
  }, []);

  return (
    <div className="flex max-w-[1600px] justify-between items-center mx-auto h-[calc(screen-64px)] w-full bg-black text-white px-4">
      <div>
        {
          posts.map((post) => (
            <Post key={post._id} post={post}/>
          ))
        }
      </div>

      <div>
        <PostForm />
      </div>
    </div>
  );
};

export default Posts;
