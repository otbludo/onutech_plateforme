import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PartnerscrolltSkeleton = () => {
    const skeletonItems = Array.from({ length: 8 }); // nombre de cartes simulées

    return (


        <div className="overflow-hidden relative w-full">
            <div className="flex space-x-4 animate-scroll mt-14">
                {skeletonItems.map((_, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-48 h-56 rounded-lg overflow-hidden bg-purple-50"
                    >
                        {/* Image principale */}
                        <Skeleton width={`100%`} height={`100%`} />
                    </div>
                ))}
            </div>
        </div>

    );
};
