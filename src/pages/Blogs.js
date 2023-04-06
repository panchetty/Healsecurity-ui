import React from 'react';
import axios from "axios";

const Blogs = ()=>{
    const result = axios.get("http://127.0.0.1:8000/articles");
    console.log("poojitha",result);
    return(
        <>
        <h1>This is blogs page</h1>
        </>
    )
}

export default Blogs;