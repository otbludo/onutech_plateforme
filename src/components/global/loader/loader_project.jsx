import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ProjetsSkeleton = () => {
    const skeletonItems = Array.from({ length: 8 });

    return (
        <div className="max-w-5xl mx-auto py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {skeletonItems.map((_, index) => (
                    <div key={index} className="flex flex-col h-full p-4 bg-white rounded-md shadow-md">
                        <Skeleton width={`60%`} height={20} className="mb-2" />
                        <Skeleton height={150} className="mb-2" />
                        <Skeleton width={`80%`} height={16} className="mb-1" />
                        <Skeleton width={`50%`} height={16} className="mb-3" />
                        <div className="flex justify-between items-center mt-auto">
                            <Skeleton width={60} height={16} />
                            <div className="flex w-full gap-4 items-end justify-end">
                                <Skeleton circle width={24} height={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
