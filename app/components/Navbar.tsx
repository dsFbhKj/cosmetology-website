import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
     {/* Header */}
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center text-white">
          <div>
            <Image src="/images/navLogo.png" alt="Logo" className="h-8" width={100} height={45} />
          </div>
          <div className="flex space-x-4">
            <a href="/portal" className="hover:text-gray-400">My Portal</a>
            <a href="/bookings" className="hover:text-gray-400">Bookings</a>
            <a href="/profile" className="hover:text-gray-400">Profile</a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar