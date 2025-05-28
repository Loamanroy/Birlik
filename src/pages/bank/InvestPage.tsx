function InvestPage() {
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Инвестиции</h1>
                <p className="text-gray-600 mt-2">Управляйте своими инвестициями</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
                    <h2 className="text-lg font-bold mb-4">Ваш портфель</h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Общая стоимость</span>
                        <span className="font-medium text-xl">101,04 ₸</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-green-500">
                        <span>Прибыль за сегодня</span>
                        <span>+2 ₸ (1,6%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mb-6">
                        <div className="h-2 bg-green-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                name: "Акции Birlik",
                                amount: "50,50 ₸",
                                change: "+1,2 ₸ (2,4%)",
                                positive: true
                            },
                            {
                                name: "Государственные облигации",
                                amount: "30,30 ₸",
                                change: "+0,5 ₸ (1,7%)",
                                positive: true
                            },
                            {
                                name: "ETF Технологии",
                                amount: "20,24 ₸",
                                change: "+0,3 ₸ (1,5%)",
                                positive: true
                            }
                        ].map((asset, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium">{asset.name}</div>
                                    <div className={`text-sm ${asset.positive ? 'text-green-500' : 'text-red-500'}`}>
                                        {asset.change}
                                    </div>
                                </div>
                                <div className="font-medium">{asset.amount}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Купить
                        </button>
                        <button className="flex-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            Продать
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Рекомендации</h2>
                    <div className="space-y-4">
                        {[
                            {
                                name: "Акции KazMunayGas",
                                description: "Энергетический сектор",
                                potential: "+12% годовых"
                            },
                            {
                                name: "ETF Финансы",
                                description: "Диверсифицированный фонд",
                                potential: "+8% годовых"
                            },
                            {
                                name: "Облигации Birlik Bank",
                                description: "Стабильный доход",
                                potential: "+6% годовых"
                            }
                        ].map((recommendation, index) => (
                            <div key={index} className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="font-medium">{recommendation.name}</div>
                                <div className="text-sm text-gray-500">{recommendation.description}</div>
                                <div className="text-sm text-green-500 mt-1">{recommendation.potential}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            Все рекомендации
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">Инвестиционные идеи</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        {
                            title: "Технологический сектор",
                            description: "Инвестиции в технологические компании",
                            risk: "Средний",
                            return: "Высокий"
                        },
                        {
                            title: "Недвижимость",
                            description: "REIT фонды и акции девелоперов",
                            risk: "Низкий",
                            return: "Средний"
                        },
                        {
                            title: "Зеленая энергетика",
                            description: "Компании возобновляемой энергии",
                            risk: "Высокий",
                            return: "Высокий"
                        }
                    ].map((idea, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                            <h3 className="font-medium mb-2">{idea.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{idea.description}</p>
                            <div className="flex justify-between text-sm">
                                <span>Риск: <span className="font-medium">{idea.risk}</span></span>
                                <span>Доход: <span className="font-medium">{idea.return}</span></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InvestPage;
