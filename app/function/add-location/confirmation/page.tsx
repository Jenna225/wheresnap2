"use client";

import Link from "next/link";

export default function AddLocationConfirmationPage() {
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

                    <div className="flex flex-col items-center space-y-6 mt-8">

                        <br/>
                        <br/><br/><br/>
                        <br/><br/>
                        <h1 className="text-2xl font-bold text-center">感謝您的提交！</h1>

                        <p className="text-gray-600 text-center">
                            我們已收到您的新地點提交，
                            <br/> 我們的團隊將會審核您提供的資訊。
                            <br/>
                            審核過程可能需要1-3個工作日，請耐心等待。
                        </p>

                        <Link
                            href="/function/main"
                            className="w-[150px] bg-black text-white px-4 py-2 rounded-full shadow-lg text-center mt-8"
                        >
                            返回主頁
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
