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
