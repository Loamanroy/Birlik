import { useTranslation } from 'react-i18next';
import DashboardCard from '../../components/shared/DashboardCard';
import { BarChart, TrendingUp, RefreshCw, Clock, Globe } from 'lucide-react';

function ExchangePage() {
    const { i18n } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Exchange' : 'Биржа'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Trade currencies and monitor market data' : 'Торгуйте валютами и отслеживайте рыночные данные'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Currency Exchange' : 'Обмен валюты'}
                    subtitle={i18n.language === 'en' ? 'Convert between currencies' : 'Конвертация между валютами'}
                    icon={<RefreshCw className="h-6 w-6 text-blue-500" />}
                    onClick={() => console.log('Navigate to currency exchange')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Trading Dashboard' : 'Торговая панель'}
                    subtitle={i18n.language === 'en' ? 'Trade stocks and cryptocurrencies' : 'Торговля акциями и криптовалютами'}
                    icon={<TrendingUp className="h-6 w-6 text-green-500" />}
                    onClick={() => console.log('Navigate to trading dashboard')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Market Data' : 'Рыночные данные'}
                    subtitle={i18n.language === 'en' ? 'Real-time market information' : 'Рыночная информация в реальном времени'}
                    icon={<BarChart className="h-6 w-6 text-red-500" />}
                    onClick={() => console.log('Navigate to market data')}
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Currency Converter' : 'Конвертер валют'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {i18n.language === 'en' ? 'From' : 'Из'}
                            </label>
                            <div className="flex">
                                <select className="w-1/3 p-2 border border-gray-300 rounded-l-md">
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="KZT">KZT</option>
                                    <option value="RUB">RUB</option>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                </select>
                                <input 
                                    type="number" 
                                    className="w-2/3 p-2 border border-gray-300 rounded-r-md" 
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {i18n.language === 'en' ? 'To' : 'В'}
                            </label>
                            <div className="flex">
                                <select className="w-1/3 p-2 border border-gray-300 rounded-l-md">
                                    <option value="KZT">KZT</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="RUB">RUB</option>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                </select>
                                <input 
                                    type="number" 
                                    className="w-2/3 p-2 border border-gray-300 rounded-r-md" 
                                    placeholder="0.00"
                                    readOnly
                                />
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                            {i18n.language === 'en' ? 'Convert' : 'Конвертировать'}
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-medium mb-2">
                            {i18n.language === 'en' ? 'Exchange Rates' : 'Курсы обмена'}
                        </h3>
                        <div className="space-y-2">
                            {[
                                { from: 'USD', to: 'KZT', rate: '450.75' },
                                { from: 'EUR', to: 'KZT', rate: '490.25' },
                                { from: 'RUB', to: 'KZT', rate: '5.15' },
                                { from: 'BTC', to: 'USD', rate: '42,150.00' },
                                { from: 'ETH', to: 'USD', rate: '2,250.75' }
                            ].map((rate, index) => (
                                <div key={index} className="flex justify-between">
                                    <span>1 {rate.from}</span>
                                    <span>=</span>
                                    <span className="font-medium">{rate.rate} {rate.to}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2 text-xs text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{i18n.language === 'en' ? 'Last updated: 5 minutes ago' : 'Последнее обновление: 5 минут назад'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Market Overview' : 'Обзор рынка'}
                    </h2>
                    <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <BarChart className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                        {[
                            { name: 'S&P 500', value: '4,782.45', change: '+0.45%', isPositive: true },
                            { name: 'NASDAQ', value: '15,982.10', change: '+0.72%', isPositive: true },
                            { name: 'KASE', value: '3,845.25', change: '-0.21%', isPositive: false },
                            { name: 'Bitcoin', value: '$42,150.00', change: '+1.25%', isPositive: true },
                            { name: 'Ethereum', value: '$2,250.75', change: '+0.85%', isPositive: true }
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <span className="text-gray-600">{item.name}</span>
                                <div className="flex items-center">
                                    <span className="font-medium mr-2">{item.value}</span>
                                    <span className={item.isPositive ? 'text-green-500' : 'text-red-500'}>
                                        {item.change}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'View All Markets' : 'Просмотреть все рынки'}
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Global Markets' : 'Мировые рынки'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                region: i18n.language === 'en' ? 'North America' : 'Северная Америка',
                                markets: 'NYSE, NASDAQ, TSX',
                                status: i18n.language === 'en' ? 'Open' : 'Открыто',
                                isOpen: true
                            },
                            {
                                region: i18n.language === 'en' ? 'Europe' : 'Европа',
                                markets: 'FTSE, DAX, CAC',
                                status: i18n.language === 'en' ? 'Open' : 'Открыто',
                                isOpen: true
                            },
                            {
                                region: i18n.language === 'en' ? 'Asia' : 'Азия',
                                markets: 'Nikkei, Hang Seng, KASE',
                                status: i18n.language === 'en' ? 'Closed' : 'Закрыто',
                                isOpen: false
                            },
                            {
                                region: i18n.language === 'en' ? 'Crypto' : 'Криптовалюты',
                                markets: 'BTC, ETH, XRP',
                                status: i18n.language === 'en' ? 'Open 24/7' : 'Открыто 24/7',
                                isOpen: true
                            }
                        ].map((market, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                        <Globe className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <div className="font-medium">{market.region}</div>
                                        <div className="text-sm text-gray-500">{market.markets}</div>
                                    </div>
                                </div>
                                <div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        market.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {market.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'Market Calendar' : 'Календарь рынка'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ExchangePage;
