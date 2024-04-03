// import AddPost from "./components/AddPost";
// import PostList from "./components/PostList";

// // async function getData() {
// //   const res = await fetch('/api/posts', {cache: "no-cache"})
// //   if(!res.ok) {
// //     throw new Error("Failed to fetch data")
// //   }
// //   return res.json();
// // }

// async function getData() {
//   // Use the environment variable, or default to localhost for development
//   const baseUrl = `../api/posts`;
//   const res = await fetch(baseUrl, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'applicaiton/json'
//     }
//   })
//   if (!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json();
// }

// const Page = async () => {
//   try {
//     const posts = await getData();
//     console.log(posts);
//     return (
//       <main className="flex min-h-screen flex-col justify-between p-24 h-14 ">
//         <AddPost />
//         <PostList post={posts}/>
//       </main>
//     );
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return <div>Error fetching data</div>;
//   }
// }

// export default Page;

import React from "react";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import { useEffect, useState } from "react";


async function getData() {
  // Use the correct relative path to your API endpoint
  const baseUrl = "/api/posts";
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setPosts(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 h-14 ">
      <AddPost />
      {error ? (
        <div>Error fetching data</div>
      ) : (
        <PostList posts={posts} />
      )}
    </main>
  );
}

export default Page;

