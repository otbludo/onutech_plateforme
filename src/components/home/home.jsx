import React from "react";
import { Bar_search } from "../global/bar_search";

export const Homecomponent = () => {
  const profiles = [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bg: "bg-yellow-100",
      alt: "Profile 1",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bg: "bg-green-50",
      alt: "Profile 2",
    },
    {
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bg: "bg-blue-50",
      alt: "Profile 3",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bg: "bg-green-100",
      alt: "Profile 4",
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bg: "bg-yellow-50",
      alt: "Profile 5",
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bg: "bg-purple-50",
      alt: "Profile 6",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full gap-4 max-w-6xl mx-auto px-4 pt-16 pb-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full py-2 px-4 flex items-center shadow-sm">
            <div className="w-5 h-5 bg-blue-600 rounded-full mr-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm font-medium">
              Your #1 Platform for Skill Sharing
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 arsenal-sc-regular">
            Showcase Your Mastery.
            <br />
            Get Connected
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create your profile, showcase your skills, and let employers find you.
          </p>
        </div>

        {/* Search Form */}
        <Bar_search />
        {/* Profile Gallery Auto-Scroll */}
        <div className="overflow-hidden relative w-full">
          <div className="flex space-x-4 animate-scroll mt-14">
            {profiles.concat(profiles).map((profile, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-48 h-56 rounded-lg overflow-hidden ${profile.bg}`}
              >
                <img
                  src={profile.src}
                  alt={profile.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
