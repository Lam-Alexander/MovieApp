import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

// async function getData() {
//   const res = await fetch('/api/posts', {cache: "no-cache"})
//   if(!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json();
// }

async function getData() {
  // Use the environment variable, or default to localhost for development
  const baseUrl = `../api/post`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaiton/json'
    }
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

const Page = async () => {
  try {
    const posts = await getData();
    console.log(posts);
    return (
      <main className="flex min-h-screen flex-col justify-between p-24 h-14 ">
        <AddPost />
        <PostList post={posts}/>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}

export default Page;
