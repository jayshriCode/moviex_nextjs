// import styles from "@/app/styles/Navbar.module.css"
'use client'
import Link from "next/link"
import { useState } from "react";


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClick = () => {
    openMenu ? setOpenMenu(false):setOpenMenu(true);
    
  }

  return (
    <>
      <nav className='p-5 flex justify-between '>
        <a className={openMenu ? `pr-2 text-2xl font-bold hidden` : `pr-2 text-2xl font-bold`} href="#" >MovieX</a>
        <ul id="menu" className={openMenu ? `md:flex  mx-5 list-none font-semibold  w-full md:items-center md:w-auto` : `md:flex space-x-8 mx-5 list-none font-semibold hidden w-full md:items-center md:w-auto`} >

          <li>
            <Link className="p-2" href="/">Home</Link>

          </li>
          <li>
            <Link className="p-2" href="/about">About</Link>
          </li>
          <li>
            <Link className="p-2" href="/movie">Movie</Link>
          </li>
          <li>
            <Link className="p-2" href="/contact">Contact</Link>
          </li>

        </ul>
        <svg onClick={handleMenuClick} className={openMenu ? `hidden w-6 h-6 cursor-pointer md:hidden ` : `w-6 h-6 cursor-pointer md:hidden block`} id="menu-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg onClick={handleMenuClick} className={openMenu?`md:hidden w-6 h-6`:`hidden md:hidden w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>




      </nav>

    </>
  )
}

export default Navbar
