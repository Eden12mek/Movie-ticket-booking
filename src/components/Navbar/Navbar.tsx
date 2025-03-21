import React from 'react'
import Link from 'next/link'
import './Navbar.css'
import { BiSearch } from 'react-icons/bi'
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDropDownFill } from 'react-icons/ri'
import logo from '@/assets/movie-logo.png'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav>
      <div className="left">
      <Image src={logo} alt="logo" width={100}/>
      </div>
      <div className='searchbox'>
                    <BiSearch className='searchbtn' />
                    <input type="text" placeholder="Search For a Movie" />
                </div>
      <div className="right">
        <p className="dropdown">Bahirdar <RiArrowDropDownFill className='dropicon'/></p>
        <Link href="/" className='theme_btn1 linkstylenone '> Logout</Link>
        <Link href="/" className='linkstylenone'>
          <FaUserAlt className='theme_icon1'/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar