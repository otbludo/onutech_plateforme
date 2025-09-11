import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const EmployeesSkeleton = () => {
    const skeletonItems = Array.from({ length: 8 });

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skeletonItems.map((_, index) => (
                <div key={index} className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md">
                    {/* Centered skeletons */}
                    <div className="flex flex-col items-center mb-4">
                        <Skeleton circle width={96} height={96} className="mb-4" />
                        <Skeleton width={166} height={20} className="mb-2" />
                        <Skeleton width={96} height={16} className="mb-4" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <Skeleton width={60} height={20} />
                        <Skeleton width={60} height={20} />
                    </div>

                    {/* Action buttons */}
                    <div className="flex w-full gap-4 items-end justify-end">
                        <Skeleton circle width={24} height={24} />
                    </div>
                </div>
            ))}
        </div>
    );
};
