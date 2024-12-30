import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate= useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()

    const text = e.target[0].value

    if(text.trim() === ""){
      return;
    }

    navigate(`/results?search_query=${text}`)
  }
  return (
   <header className='flex justify-between items-center p-4'>
    <Link className='items-center flex gap-2' to="/">
    <img className='w-[50px]' src="/youtube.png" alt="logo" />
    <h1 className='text-2xl hidden md:block font-mono' >Youtube</h1>
    </Link>

    <form onSubmit={handleSubmit} className='group flex border border-gray-400 rounded-[20px] overflow-hidden'>
    <input
  type="text"
  placeholder="Ara.."
  className="group-hover:border-blue-500 group-hover:border bg-black text-white pl-2 pr-[140px] max-md:pr-[90px] max-sm:pr-[20px] py-2 outline-none rounded-l-[20px] focus:border-blue-500"
/>


      <button className='border-l px-4 text-2xl bg-zinc-800'>
        <IoSearch/>
      </button>
    </form>

    <div className='flex gap-3 text-xl cursor-pointer  '>
      <FaBell className='hover:text-gray-400 transition duration-[250ms]' />
      <IoVideocam className='hover:text-gray-400 transition duration-[250ms]' />
      <MdVideoLibrary className='hover:text-gray-400 transition duration-[250ms]'/>
    </div>
   </header>
  )
}

export default Header
