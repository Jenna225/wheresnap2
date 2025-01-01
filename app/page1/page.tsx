"use client";

import Link from "next/link";

export default function PersonalInfoPage() {
    return (
        <div className="w-[430px] h-[850px] mx-auto border-2 border-black overflow-hidden flex flex-col">
            <div className="container flex flex-col p-4">
                <div className="flex justify-between items-center mb-4">
                    <Link
                        href="/function/main"
                        className="bg-black text-white px-4 py-2 rounded-full shadow-lg"
                    >
                        返回
                    </Link>

                </div>
                <h1 className="text-2xl font-bold">個人資訊</h1>
                <br></br>
                <div className="flex flex-col items-center space-y-6">
                    {/* Profile Photo */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
                        <img
                            src="https://picsum.photos/200/200?random=11"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                        <button
                            className="absolute bottom-0 right-0 bg-black text-white rounded-full p-1"
                            onClick={() => alert('Change profile photo')}
                        >
                            ✏️
                        </button>
                    </div>

                    {/* Name */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                        <input
                            type="text"
                            defaultValue="張三"
                            className="w-full border-2 border-gray-300 rounded-lg p-2"
                        />
                    </div>

                    {/* Bio */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">個人簡介</label>
                        <textarea
                            defaultValue="熱愛旅行和攝影的台灣人"
                            className="w-full border-2 border-gray-300 rounded-lg p-2 h-32"
                        />
                    </div>

                    {/* Save Button */}
                    <button
                        className="w-full bg-black text-white px-4 py-2 rounded-full shadow-lg"
                        onClick={() => alert('個人資訊已保存')}
                    >
                        保存
                    </button>
                </div>
            </div>

        </div>
    );
}
