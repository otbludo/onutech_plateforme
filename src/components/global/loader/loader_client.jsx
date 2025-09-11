import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ClientLogosSkeleton = () => {
    const skeletonItems = Array.from({ length: 15 }); // 8 logos simulés

    return (


        <div className="flex flex-wrap gap-8 max-w-4xl justify-center items-center">
            {skeletonItems.map((_, index) => (
                <div
                    key={index}
                    className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow-sm"
                >
                    <Skeleton circle width={64} height={64} />
                </div>
            ))}
        </div>



    );
};
