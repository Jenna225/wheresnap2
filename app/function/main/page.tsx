"use client";

import { useState } from 'react';

export default function MainPage() {
    const [showBlock, setShowBlock] = useState(false);

    return (
        <div className="w-[430px] h-[850px] mx-auto border-2 border-black overflow-hidden flex flex-col justify-center items-center">
            <div className="container flex flex-col gap-8 p-4">
                <div
                    className="flex overflow-hidden flex-col pt-12 pb-6 mx-auto w-full max-w-[480px]"
                    role="region"
                    aria-label="Search and navigation section"
                >
                    <div
                        className="flex flex-col px-5 w-full text-xl whitespace-nowrap text-zinc-500"
                    >
                        <form
                            className="flex gap-5 justify-between px-4 py-3 w-full rounded-2xl bg-white bg-opacity-70 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                            role="search"
                        >
                            <div className="flex gap-4 my-auto">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3295a5191575e7b1e63e623f6beadd40d70da32e4de9b6214a6b8c306a04a3a?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                    className="object-contain shrink-0 aspect-square w-[25px]"
                                    alt="Search icon"
                                />
                                <label htmlFor="searchInput" className="sr-only">Search</label>
                                <input
                                    type="search"
                                    id="searchInput"
                                    className="my-auto bg-transparent border-none outline-none"
                                    placeholder="搜尋"
                                    aria-label="Search input"
                                />
                            </div>
                            <button type="submit" aria-label="Submit search">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6666590f3c8affd27501c456acf282200381856b6635f5c9736117b022d2672d?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                                    className="object-contain shrink-0 aspect-[0.91] w-[31px]"
                                    alt=""
                                />
                            </button>
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
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7067bccfb73573bbd10b1eb641e801ea52ae553a57bf94bdacd00a93e7c1577?placeholderIfAbsent=true&apiKey=5f3e312fd46a4a3f8a7183f6a724720c"
                            className="object-contain mt-40 mr-16 aspect-[1.09] w-[38px]"
                            alt="Decorative element"
                        />
                        {showBlock && (
                            <div className="w-full p-4 bg-white rounded-lg shadow-md mb-4">
                                <textarea
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Edit this block..."
                                    rows={4}
                                />
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
    );
}
