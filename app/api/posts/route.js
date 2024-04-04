// import client from "../../libs/prismadb";
// import { NextResponse } from "next/server";

// // url: http://localhost:3001/api/posts

// export const POST = async (req) => {
//   try {
//     const body = await req.json();
//     const { title, listOfActors, releaseYear } = body;
//     const newPost = await client.post.create({
//       data: {
//         title,
//         listOfActors,
//         releaseYear
//       },
//     });
//     return NextResponse.json(newPost);
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error creating post", error },
//       { status: 500 }
//     );
//   }
// };

// export const GET = async () => {
//   try {
    
//     const posts = await client.post.findMany({
//       orderBy: {
//         createdAt: 'desc', 
//       },
//     });
//     return NextResponse.json(posts); 
//   } catch (error) {
    
//     return NextResponse.json({ message: "Error getting posts", error }, 
//     { status: 500 });
//   }
// };



import client from "../../libs/prismadb";
import { NextResponse } from "next/server";

// url: http://localhost:3001/api/posts

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, description } = body;
    const newPost = await client.post.create({
      data: {
        title,
        listOfActors,
        releaseYear
      },
    });
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating post", error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const posts = await client.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error getting posts", error }
    );
  }
}
