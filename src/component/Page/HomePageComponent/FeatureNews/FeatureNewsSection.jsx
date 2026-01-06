import React from 'react';
import jsonNewsData from '../../../NesJson/news.json';
import SingleNewsCard from '../../ShareNewsCard/SingleNewsCard';
import SingleNews from '../../ShareNewsCard/SingleNews';
import { NavLink } from 'react-router';

const FeatureNewsSection = () => {
    return (
        <section className='pt-5'>
            <div className="md:hidden flex flex-col gap-5 col-span-2">
                <NavLink to={`/specifiqNews/${jsonNewsData[0]?.id}`}>
                    <div className="border-b pb-3" >
                        <img
                            src={jsonNewsData[0]?.thumbnail}
                            alt={jsonNewsData[0]?.title}
                            className="w-full h-[220px] sm:h-[260px] md:h-[360px] rounded"
                        />
                        <h3 className="text-xl font-bold mt-3 text-red-600 hover:text-blue-600">
                            {jsonNewsData[0]?.title}
                        </h3>
                        <h1 className='my-1'>{jsonNewsData[0]?.category}</h1>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2"> {jsonNewsData[0]?.description}</p>
                        <p className="text-gray-700 text-sm mt-1">{new Date(jsonNewsData[0]?.publishDate)
                            .toLocaleDateString("bn-BD", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                timeZone: "UTC",
                            })}</p>
                    </div>
                </NavLink>
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {jsonNewsData?.slice(1, 8).map((news, i) => (
                        <SingleNewsCard key={i} news={news}></SingleNewsCard>
                    ))}
                </div>
                <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SingleNews news={jsonNewsData[8]}></SingleNews>
                    <SingleNews news={jsonNewsData[9]}></SingleNews>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
                <div className="flex flex-col gap-5 col-span-1 md:border-r border-gray-400">
                    {jsonNewsData?.slice(3, 8).map((news, i) => (
                        <SingleNewsCard news={news}></SingleNewsCard>
                    ))}
                </div>

                <div className="hidden md:flex flex-col gap-5 col-span-2 border-r border-gray-400 pr-2">
                    <NavLink to={`/specifiqNews/${jsonNewsData[0]?.id}`}>
                        <div className="border-b pb-3 cursor-pointer" >
                        <img
                            src={jsonNewsData[0]?.thumbnail}
                            alt={jsonNewsData[0]?.title}
                            className="w-full h-[220px] sm:h-[260px] md:h-[360px]  rounded"
                        />
                        <h3 className="text-3xl text-red-600 font-bold mt-3 hover:text-blue-600">
                            {jsonNewsData[0]?.title}
                        </h3>
                        <h1 className='my-1'>{jsonNewsData[0]?.category}</h1>

                        <p className="text-lg text-gray-600 mt-1 line-clamp-3" >{jsonNewsData[0]?.description}</p>
                        <p className="text-gray-700 text-sm mt-1">{new Date(jsonNewsData[0]?.publishDate)
                            .toLocaleDateString("bn-BD", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                timeZone: "UTC",
                            })}</p>
                    </div>
                    </NavLink>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SingleNews news={jsonNewsData[1]}></SingleNews>
                        <SingleNews news={jsonNewsData[2]}></SingleNews>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1  gap-4">
                        <SingleNews news={jsonNewsData[8]}></SingleNews>
                        <SingleNews news={jsonNewsData[9]}></SingleNews>
                        <SingleNews news={jsonNewsData[10]}></SingleNews>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureNewsSection;