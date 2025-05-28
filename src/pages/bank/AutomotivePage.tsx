import { useTranslation } from 'react-i18next';
import DashboardCard from '../../components/shared/DashboardCard';
import { Car, CreditCard, Shield, Search, Clock, FileText } from 'lucide-react';

function AutomotivePage() {
    const { i18n } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Automotive Services' : 'Автомобильные услуги'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Find, finance, and insure your vehicle' : 'Найдите, профинансируйте и застрахуйте свой автомобиль'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Auto Loans' : 'Автокредиты'}
                    subtitle={i18n.language === 'en' ? 'Finance your new vehicle' : 'Финансирование вашего нового автомобиля'}
                    icon={<CreditCard className="h-6 w-6 text-blue-500" />}
                    onClick={() => console.log('Navigate to auto loans')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Auto Insurance' : 'Автострахование'}
                    subtitle={i18n.language === 'en' ? 'Protect your vehicle' : 'Защитите свой автомобиль'}
                    icon={<Shield className="h-6 w-6 text-green-500" />}
                    onClick={() => console.log('Navigate to auto insurance')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Vehicle Marketplace' : 'Автомобильный маркетплейс'}
                    subtitle={i18n.language === 'en' ? 'Buy and sell vehicles' : 'Покупка и продажа автомобилей'}
                    icon={<Car className="h-6 w-6 text-red-500" />}
                    onClick={() => console.log('Navigate to vehicle marketplace')}
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Vehicle Search' : 'Поиск автомобиля'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {i18n.language === 'en' ? 'Make' : 'Марка'}
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">{i18n.language === 'en' ? 'Any' : 'Любая'}</option>
                            <option value="toyota">Toyota</option>
                            <option value="honda">Honda</option>
                            <option value="bmw">BMW</option>
                            <option value="mercedes">Mercedes-Benz</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {i18n.language === 'en' ? 'Model' : 'Модель'}
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">{i18n.language === 'en' ? 'Any' : 'Любая'}</option>
                            <option value="camry">Camry</option>
                            <option value="corolla">Corolla</option>
                            <option value="civic">Civic</option>
                            <option value="accord">Accord</option>
                            <option value="3-series">3 Series</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {i18n.language === 'en' ? 'Year' : 'Год'}
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">{i18n.language === 'en' ? 'Any' : 'Любой'}</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {i18n.language === 'en' ? 'Price Range' : 'Ценовой диапазон'}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <input 
                                type="text" 
                                placeholder={i18n.language === 'en' ? 'Min' : 'Мин'} 
                                className="p-2 border border-gray-300 rounded-md"
                            />
                            <input 
                                type="text" 
                                placeholder={i18n.language === 'en' ? 'Max' : 'Макс'} 
                                className="p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {i18n.language === 'en' ? 'Body Type' : 'Тип кузова'}
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">{i18n.language === 'en' ? 'Any' : 'Любой'}</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="hatchback">Hatchback</option>
                            <option value="coupe">Coupe</option>
                            <option value="truck">Truck</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {i18n.language === 'en' ? 'Fuel Type' : 'Тип топлива'}
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">{i18n.language === 'en' ? 'Any' : 'Любой'}</option>
                            <option value="gasoline">Gasoline</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                    </div>
                </div>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                    <Search className="h-4 w-4 mr-2" />
                    {i18n.language === 'en' ? 'Search Vehicles' : 'Искать автомобили'}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Recent Searches' : 'Недавние поиски'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                make: 'Toyota',
                                model: 'Camry',
                                year: '2022',
                                date: i18n.language === 'en' ? '2 days ago' : '2 дня назад'
                            },
                            {
                                make: 'Honda',
                                model: 'Civic',
                                year: '2021',
                                date: i18n.language === 'en' ? '5 days ago' : '5 дней назад'
                            },
                            {
                                make: 'BMW',
                                model: '3 Series',
                                year: '2023',
                                date: i18n.language === 'en' ? '1 week ago' : '1 неделю назад'
                            }
                        ].map((search, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                        <Car className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <div className="font-medium">{search.make} {search.model}</div>
                                        <div className="text-sm text-gray-500">{search.year}</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500 mr-2">{search.date}</span>
                                    <Clock className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'View All Searches' : 'Просмотреть все поиски'}
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Vehicle Documents' : 'Документы на автомобиль'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                title: i18n.language === 'en' ? 'Insurance Policy' : 'Страховой полис',
                                description: i18n.language === 'en' ? 'Toyota Camry • Valid until 12/2023' : 'Toyota Camry • Действителен до 12/2023',
                                icon: <Shield className="h-5 w-5 text-green-500" />
                            },
                            {
                                title: i18n.language === 'en' ? 'Vehicle Registration' : 'Регистрация автомобиля',
                                description: i18n.language === 'en' ? 'Toyota Camry • Renewed 01/2023' : 'Toyota Camry • Обновлено 01/2023',
                                icon: <FileText className="h-5 w-5 text-blue-500" />
                            },
                            {
                                title: i18n.language === 'en' ? 'Loan Agreement' : 'Кредитный договор',
                                description: i18n.language === 'en' ? 'Toyota Camry • 36 months remaining' : 'Toyota Camry • Осталось 36 месяцев',
                                icon: <CreditCard className="h-5 w-5 text-purple-500" />
                            }
                        ].map((document, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                        {document.icon}
                                    </div>
                                    <div>
                                        <div className="font-medium">{document.title}</div>
                                        <div className="text-sm text-gray-500">{document.description}</div>
                                    </div>
                                </div>
                                <div>
                                    <button className="text-blue-500 hover:text-blue-700">
                                        {i18n.language === 'en' ? 'View' : 'Просмотр'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'Upload Document' : 'Загрузить документ'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AutomotivePage;
