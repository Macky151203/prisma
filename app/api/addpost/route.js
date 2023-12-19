import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
export async function POST(request){
    const res=await request.json()
    console.log(res)
    console.log(res.content)
    console.log(res.title)
    const{title,content}=res;
    const result=await prisma.post.create({
        data:{
            title,
            content,
            published:true,
            author:{
                create:{
                    name:'subramaniyan'
                }
            }
        }
    })

    return NextResponse.json({data:res},{status:200})
}