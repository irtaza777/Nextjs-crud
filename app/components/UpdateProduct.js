"use client";

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ product}) {
  const id=(product.id);
  const [newTitle, setNewTitle] = useState(product.title);
  const [newDescription, setNewDescription] = useState(product.description);
  const router=useRouter()

  useEffect(()=>{

  },[])
  const handleupdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

    } catch (error) {
      console.log(error);
    }
    router.push("/Products")

  };

  return (
    <div>


            <form class="max-w-sm mx-auto" onSubmit={handleupdate}>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product title</label>
                    <input value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }}type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-5">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product description</label>
                    <textarea value={newDescription} onChange={(e) => { setNewDescription(e.target.value) }} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>

        </div>
  );
}