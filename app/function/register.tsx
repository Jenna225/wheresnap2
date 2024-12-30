import Image from "next/image";

export default function RegisterPage() {
    return (
        <div className="w-[430px] h-[850px] mx-auto border-2 border-black overflow-hidden flex flex-col justify-center items-center">
            <div className="container flex flex-col gap-8 p-4">
                <main className=" flex flex-col gap-8 items-center w-[375px] h-[812px]">
                    {/*  <Image*/}
                    {/*    className="dark:invert"*/}
                    {/*    src="/next.svg"*/}
                    {/*    alt="Next.js logo"*/}
                    {/*    width={180}*/}
                    {/*    height={38}*/}
                    {/*    priority*/}
                    {/*/>*/}

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="text-2xl font-bold">WhereSnap</p>
                    <input
                        type="text"
                        placeholder="電子郵件/手機號碼"
                        className="border-2 border-gray-300 rounded-xl p-2 "
                    />
                    <input
                        type="text"
                        placeholder="密碼"
                        className="border-2 border-gray-300 rounded-xl p-2 "
                    />
                    <input
                        type="text"
                        placeholder="密碼確認"
                        className="border-2 border-gray-300 rounded-xl p-2 "
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="flex flex-col gap-4">
                        <a
                            className="w-full w-[200px] rounded-full border border-gray-300 transition-colors flex items-center justify-center bg-white text-black text-sm h-12"
                            href="/function/register"
                        >
                            註冊
                        </a>
                        <a
                            className="w-full w-[200px] rounded-full border transition-colors flex items-center justify-center bg-black text-white text-sm h-12"
                            href="/"
                        >
                            登入
                        </a>
                    </div>
                </main>
            </div>
        </div>
    );
}
