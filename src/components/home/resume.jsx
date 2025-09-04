import React from 'react'
import {
  MessageSquareIcon,
  BriefcaseIcon,
  UsersIcon,
  FileTextIcon,
} from 'lucide-react';

export const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 arsenal-sc-regular">
          Why Choose
          <br />
          Masters in Me?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations
        </p>
      </div>
      <div className="relative w-full max-w-5xl mt-10">
        {/* Central image */}
        <div className="relative z-10 mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <div className="absolute inset-0 bg-blue-50 rounded-full -z-10"></div>
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/viBWmUyHREKma21kEmk1Bv/Screenshot_2025-09-04_102014.png"
            alt="Professional headshot"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
            Video Resume
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-blue-100"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border-2 border-blue-100"></div>
        {/* Top left card - Showcase Work */}
        <div className="absolute top-0 left-0 md:left-16 bg-white rounded-xl p-4 shadow-md w-64">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-800 mb-2">
              <BriefcaseIcon size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Showcase Work</h3>
            <p className="text-sm text-gray-500 mb-3">
              Showcase your project to stand out among all
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
              Add Work
            </button>
          </div>
        </div>
        {/* Top right card - Networking */}
        <div className="absolute top-0 right-0 md:right-16 bg-white rounded-xl p-4 shadow-md w-64">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-800 mb-2">
              <MessageSquareIcon size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Networking Opportunities
            </h3>
          </div>
        </div>
        {/* Bottom right card - Resume Builder */}
        <div className="absolute bottom-0 right-0 md:right-16 bg-white rounded-xl p-4 shadow-md w-64">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-800 mb-2">
              <FileTextIcon size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Resume Builder</h3>
            <p className="text-sm text-gray-500 mb-3">
              Create a professional resume using our built-in resume builder
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
              Build Resume
            </button>
          </div>
        </div>
        {/* Bottom left card - 100K+ */}
        <div className="absolute bottom-0 left-0 md:left-16 bg-white rounded-xl p-4 shadow-md w-64">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-800 mb-2">
              <UsersIcon size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">100K +</h3>
            <p className="text-sm text-gray-500">Worldwide Active Users</p>
          </div>
        </div>
        {/* Decorative curved lines */}
        <div className="absolute top-1/4 right-1/4 text-blue-800 transform rotate-45">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6c0 7-10 7-10 14 0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6c-7 0-7-10-14-10-3.3 0-6 2.7-6 6s2.7 6 6 6" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-blue-800 transform -rotate-135">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6c0 7-10 7-10 14 0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6c-7 0-7-10-14-10-3.3 0-6 2.7-6 6s2.7 6 6 6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
