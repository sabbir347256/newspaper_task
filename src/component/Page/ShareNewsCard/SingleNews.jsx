import React from 'react';
import { NavLink } from 'react-router';

const SingleNews = ({ news }) => {
    return (
        <NavLink to={`/specifiqNews/${news?.id}`}>
            <div
                className="cursor-pointer bg-white border-b border-gray-300 border-r pr-2 w-full">
                <img
                    loading='lazy'
                    src={news?.thumbnail}
                    alt="thumb"
                    className="w-full h-[220px] md:h-[180px]"
                />
                <div className="p-4">
                    <h4 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {news?.title}
                    </h4>
                    <h1 className='my-1'>{news?.category}</h1>
                    <div className="text-md text-gray-700 whitespace-pre-line line-clamp-2">
                        {news?.description}
                    </div>
                    <p className="text-gray-700 text-sm mt-1">{new Date(news?.publishDate)
                        .toLocaleDateString("bn-BD", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            timeZone: "UTC",
                        })}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default SingleNews;