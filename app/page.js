import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

async function getData() {
  const API_URL = 'https://movie-1gewdwd80-lam-alexanders-projects.vercel.app/api/posts';
  const res = await fetch(API_URL, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async() =>{

  const posts = await getData()
  console.log(posts)
  return (
    
    <main className="flex min-h-screen flex-col justify-between p-24 h-14 ">
    <AddPost />
    <PostList post={posts}/>
    </main>
  );
}

export default page;