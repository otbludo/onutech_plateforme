import React from 'react'

export const Construction  = () => {
  return (
    <div
      className="relative w-full h-[500px] mt-[100px] "
      
    >
      {/* Left beige rectangle */}
      <div className="absolute left-8 top-8 w-48 h-80 bg-stone-300 rounded-sm rotate-6"></div>
      {/* Right beige rectangle */}
      <div className="absolute right-[30px] md:right-1/4 top-8 w-48 h-80 bg-stone-300 rounded-sm -rotate-6"></div>
      {/* Floral image positioned behind the white card */}
      <div className="absolute left-1/3 top-16 transform -translate-x-1/2 z-10 -rotate-6">
        <img
          src="./assets/img/architecture.jpg"
          alt="Floral arrangement"
          className="w-64 h-80 object-cover rounded-sm opacity-90"
        />
      </div>
      {/* White card with text and button */}
      <div className="absolute left-1/2 top-24 transform -translate-x-1/2 z-40 md:z-20 bg-white p-8 w-72 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">
          LET'S WORK TOGETHER
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          faucibus et cursus varius id varius.
        </p>
      </div>
      {/* Polaroid-style photo on the right */}
      <div className="absolute top-[260px] md:top-0 right-20 top-32 z-30 bg-white p-3 shadow-lg transform rotate-3">
        <img
          src="./assets/img/architecture1.jpg"
          alt="Portrait"
          className="w-48 h-56 object-cover"
        />
        <div className="bg-white h-8 flex items-center justify-center">
          <p className="text-xs text-gray-500 font-handwritten">
            NO LIFEGUARD ON DUTY
          </p>
        </div>
      </div>
    </div>
  )
}
