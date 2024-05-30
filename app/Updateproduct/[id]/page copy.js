"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Updateproductpage = ({ params }) => {
    const [ntitle, setNtitle] = useState('');
    const [ndescription, setNdescription] = useState('');

    const { id } = params;
    useEffect(() => {
        axios.get(`http://localhost:3000/api/products/${id}`).then(res => {
            setNtitle(res?.data?.title);
            setNdescription(res?.data?.description)

            return () => {
                console.log('cleaned up');
            };
        }, [])

    })

    const handleTitle = (e) => {

    }
    const handleupdate = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "PUT",
            body: JSON.stringify({ ntitle, ndescription })

        });
        if (!res.ok) {
            throw new Error("Failed to update product");
          }



    }

    return (
        <div>


            <form class="max-w-sm mx-auto" onSubmit={handleupdate}>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product title</label>
                    <input value={ntitle} onChange={(e) => handleTitle(e)} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-5">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product description</label>
                    <textarea value={ndescription} onChange={(e) => { setNdescription(e.target.value) }} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>

        </div>
    )
}

export default Updateproductpage
