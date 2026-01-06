import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../../image/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img
                            src={logo}
                            alt="বাংলাদেশ রিপোর্ট লোগো"
                            className="h-10"
                        />
                    </div>
                    <p className='font-bold mb-1 text-lg'>সম্পাদক ও প্রকাশক: ''</p>
                    বাংলাদেশের বড় খবর, বিনোদন, খেলা, অর্থনীতি এবং আরো অনেক কিছু এখানে পাবেন। সর্বশেষ সংবাদ জানুন আমাদের মাধ্যমে।
                </div>
                <div className="text-sm leading-relaxed md:text-center ">
                    <p className='text-lg text-center'>
                        বার্তা, সম্পাদকীয় ও বাণিজ্যিক কার্যালয় : কাওরান বাজার, ঢাকা
                    </p>
                    <p className="mt-3">
                        <strong>বিজ্ঞাপনের জন্যে</strong> <br />
                        <strong>ই-মেইল:</strong> ads@info.com
                        <br />
                        <strong>যোগাযোগ:</strong> ০১৮১২৩৪৫৬৭৮
                    </p>
                </div>
                <div className="flex flex-col  md:items-end">
                    <div className='flex md:items-center md:justify-center gap-2 mb-3'>
                        <a
                            href="#"
                            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                    <div className='flex md:items-center md:justify-center gap-2'>
                        <a
                            href="#"
                            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between md:items-center text-sm text-gray-600">
                <div className="flex flex-wrap  md:justify-start gap-4 mb-3 md:mb-0">
                    <a href="#" className="hover:text-blue-600">
                        গোপনীয়তার নীতি
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        ব্যবহারের শর্তাবলি
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        যোগাযোগ
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        আমাদের সম্পর্কে
                    </a>
                </div>
                <p className="text-gray-500 md:text-right">
                    ওয়েবসাইট ডিজাইন ও ডেভেলপঃ <span className="font-semibold text-blue-600">সাব্বির আহম্মেদ</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;