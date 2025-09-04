import React from 'react'
export const Home = () => {
    return (
            <div className="max-w-5xl mx-auto">
                <div className="relative">
                    {/* Top section */}
                    <div className="flex flex-row justify-between mb-4 md:mb-0">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold border-b-2 border-black mb-1">
                                CECB
                            </h2>
                            <a href="#" className="text-sm hover:underline">
                                Plus d'infos ›
                            </a>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold border-b-2 border-black mb-1">
                                OIBT
                            </h2>
                            <a href="#" className="text-sm hover:underline">
                                Plus d'infos ›
                            </a>
                        </div>
                    </div>
                    {/* House image */}
                    <div className="w-full flex justify-center my-4">
                        <img
                            src="./assets/img/maison.png"
                            alt="House inspection diagram"
                            className="w-full max-w-3xl h-auto"
                        />
                    </div>
                    {/* Bottom section */}
                    <div className="flex flex-row justify-between mt-4 md:mt-0">
                        <div>
                            <h2 className="text-2xl font-bold border-b-2 border-black mb-1">
                                AMIANTE
                            </h2>
                            <a href="#" className="text-sm hover:underline">
                                Plus d'infos ›
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold border-b-2 border-black mb-1">
                                RADON
                            </h2>
                            <a href="#" className="text-sm hover:underline">
                                Plus d'infos ›
                            </a>
                        </div>
                    </div>
                </div>
            </div>

    )
}
