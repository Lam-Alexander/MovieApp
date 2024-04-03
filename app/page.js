// import AddPost from "./components/AddPost";
// import PostList from "./components/PostList";


// async function getData() {
//   const res = await fetch('https://movie-alfmfn3j9-lam-alexanders-projects.vercel.app/api/posts', {cache: "no-cache"})
//   if(!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json();
// }

// // async function getData() {
// //   const baseUrl = 'http://localhost:3000/api/posts';
// //   const res = await fetch(baseUrl, {
// //     method: 'GET',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     }
// //   })
// //   if (!res.ok) {
// //     throw new Error("Failed to fetch data")
// //   }
// //   return res.json();
// // }

// const page = async () => {
//   try {
//     const posts = await getData();
//     console.log(posts);
//     return (
//       <main className="flex min-h-screen flex-col justify-between p-24 h-14 ">
//         <AddPost />
//         <PostList post={posts} />
//       </main>
//     );
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return <div>Error fetching data</div>;
//   }
// }

// export default page;

import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

async function getData() {
  const res = await fetch('https://movie-alfmfn3j9-lam-alexanders-projects.vercel.app/api/posts', {cache: "no-cache"})
  if(!res.ok) {
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
    <main className="flex min-h-screen flex-col justify-between p-24 h-14">
      <AddPost />
      {error ? (
        <div>Error fetching data: {error.message}</div>
      ) : (
        <PostList posts={posts} />
      )}
    </main>
  );
};

export default Page;
