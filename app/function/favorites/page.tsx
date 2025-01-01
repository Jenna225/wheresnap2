import Link from "next/link";

export default function FavoritesPage() {
    const favoritePlaces = [
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
        },
        {
            name: "西門町",
            rating: 4.5,
            address: "台北市萬華區",
            description: "台北最熱鬧的商圈，街頭藝術和霓虹燈拍照聖地。",
            image: "https://picsum.photos/200/150?random=4"
        },
        {
            name: "陽明山國家公園",
            rating: 4.7,
            address: "台北市北投區",
            description: "春季櫻花季和秋季芒草季的絕美拍照景點。",
            image: "https://picsum.photos/200/150?random=5"
        },
        {
            name: "彩虹眷村",
            rating: 4.6,
            address: "台中市南屯區春安路56巷",
            description: "充滿童趣彩繪的拍照景點，色彩繽紛的牆面。",
            image: "https://picsum.photos/200/150?random=6"
        },
        {
            name: "高美濕地",
            rating: 4.8,
            address: "台中市清水區",
            description: "夕陽美景和風車的完美結合，網美打卡聖地。",
            image: "https://picsum.photos/200/150?random=7"
        },
        {
            name: "十分瀑布",
            rating: 4.6,
            address: "新北市平溪區",
            description: "台灣的尼加拉瓜瀑布，壯觀的瀑布景觀。",
            image: "https://picsum.photos/200/150?random=8"
        },
        {
            name: "淡水漁人碼頭",
            rating: 4.7,
            address: "新北市淡水區",
            description: "浪漫的情人橋和夕陽美景，拍照約會勝地。",
            image: "https://picsum.photos/200/150?random=9"
        },
        {
            name: "龍騰斷橋",
            rating: 4.5,
            address: "苗栗縣三義鄉",
            description: "歷史遺跡與自然景觀的完美結合，文青拍照景點。",
            image: "https://picsum.photos/200/150?random=10"
        }
    ];

    return (
        <div className="w-[430px] h-[850px] mx-auto border-2 border-black overflow-hidden flex flex-col">
            <div className="container flex flex-col p-4">
                <h1 className="text-2xl font-bold mb-4">收藏地標</h1>
                
                <div className="space-y-4 overflow-y-auto">
                    {favoritePlaces.map((place, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <div className="flex gap-4">
                                <img 
                                    src={place.image} 
                                    alt={place.name} 
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">{place.name}</h2>
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        {Array.from({length: 5}, (_, i) => (
                                            <span key={i} className={i < Math.floor(place.rating) ? "text-yellow-400" : "text-gray-300"}>
                                                ★
                                            </span>
                                        ))}
                                        <span className="text-gray-500 text-sm ml-1">({place.rating})</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{place.address}</p>
                                    <p className="text-sm text-gray-500 mt-2">{place.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <Link 
                    href="/function/main" 
                    className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg"
                >
                    返回
                </Link>
            </div>
        </div>
    );
}
