// url: http://localhost:3000/api/posts/2343243243434343
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    try {
        const { id } = params;
        const post = await client.post.findUnique({
            where: {
                id
            }
        });
        if(!post){
            return NextResponse.json({status: 404}, {message: "Post not found"})
        }
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({status: 500}, {message: "Error getting post", error})
        
    }
}

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { title, listOfActors, releaseYear } = body;

        const updatePost = await client.post.update({
            where: {
                id
            },
            data: {
                title,
                listOfActors,
                releaseYear
            }
        });
        if(!updatePost){
            return NextResponse.json({status: 404}, {message: "Post not found"})
        }
        return NextResponse.json(updatePost);
        
    } catch (error) {
        return NextResponse.json({status: 500}, {message: "Error updating post", error})
    }
}

export const DELETE = async (request, {params}) => {
    try {
        const { id } = params;
        await client.post.delete({
            where: {
                id
            }
        });
        return NextResponse.json({status: 200}, {message: "Post deleted"});
        
    } catch (error) {
        return NextResponse.json({status: 500}, {message: "Error deleting post", error})
    }
}


