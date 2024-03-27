import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {cache: "no-cache"})
  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}
const page = async() =>{

  const posts = await getData()
  console.log(posts)
  return (
    
    <main className="flex min-h-screen flex-col justify-between p-24">
    <AddPost />
    <PostList post={posts}/>
    </main>
  );
}

export default page;
