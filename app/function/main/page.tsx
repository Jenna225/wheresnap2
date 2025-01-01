"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function MainPage() {
    const [showBlock, setShowBlock] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const categories = [
        '咖啡廳', '博物館', '戶外景點', '餐廳', 
        '購物', '地標', '公園', '酒店'
    ];

    const handleCategoryClick = (category: string) => {
        setSelectedCategories(prev => 
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div>
            <br></br>
            <div className="w-[430px] h-[850px] mx-auto border-2 border-black overflow-hidden flex flex-col justify-center items-center">
                <div className="container flex flex-col gap-8 p-4">
                    <div
                        className="flex overflow-hidden flex-col pt-12 pb-6 mx-auto w-full max-w-[480px]"
                        role="region"
                        aria-label="Search and navigation section"
                    >
                        <div
                            className="t-1 flex flex-col px-5 w-full text-xl whitespace-nowrap text-zinc-500"
                        >
                            <form
                                className="flex gap-5 justify-between px-4 py-3 w-full rounded-2xl bg-white bg-opacity-70 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                                role="search"
                            >
                                <div
                                    className="flex gap-4 my-auto cursor-pointer"
                                    aria-label="Submit search"
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3295a5191575e7b1e63e623f6beadd40d70da32e4de9b6214a6b8c306a04a3a?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                        className="object-contain shrink-0 aspect-square w-[25px]"
                                        alt="Search icon"
                                    />
                                    <div className="my-auto bg-transparent border-none outline-none">
                                        選擇類別
                                    </div>
                                </div>

                                <div
                                    className="cursor-pointer"
                                    onClick={() => setShowCategories(!showCategories)}
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6666590f3c8affd27501c456acf282200381856b6635f5c9736117b022d2672d?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                        className="object-contain shrink-0 aspect-[0.91] w-[31px]"
                                        alt=""
                                    />
                                    {showCategories && (
                                        <div
                                            className="fixed top-28 left-1/2 transform -translate-x-1/2 w-[300px] bg-white rounded-lg shadow-md p-4 z-50 grid grid-cols-2 gap-2">
                                            {categories.map(category => (
                                                <div
                                                    key={category}
                                                    onClick={() => {
                                                        handleCategoryClick(category);
                                                        setShowCategories(false);
                                                    }}
                                                    className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-colors ${
                                                        selectedCategories.includes(category)
                                                            ? 'bg-black text-white'
                                                            : 'bg-gray-100 hover:bg-gray-200 text-black'
                                                    }`}
                                                >
                                                    {category}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </form>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7067bccfb73573bbd10b1eb641e801ea52ae553a57bf94bdacd00a93e7c1577?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                className="object-contain self-center mt-24 aspect-[1.09] w-[38px]"
                                alt="Decorative element"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e012d493b97fa5ec059b253e8e46ef608dddf78a20427fd5fdaff9861723901?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                className="object-contain self-end mt-16 mr-12 aspect-[1.09] w-[38px]"
                                alt="Decorative element"
                            />
                        </div>
                        <div className="flex flex-col items-end pr-3 pl-14 mt-32 w-full">
                            <div className="flex gap-4 self-start">
                                <div className="flex">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e61eb5b02d2349a1156832ea3d9ad8decdf09ae3a4b9faf670b605904f0ccf0?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                        className="object-contain shrink-0 self-start mr-0 aspect-[1.09] w-[38px]"
                                        alt="Decorative element"
                                    />
                                    <div
                                        className="flex flex-col justify-center items-center px-8 rounded-full border border-orange-400 border-solid bg-orange-400 bg-opacity-30 h-[150px] w-[150px]"
                                        role="presentation"
                                    >
                                        <div
                                            className="flex flex-col justify-center items-center px-1 bg-white rounded-full h-[25px] shadow-[4px_4px_10px_rgba(0,0,0,0.4)] w-[25px]"
                                            role="presentation"
                                        >
                                            <div
                                                className="flex shrink-0 w-full bg-orange-400 rounded-full h-[18px]"
                                                role="presentation"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e61eb5b02d2349a1156832ea3d9ad8decdf09ae3a4b9faf670b605904f0ccf0?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                    className="object-contain shrink-0 self-start aspect-[1.09] w-[38px]"
                                    alt="Decorative element"
                                />
                            </div>

                            {/* Location Cards Section */}
                            <div className="-mt-6 w-full overflow-x-auto whitespace-nowrap pb-4" style={{
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none', /* Firefox */
                                msOverflowStyle: 'none'  /* IE 10+ */
                            }}>
                                <div className="inline-flex gap-4 px-4" style={{ minWidth: 'max-content' }}>
                                    {[
                                        {
                                            name: "台北101",
                                            rating: 4.8,
                                            address: "台北市信義區信義路五段7號",
                                            description: "台北著名地標，擁有觀景台和購物中心。",
                                            image: "https://picsum.photos/200/150?random=1"
                                        },
                                        {
                                            name: "國立故宮博物院",
                                            rating: 4.7,
                                            address: "台北市士林區至善路二段221號",
                                            description: "收藏大量中國古代藝術品和文物。",
                                            image: "https://picsum.photos/200/150?random=2"
                                        },
                                        {
                                            name: "九份老街",
                                            rating: 4.6,
                                            address: "新北市瑞芳區基山街",
                                            description: "以懷舊景觀和美食聞名的山城老街。",
                                            image: "https://picsum.photos/200/150?random=3"
                                        }
                                    ].map((place, index) => (
                                        <div key={index}
                                             className="w-64 bg-white rounded-lg shadow-md p-4 inline-block">
                                            <div className="flex flex-col">
                                                <img
                                                    src={place.image}
                                                    alt={place.name}
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                                <div className="mt-2">
                                                    <h2 className="text-lg font-semibold">{place.name}</h2>
                                                    <div className="flex items-center gap-1 text-yellow-400">
                                                        {Array.from({length: 5}, (_, i) => (
                                                            <span key={i}
                                                                  className={i < Math.floor(place.rating) ? "text-yellow-400" : "text-gray-300"}>
                                                            ★
                                                        </span>
                                                        ))}
                                                        <span
                                                            className="text-gray-500 text-sm ml-1">({place.rating})</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mt-1">{place.address}</p>
                                                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{place.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {showBlock && (
                                <div
                                    className="absolute bottom-16 w-[300px] p-4 bg-white rounded-lg shadow-md mb-2 space-y-2 z-50">
                                    <button
                                        className="w-full px-4 py-2 text-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                        onClick={() => window.location.href = '/page1'}
                                    >
                                        個人資訊
                                    </button>
                                    <button
                                        className="w-full px-4 py-2 text-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                        onClick={() => window.location.href = '/function/add-location'}
                                    >
                                        新增地標
                                    </button>
                                    <button
                                        className="w-full px-4 py-2 text-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                        onClick={() => window.location.href = '/function/favorites'}
                                    >
                                        收藏地標
                                    </button>
                                </div>
                            )}
                            <button
                                type="button"
                                aria-label="Toggle block"
                                onClick={() => setShowBlock(!showBlock)}
                                className="mb-4 absolute bottom-0"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6666590f3c8affd27501c456acf282200381856b6635f5c9736117b022d2672d?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                    className="object-contain shrink-0 aspect-[0.91] w-[45px] border p-1 rounded-lg"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
