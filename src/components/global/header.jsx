import React from 'react'
import {
  ArrowLeft,
  Search,
  Star,
  Settings,
  Share2,
  User,
  MoreHorizontal,
} from 'lucide-react'

export const Header = () => {
  return (
    <div className="flex items-center px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center flex-1">
        <button className="p-2 mr-2 rounded-full hover:bg-gray-100">
          <ArrowLeft size={20} />
        </button>
        <button className="p-2 mr-2 rounded-full hover:bg-gray-100">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15 6H9L12 2Z" fill="currentColor" />
            <circle
              cx="12"
              cy="14"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-1.5 w-full max-w-xl">
          <Search size={16} className="text-gray-500 mr-2" />
          <span className="text-gray-800">https://www.canva.com</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Star size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Share2 size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  )
}
