import React from 'react';

const Loading = () => {
    return (
        <div className="animate-pulse space-y-6 mt-10">
            <div className="flex w-full gap-4 flex-col md:flex-col lg:flex-row">
                <div className="bg-gray-300 h-[300px] lg:w-2/4 rounded-lg"></div>

                <div className="hidden md:flex flex-col md:flex-row lg:flex-col gap-4 lg:w-1/4">
                    <div className="bg-gray-300 h-[140px] rounded-lg"></div>
                    <div className="bg-gray-300 h-[140px] rounded-lg"></div>
                </div>

                <div className="hidden lg:block lg:w-1/4">
                    <div className="bg-gray-300 h-[300px] rounded-lg"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-300 h-[220px] rounded-lg"></div>
                ))}
            </div>
        </div>
    );
};

export default Loading;