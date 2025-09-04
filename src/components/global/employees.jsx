import React from "react";

const profiles = [
  {
    name: "Zrand Hobs",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "4.8 (6)",
    skills: ["Gimp", "Wordpress"],
    bg: "bg-white",
  },
  {
    name: "Dorothy Wood",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: "4.8 (6)",
    skills: ["Elementor", "Wix", "Illustrator"],
    bg: "bg-white",
  },
  {
    name: "Timothy Baker",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: "4.8 (6)",
    skills: ["Figma", "Elementor", "Wordpress"],
    bg: "bg-white",
  },
  {
    name: "Shane Pratt",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: "4.8 (6)",
    skills: ["Figma", "Wordpress", "Gimp"],
    bg: "bg-white",
  },
  // ➕ tu peux ajouter tous les autres ici
];

export const Employees = () => {
  return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 arsenal-sc-regular">Découvrez les</h1>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 arsenal-sc-regular">Employees</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find the best master for your company and boosts your business 10x!
          </p>
        </div>

        {/* Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`${profile.bg} rounded-lg p-6 flex flex-col items-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,50,150,0.2)] transition duration-300 hover:border-2 border-white hover:bg-[rgba(0,50,150,0.2)]`}
            >
              <div className="w-24 h-24 mb-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 
                  1.371 1.24.588 1.81l-2.8 2.034a1 1 0 
                  00-.364 1.118l1.07 3.292c.3.921-.755 
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 
                  00-1.175 0l-2.8 2.034c-.784.57-1.838-
                  .197-1.539-1.118l1.07-3.292a1 1 0 
                  00-.364-1.118L2.98 8.72c-.783-.57-
                  .38-1.81.588-1.81h3.461a1 1 0 
                  00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-700 ml-1">{profile.rating}</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-1">
                {profile.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{profile.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {profile.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
