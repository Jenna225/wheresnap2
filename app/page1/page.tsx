"use client";

import Link from "next/link";
import { useState } from 'react';

export default function PersonalInfoPage() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("張三");
    const [bio, setBio] = useState("熱愛旅行和攝影的台灣人");
    const [profileImage, setProfileImage] = useState("https://picsum.photos/200/200?random=11");

    const handleSave = () => {
        setIsEditing(false);
        alert('個人資訊已保存');
    };

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
                    {!isEditing && (
                        <button
                            className="bg-black text-white px-4 py-2 rounded-full shadow-lg"
                            onClick={() => setIsEditing(true)}
                        >
                            編輯
                        </button>
                    )}
                </div>
                <h1 className="text-2xl font-bold">個人資訊</h1>
                <br></br>
                <div className="flex flex-col items-center space-y-6">
                    {/* Profile Photo */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                        {isEditing && (
                            <button
                                className="absolute bottom-0 right-0 bg-black text-white rounded-full p-1"
                                onClick={() => {
                                    const newImage = prompt("請輸入新的圖片網址:");
                                    if (newImage) setProfileImage(newImage);
                                }}
                            >
                                ✏️
                            </button>
                        )}
                    </div>

                    {/* Name */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-2 border-gray-300 rounded-lg p-2"
                            />
                        ) : (
                            <div className="w-full border-2 border-transparent rounded-lg p-2">
                                {name}
                            </div>
                        )}
                    </div>

                    {/* Bio */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">個人簡介</label>
                        {isEditing ? (
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full border-2 border-gray-300 rounded-lg p-2 h-32"
                            />
                        ) : (
                            <div className="w-full border-2 border-transparent rounded-lg p-2 h-32">
                                {bio}
                            </div>
                        )}
                    </div>

                    {isEditing && (
                        <button
                            className="w-full bg-black text-white px-4 py-2 rounded-full shadow-lg"
                            onClick={handleSave}
                        >
                            保存
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
