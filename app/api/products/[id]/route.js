import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request, { params }) {
    const { id } = params;
    // console.log(id, "id dTA")
    const newdata = await prisma.products.findUnique({
        where: {
            id: parseInt(id)
        },
    })
    //  console.log(newdata, "ew dTA")
    return NextResponse.json(newdata)


}

export async function PUT(request, { params }) {
    const { id } = params;
console.log(id)
    const { newTitle: title,  newDescription : description } = await request.json();
    await prisma.products.update({

       where: { id: parseInt(id) }, data:{ title, description }
    });
    return NextResponse.json({message: "product updated" }, { status: 200 });
}  