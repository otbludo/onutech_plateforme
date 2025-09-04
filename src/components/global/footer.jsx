import React from 'react'
import {
    InstagramIcon,
    LinkedinIcon,
    Facebook,
    YoutubeIcon,
} from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-10 sm:py-16 px-4 sm:px-8 mt-8">
            <div className="container mx-auto">
                {/* Let's Connect Section */}
                <div className="mb-10 sm:mb-16">
                    <div className="flex mb-6">
                        <img src="./assets/img/connecton.png" alt="" className="w-[300px]"/>
                        <img src="./assets/img/nous.png" alt="" className="w-[200px]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <p className="text-white text-sm sm:text-base mb-2">
                                maximestudioindia@gmail.com
                            </p>
                            <p className="text-white text-sm sm:text-base">+91 98106 30905</p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl mb-2">Address</h3>
                            <p className="text-white text-sm sm:text-base">
                                304, DLF TOWER A, Jasola Vihar, New Delhi, Delhi 110025
                            </p>
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center">
                    {/* Logo and Description */}
                    <div className="max-w-xs">
                        <div className="flex items-center mb-3 sm:mb-4">
                            {/* Yellow triangular logo */}
                            <div className="mr-2">
                                <div className="flex">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full mr-1"></div>
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full mr-1 mt-2"></div>
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"></div>
                                </div>
                            </div>
                            <span className="text-base sm:text-lg font-medium">
                                Maxime Studio
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300">
                            As a digital creative agency, we combine creativity with technical
                            know-how.{' '}
                            <a href="#" className="text-white underline">
                                know more
                            </a>
                        </p>
                    </div>
                    {/* Navigation */}
                    <div className="flex flex-wrap gap-y-2 gap-x-4 sm:gap-x-6 md:gap-x-8">
                        <a
                            href="#"
                            className="text-sm sm:text-base text-white hover:text-gray-300"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-sm sm:text-base text-white hover:text-gray-300"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="text-sm sm:text-base text-white hover:text-gray-300"
                        >
                            Work
                        </a>
                        <a
                            href="#"
                            className="text-sm sm:text-base text-white hover:text-gray-300"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-sm sm:text-base text-white hover:text-gray-300"
                        >
                            Blog
                        </a>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">
                            <InstagramIcon size={18} className="sm:w-5 sm:h-5" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <LinkedinIcon size={18} className="sm:w-5 sm:h-5" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <Facebook size={18} className="sm:w-5 sm:h-5" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <YoutubeIcon size={18} className="sm:w-5 sm:h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
