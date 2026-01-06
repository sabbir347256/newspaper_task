import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import jsonNewsData from '../../NesJson/news.json';
import SingleNews from '../ShareNewsCard/SingleNews';
import Loading from '../Shared/Loading';
import { VscLoading } from 'react-icons/vsc';
import SingleNewsCard from '../ShareNewsCard/SingleNewsCard';

const CategoryWiseNews = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        setLoading(true);
        const filtered = jsonNewsData?.filter(
            (news) => news?.category === id
        );

        setTimeout(() => {
            setCategoryNews(filtered || []);
            setLoading(false);
        }, 600);
    }, [id]);

    if (loading) return <Loading></Loading>

    return (
        <div className="mt-5 min-h-screen">
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryNews?.map((item, idx) => (
                    <SingleNews news={item} key={idx}></SingleNews>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
                {categoryNews?.map((item, idx) => (
                    <SingleNewsCard news={item} key={idx}></SingleNewsCard>
                ))}
            </div>
        </div>
    );
};

export default CategoryWiseNews;