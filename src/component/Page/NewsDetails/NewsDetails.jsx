import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';
import jsonNewsData from '../../NesJson/news.json';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import SingleNewsCard from '../ShareNewsCard/SingleNewsCard';
import SingleNews from '../ShareNewsCard/SingleNews';
import Loading from '../Shared/Loading';

const NewsDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [news, setnewsDetails] = useState([]);

    useEffect(() => {
        setLoading(true);
        const findNews = jsonNewsData?.find(
            (news) => news?.id === parseInt(id)
        );

        setTimeout(() => {
            setnewsDetails(findNews || []);
            setLoading(false);
        }, 600);
    }, [id]);

    if (loading) return <Loading></Loading>

    console.log(news)
    return (
        <div>
            <p className="text-lg text-gray-900 mt-5 md:mt-10 md:ml-2 leading-snug shadow w-44 text-center rounded-full shadow-blue-300 border pt-1">
                {news?.category}
            </p>
            <div className='grid md:grid-cols-5  gap-4'>
                <div className=" md:px-4 border-gray-300 lg:col-span-4 border-r">
                    <h1 className="text-2xl font-bold mt-2 text-gray-900 leading-tight">
                        {news?.title}
                    </h1>
                    <div className='md:flex justify-between items-center md:border-y border-gray-400 my-2'>
                        <div className='flex gap-4 items-center border-y border-gray-400 md:border-0'>
                            <span className='text-red-600 font-bold'>|</span>
                            <p className="text-gray-700 text-sm">প্রকাশিতঃ {new Date(news?.publishDate)
                                .toLocaleDateString("bn-BD", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                    timeZone: "UTC",
                                })}</p>
                        </div>
                        <div className="flex items-center space-x-4 p-1">
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                <FaFacebook size={20} />
                            </button>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                            >
                                <FaWhatsapp size={20} />
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>




                    </div>
                    <div className="relative">
                        <img
                            loading='lazy'
                            src={news?.thumbnail}
                            alt={news?.title}
                            className="w-full md:h-[540px] shadow-lg"
                        />
                    </div>
                    <div className="mt-3 text-gray-800 text-lg leading-relaxed space-y-4">
                        <p className="text-sm text-gray-600 mt-1"> {news?.description}</p>
                    </div>
                </div>
                <div className='px-2 md:px-0'>
                    <div className='border border-gray-300 p-2 '>
                        <div className='shadow shadow-blue-300  text-center border mt-10 pt-1 rounded-full'>
                            <h3 className="text-lg">জনপ্রিয় সংবাদগুলো</h3>
                        </div>
                        <div className="space-y-3 mt-4">
                            {jsonNewsData?.slice(0, 8)?.map((item, index) => (
                                <div key={item?._id} className='cursor-pointer'>
                                    <NavLink to={`/specifiqNews/${item?.id}`}>
                                        <div className="border-b border-gray-300 shadow-md p-2">
                                            <h4 className="text-base text-black font-medium hover:text-blue-600 cursor-pointer line-clamp-3">
                                                {item?.title}
                                            </h4>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold mt-12 mb-4 px-4">প্রাসঙ্গিক খবর</h2>
            <div className="hidden md:grid md:grid-cols-4 gap-6 pb-10 ">
                {jsonNewsData?.slice(0, 4).map((item) => (
                    <SingleNews news={item} key={item?._id}></SingleNews>
                ))}
            </div>
            <div className="md:hidden grid grid-cols-1 gap-6 px-4 pb-10 ">
                {jsonNewsData?.slice(0, 4).map((item) => (
                    <SingleNewsCard news={item} key={item?._id}></SingleNewsCard>
                ))}
            </div>
        </div>
    );
};

export default NewsDetails;