import React from 'react';
import { NavLink } from 'react-router';

const SingleNewsCard = ({ news }) => {
    return (
        <NavLink to={`/specifiqNews/${news?.id}`}>
            <div
                key={news?._id}
                className="  bg-white  cursor-pointer border-b border-gray-300 pb-2"
            >

                <div className="flex gap-3">
                    <img
                        loading='lazy'
                        src={news?.thumbnail}
                        alt={news?.title || "featured"}
                        className="w-28 h-[80px] object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500">
                        {news?.title}
                    </h3>
                </div>
                <h1 className='my-1'>{news?.category}</h1>
                <div className="text-sm text-gray-700 whitespace-pre-line line-clamp-2">
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
        </NavLink>
    );
};

export default SingleNewsCard;