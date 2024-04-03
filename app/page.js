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
  const baseUrl = `https://movie-64mjxrq8y-lam-alexanders-projects.vercel.app/api/posts`;
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

