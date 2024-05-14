import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center">
          <div>
            <Image src="/images/navLogo.png" alt="Logo" className="h-8" width={100} height={45} />
            <p className="mt-2">The interactive Hairstyling Program teaches students the latest techniques in hairstyling, haircutting, and coloring from experienced cosmetology professionals in a state-of-the-art salon setting.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8 md:mt-0">
            <div>
              <h4 className="font-bold mb-2">Our Pages</h4>
              <ul>
                <li><a href="/landing" className="hover:text-gray-400">Home</a></li>
                <li><a href="/portal" className="hover:text-gray-400">My Portal</a></li>
                <li><a href="/bookings" className="hover:text-gray-400">Bookings</a></li>
                <li><a href="/profile" className="hover:text-gray-400">Profile</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">More Information</h4>
              <ul>
                <li>Northwest Campus</li>
                <li>13501 W Grand Avenue</li>
                <li>Surprise, AZ 85374</li>
                <li>Main Office: 623.877.6914</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Our Links</h4>
              <div className="flex space-x-4">
                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer