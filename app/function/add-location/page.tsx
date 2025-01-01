"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddLocationPage() {
    const [locationName, setLocationName] = useState("");
    const [category, setCategory] = useState("");
    const [region, setRegion] = useState("");
    const [address, setAddress] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission
        alert("新地點已提交!");
        // Reset form
        setLocationName("");
        setCategory("");
        setRegion("");
        setAddress("");
        setDetails("");
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
                </div>
                <h1 className="text-2xl font-bold mb-4">新增地點</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Location Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">地點名稱</label>
                        <input
                            type="text"
                            value={locationName}
                            onChange={(e) => setLocationName(e.target.value)}
                            className="w-full border-2 border-gray-300 rounded-lg p-2"
                            placeholder="輸入地點名稱"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1">類別</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border-2 border-gray-300 rounded-lg p-2"
                            required
                        >
                            <option value="">選擇類別</option>
                            <option value="cafe">咖啡廳</option>
                            <option value="museum">博物館</option>
                            <option value="outdoor">戶外景點</option>
                            <option value="restaurant">餐廳</option>
                            <option value="shopping">購物</option>
                            <option value="landmark">地標</option>
                            <option value="park">公園</option>
                            <option value="hotel">酒店</option>
                        </select>
                    </div>

                    {/* Region */}
                    <div>
                        <label className="block text-sm font-medium mb-1">地區</label>
                        <select
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            className="w-full border-2 border-gray-300 rounded-lg p-2"
                            required
                        >
                            <option value="">選擇地區</option>
                            <option value="taipei">台北市</option>
                            <option value="new_taipei">新北市</option>
                            <option value="taoyuan">桃園市</option>
                            <option value="taichung">台中市</option>
                            <option value="tainan">台南市</option>
                            <option value="kaohsiung">高雄市</option>
                            <option value="other">其他</option>
                        </select>
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium mb-1">完整地址</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full border-2 border-gray-300 rounded-lg p-2"
                            placeholder="輸入完整地址"
                            required
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="block text-sm font-medium mb-1">詳細資訊</label>
                        <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            className="w-full border-2 border-gray-300 rounded-lg p-2 h-32"
                            placeholder="輸入地點的詳細資訊"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white px-4 py-2 rounded-full shadow-lg mt-4"
                    >
                        提交新地點
                    </button>
                </form>
            </div>
        </div>
    );
}
