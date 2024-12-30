export default function Register() {
  return (
    <div className="w-[430px] h-[850px] mx-auto border-2 border-black overflow-hidden flex flex-col justify-center items-center">
      <div className="container flex flex-col gap-8 p-4">
        <main className="flex flex-col gap-8 items-center w-[375px] h-[812px]">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className="text-2xl font-bold">WhereSnap</p>
          <input
            type="text"
            placeholder="電子郵件/手機號碼"
            className="border-2 border-gray-300 rounded-xl p-2"
          />
          <input
            type="password"
            placeholder="密碼"
            className="border-2 border-gray-300 rounded-xl p-2"
          />
          <input
            type="password"
            placeholder="確認密碼"
            className="border-2 border-gray-300 rounded-xl p-2"
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="flex flex-col gap-4">
            <a
              className="w-full w-[200px] rounded-full border transition-colors flex items-center justify-center bg-black text-white text-sm h-12"
              href="/function/main"
            >
              註冊
            </a>
            <a
              className="w-full w-[200px] rounded-full border border-gray-300 transition-colors flex items-center justify-center bg-white text-black text-sm h-12"
              href="/"
            >
              返回登入
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
