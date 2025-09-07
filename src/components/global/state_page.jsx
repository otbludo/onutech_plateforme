import React from 'react'
export const State_page = () => {
  return (
    <div className="w-full h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Top gradient bar */}
      <div className="w-full h-2 bg-gradient-to-r from-violet-500 to-sky-300 absolute top-0 left-0 z-10"></div>
      {/* Main content with centered radial gradient */}
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        {/* Centered gradient effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-300/70 via-purple-300/70 to-sky-300/70 blur-3xl opacity-50"></div>
        </div>
        <div className="text-center px-4 z-10">
          <h2 className="text-indigo-900 text-xl mb-4">startup 3</h2>
          <h1 className="text-indigo-900 text-7xl font-bold mb-6">Blocks</h1>
          <p className="bg-gradient-to-r from-violet-500/80 to-sky-500/80 bg-clip-text text-transparent text-xl max-w-md mx-auto">
            Start with selecting blocks from pages on the left panel
          </p>
        </div>
      </div>
    </div>
  )
}
