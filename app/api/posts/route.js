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
    // Set CORS headers for POST request
    res.setHeader('Access-Control-Allow-Origin', 'https://movie-app-plum-alpha.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const body = await req.json();
    const { title, listOfActors, releaseYear } = body;
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
    // Set CORS headers for GET request
    res.setHeader('Access-Control-Allow-Origin', 'https://movie-app-plum-alpha.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const posts = await client.post.findMany({
      orderBy: {
        createdAt: 'desc', 
      },
    });
    return NextResponse.json(posts); 
  } catch (error) {
    return NextResponse.json({ message: "Error getting posts", error }, 
    { status: 500 });
  }
};
