import React from 'react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from 'lucide-react';

export const Architecture = () => {
    return (
        <div className="relative  flex justify-center items-center h-[600px] ">
            {/* Left image - person with bag */}
            <div className="absolute left-6 bottom-0 z-10 w-[260px] h-[400px] shadow-lg">
                <img
                    src="./assets/img/architecture1.jpg"
                    alt="Blogger portrait"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Middle image - plants */}
            <div className="absolute left-[180px] md:left-[240px] top-0 z-0 w-[200px] h-[300px] shadow-lg">
                <img
                    src="./assets/img/architecture.jpg"
                    alt="Plants and decoration"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Right content box */}
            <div className="absolute md:right-8 z-20 bg-white p-8 px-[50px] md:px-8 w-[450px] h-auto shadow-lg">
                <h1 className="text-3xl text-[#8a9a8b] font-light mb-1">
                    Welcome. I'm Jennifer!
                </h1>
                <p className="text-sm text-[#8a9a8b] uppercase tracking-wider mb-6">
                    web developer | traveler | mother
                </p>
                <p className="text-gray-700 mb-4 text-sm">
                    Hello Blogger was created for any blogging niche. Choose from 1 of
                    the 3 homepages, or create your own by mixing the blocks that come
                    with the theme to create your perfect layout.
                </p>
                <p className="italic text-gray-700 mb-6 text-sm">
                    Candy chocolate cake I love jujubes cotton candy jujubes. Tootsie
                    roll marshmallow soufflé oat cake.
                </p>
               
            </div>
        </div>


    )
}
