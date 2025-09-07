import React from 'react'

export const ClientLogos = () => {
  // Tableau des logos (remplace les liens par tes vraies images)
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
    "/logos/logo9.png",
    "/logos/logo10.png",
    "/logos/logo11.png",
    "/logos/logo12.png",
    "/logos/logo13.png",
    "/logos/logo14.png",
    "/logos/logo15.png",
    "/logos/logo16.png",
    "/logos/logo17.png",
  
  ]

  return (
    <section className="w-full py-16 mt-8 px-4 mt-[100px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4  arsenal-sc-regular">
          We are happy to work with incredible clients
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Fortune 500 companies and renowned global brands place their trust in
          our products, solutions, and bespoke software development services.
        </p>

        {/* Logos en flex-wrap */}
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow-sm"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
