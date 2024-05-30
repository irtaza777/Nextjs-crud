"use client";
import React from 'react'
import { Button } from '@radix-ui/themes'
import { TextField, TextArea } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';

//import SimpleMDE from "react-simplemde-editor";
//import "easymde/dist/easymde.min.css";
interface ProductForm {
  title: String,
  description: String
}
const AddProductPage = () => {
  const router=useRouter()
  const { register, handleSubmit } = useForm<ProductForm>();
  return (
    <form className='p-5 max-w-xl space-y-6'
      onSubmit={handleSubmit(async (data) => { await axios.post("http://localhost:3000/api/products", data); 
      router.push("Products");
    }
      
      
      )}>
      <h1 className='text-2xl'>Add a product</h1>

      <TextField.Root placeholder="Enter a new product" {...register("title")} />

      <TextArea placeholder="Product description" {...register("description")} />
      <Button>
        Add product</Button>   </form>
  )
}

export default AddProductPage
