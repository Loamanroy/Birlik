import { useTranslation } from 'react-i18next';

function InvestPage() {
    const { t, i18n } = useTranslation();
    
    const assets = [
        {
            name: i18n.language === 'en' ? "Birlik Stocks" : "Акции Birlik",
            amount: "50,50 ₸",
            change: "+1,2 ₸ (2,4%)",
            positive: true
        },
        {
            name: i18n.language === 'en' ? "Government Bonds" : "Государственные облигации",
            amount: "30,30 ₸",
            change: "+0,5 ₸ (1,7%)",
            positive: true
        },
        {
            name: i18n.language === 'en' ? "ETF Technology" : "ETF Технологии",
            amount: "20,24 ₸",
            change: "+0,3 ₸ (1,5%)",
            positive: true
        }
    ];
    
    const recommendations = [
        {
            name: "KazMunayGas",
            description: i18n.language === 'en' ? "Energy Sector" : "Энергетический сектор",
            potential: i18n.language === 'en' ? "+12% annual" : "+12% годовых"
        },
        {
            name: i18n.language === 'en' ? "ETF Finance" : "ETF Финансы",
            description: i18n.language === 'en' ? "Diversified Fund" : "Диверсифицированный фонд",
            potential: i18n.language === 'en' ? "+8% annual" : "+8% годовых"
        },
        {
            name: i18n.language === 'en' ? "Birlik Bank Bonds" : "Облигации Birlik Bank",
            description: i18n.language === 'en' ? "Stable Income" : "Стабильный доход",
            potential: i18n.language === 'en' ? "+6% annual" : "+6% годовых"
        }
    ];
    
    const investmentIdeas = [
        {
            title: i18n.language === 'en' ? "Technology Sector" : "Технологический сектор",
            description: i18n.language === 'en' ? "Investments in technology companies" : "Инвестиции в технологические компании",
            risk: i18n.language === 'en' ? "Medium" : "Средний",
            return: i18n.language === 'en' ? "High" : "Высокий"
        },
        {
            title: i18n.language === 'en' ? "Real Estate" : "Недвижимость",
            description: i18n.language === 'en' ? "REIT funds and developer stocks" : "REIT фонды и акции девелоперов",
            risk: i18n.language === 'en' ? "Low" : "Низкий",
            return: i18n.language === 'en' ? "Medium" : "Средний"
        },
        {
            title: i18n.language === 'en' ? "Green Energy" : "Зеленая энергетика",
            description: i18n.language === 'en' ? "Renewable energy companies" : "Компании возобновляемой энергии",
            risk: i18n.language === 'en' ? "High" : "Высокий",
            return: i18n.language === 'en' ? "High" : "Высокий"
        }
    ];
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">{t('bank.investments')}</h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Manage your investments' : 'Управляйте своими инвестициями'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Your Portfolio' : 'Ваш портфель'}
                    </h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">
                            {i18n.language === 'en' ? 'Total Value' : 'Общая стоимость'}
                        </span>
                        <span className="font-medium text-xl">101,04 ₸</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-green-500">
                        <span>
                            {i18n.language === 'en' ? 'Profit Today' : 'Прибыль за сегодня'}
                        </span>
                        <span>+2 ₸ (1,6%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mb-6">
                        <div className="h-2 bg-green-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <div className="space-y-4">
                        {assets.map((asset, index) => (
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
                            {i18n.language === 'en' ? 'Buy' : 'Купить'}
                        </button>
                        <button className="flex-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            {i18n.language === 'en' ? 'Sell' : 'Продать'}
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Recommendations' : 'Рекомендации'}
                    </h2>
                    <div className="space-y-4">
                        {recommendations.map((recommendation, index) => (
                            <div key={index} className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="font-medium">{recommendation.name}</div>
                                <div className="text-sm text-gray-500">{recommendation.description}</div>
                                <div className="text-sm text-green-500 mt-1">{recommendation.potential}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            {i18n.language === 'en' ? 'All Recommendations' : 'Все рекомендации'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Investment Ideas' : 'Инвестиционные идеи'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {investmentIdeas.map((idea, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                            <h3 className="font-medium mb-2">{idea.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{idea.description}</p>
                            <div className="flex justify-between text-sm">
                                <span>
                                    {i18n.language === 'en' ? 'Risk: ' : 'Риск: '}
                                    <span className="font-medium">{idea.risk}</span>
                                </span>
                                <span>
                                    {i18n.language === 'en' ? 'Return: ' : 'Доход: '}
                                    <span className="font-medium">{idea.return}</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InvestPage;
