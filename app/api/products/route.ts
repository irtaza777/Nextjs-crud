import {NextRequest,NextResponse} from "next/server";
import {z} from "zod"
import prisma from "@/prisma/client";
import { PiDatabaseDuotone } from "react-icons/pi";

const InsertProductSchema=z.object({
    title:z.string().min(1).max(255),
    description:z.string().min(1).max(255)
})
export async function POST(request:NextRequest){
  const body=  await request.json();
  const validation=InsertProductSchema.safeParse(body);
  if(!validation.success){
    return NextResponse.json(validation.error.errors,{status:400})
  }
 const newdata= await prisma.products.create({data:{title:body.title,description:body.description}});
//console.log(newdata)
 return NextResponse.json(newdata,{status:201})


}
export async function GET(){
 const newdata= await prisma.products.findMany();
 return NextResponse.json(newdata,{status:201})


}
export async function DELETE(request:NextRequest){
  const req = await request.json();
  const proid=req.pid;
console.log(PiDatabaseDuotone)
  const deleteProduct= await prisma.products.delete({
    where: {
      id: proid
    },
  })
  console.log(deleteProduct)
    return NextResponse.json( deleteProduct,{status:201})
 
 
 }