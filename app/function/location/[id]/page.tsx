"use client";

import Link from "next/link";
import { useState } from "react";

export default function LocationDetailPage({ params }: { params: { id: string } }) {
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([
        {
            user: "彼得潘",
            comment: "很棒的景點，夜景非常漂亮！",
            rating: 5,
            date: "2024-12-25"
        },
        {
            user: "小叮噹",
            comment: "服務很好，但人太多了",
            rating: 4,
            date: "2024-12-20"
        }
    ]);

    // Mock location data - in real app this would come from API
    const location = {
        id: params.id,
        name: "台北101",
        rating: 4.8,
        address: "台北市信義區信義路五段7號",
        description: "台北著名地標，擁有觀景台和購物中心。",
        image: "https://picsum.photos/200/150?random=1",
        openingHours: "09:00 - 22:00",
        phone: "02 8101 8800",
        website: "https://www.taipei-101.com.tw"
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments(prev => [
                {
                    user: "當前用戶", // Replace with actual user
                    comment: newComment,
                    rating: 5, // Add rating input if needed
                    date: new Date().toISOString().split('T')[0]
                },
                ...prev
            ]);
            setNewComment("");
        }
    };

    return (
        <div>
            <br></br>
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

                    <div className="space-y-6">
                        {/* Location Image */}
                        <img
                            src={location.image}
                            alt={location.name}
                            className="w-full h-48 object-cover rounded-lg"
                        />

                        {/* Location Info */}
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold">{location.name}</h1>
                            <div className="flex items-center gap-1 text-yellow-400">
                                {Array.from({length: 5}, (_, i) => (
                                    <span key={i}
                                          className={i < Math.floor(location.rating) ? "text-yellow-400" : "text-gray-300"}>
                                    ★
                                </span>
                                ))}
                                <span className="text-gray-500 text-sm ml-1">({location.rating})</span>
                            </div>
                            <p className="text-gray-600">{location.address}</p>
                            <p className="text-gray-500">{location.description}</p>
                        </div>

                        {/* Opening Hours */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h2 className="font-semibold mb-2">營業時間</h2>
                            <p>{location.openingHours}</p>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                            <h2 className="font-semibold">聯絡資訊</h2>
                            <p>電話: {location.phone}</p>
                            <p>網站: <a href={location.website}
                                        className="text-blue-500 hover:underline">{location.website}</a></p>
                        </div>

                        {/* Comments Section */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">評論</h2>

                            {/* Add Comment Form */}
                            <form onSubmit={handleCommentSubmit} className="space-y-2">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="w-full border-2 border-gray-300 rounded-lg p-2 h-24"
                                placeholder="寫下你的評論..."
                                required
                            />
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white px-4 py-2 rounded-full shadow-lg"
                                >
                                    提交評論
                                </button>
                            </form>

                            {/* Comments List */}
                            <div className="space-y-4">
                                {comments.map((comment, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-semibold">{comment.user}</h3>
                                            <div className="flex items-center gap-1 text-yellow-400">
                                                {Array.from({length: 5}, (_, i) => (
                                                    <span key={i}
                                                          className={i < comment.rating ? "text-yellow-400" : "text-gray-300"}>
                                                    ★
                                                </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mt-1">{comment.comment}</p>
                                        <p className="text-gray-400 text-sm mt-2">{comment.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
