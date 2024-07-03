import React from 'react'
import Link from "next/link";
import { BiAnchor } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <nav className=" flex space-x-10 border-b-2 mb-5 h-14 items-center">
<Link className='ml-8 text-3xl  ' href="Home"><BiAnchor />

</Link>
<ul className="flex space-x-6">
    
<li className=" cursor-pointer hover:text-red-700 transition-colors"><Link href="Home">Home</Link></li>
    <li className=" cursor-pointer "><Link className='hover:text-red-700 transition-colors'  href="/Products">Products</Link></li>
    <li className="  cursor-pointer"><Link href="/Addproduct">Add product</Link></li>
    <li className=" text-orange-500 cursor-pointer"><a href="" className="font-bold">Logout</a></li>
   </ul>

</nav>
    </div>
  )
}

export default Navbar
