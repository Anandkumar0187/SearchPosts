
import './App.css';
import React, { useEffect, useState } from 'react'
import Post from './post';


function App() {
  const [posts, setPosts] = useState([]);
  const [search,setSearch] = useState("");
  const [btnSearch, setBtnSearch] = useState("");
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => setPosts(data))
  })
  return (
    <>
    <div className='input-box'>
      <input type=""text onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={()=>setBtnSearch(search)}>Search</button>
    </div>
    <Post posts={posts} btnSearch={btnSearch}/>
    </>
  );
}

export default App;
