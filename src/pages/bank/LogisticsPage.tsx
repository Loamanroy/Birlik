import { useTranslation } from 'react-i18next';
import DashboardCard from '../../components/shared/DashboardCard';
import { Truck, Package, Map, BarChart, Clock, FileText } from 'lucide-react';

function LogisticsPage() {
    const { i18n } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Logistics Services' : 'Логистические услуги'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Manage your shipping and logistics operations' : 'Управляйте вашими перевозками и логистическими операциями'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Shipment Tracking' : 'Отслеживание отправлений'}
                    subtitle={i18n.language === 'en' ? 'Track your packages in real-time' : 'Отслеживайте ваши посылки в реальном времени'}
                    icon={<Package className="h-6 w-6 text-blue-500" />}
                    onClick={() => console.log('Navigate to shipment tracking')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Fleet Management' : 'Управление автопарком'}
                    subtitle={i18n.language === 'en' ? 'Monitor and manage your vehicles' : 'Мониторинг и управление вашими транспортными средствами'}
                    icon={<Truck className="h-6 w-6 text-green-500" />}
                    onClick={() => console.log('Navigate to fleet management')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Route Optimization' : 'Оптимизация маршрутов'}
                    subtitle={i18n.language === 'en' ? 'Find the most efficient routes' : 'Найдите самые эффективные маршруты'}
                    icon={<Map className="h-6 w-6 text-red-500" />}
                    onClick={() => console.log('Navigate to route optimization')}
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Shipment Dashboard' : 'Панель отправлений'}
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Tracking ID' : 'ID отслеживания'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Origin' : 'Отправление'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Destination' : 'Назначение'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Status' : 'Статус'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'ETA' : 'Ожидаемое время прибытия'}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                {
                                    id: 'TRK-12345',
                                    origin: 'Almaty',
                                    destination: 'Nur-Sultan',
                                    status: i18n.language === 'en' ? 'In Transit' : 'В пути',
                                    eta: '2023-06-15'
                                },
                                {
                                    id: 'TRK-67890',
                                    origin: 'Shymkent',
                                    destination: 'Aktau',
                                    status: i18n.language === 'en' ? 'Delivered' : 'Доставлено',
                                    eta: '2023-06-10'
                                },
                                {
                                    id: 'TRK-24680',
                                    origin: 'Karaganda',
                                    destination: 'Taraz',
                                    status: i18n.language === 'en' ? 'Processing' : 'В обработке',
                                    eta: '2023-06-18'
                                }
                            ].map((shipment, index) => (
                                <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                        {shipment.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {shipment.origin}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {shipment.destination}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            shipment.status === 'In Transit' || shipment.status === 'В пути' 
                                                ? 'bg-yellow-100 text-yellow-800' 
                                                : shipment.status === 'Delivered' || shipment.status === 'Доставлено'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {shipment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {shipment.eta}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                    {i18n.language === 'en' ? 'View All Shipments' : 'Просмотреть все отправления'}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Performance Analytics' : 'Аналитика производительности'}
                    </h2>
                    <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <BarChart className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'On-Time Delivery Rate' : 'Показатель своевременной доставки'}
                            </span>
                            <span className="font-medium text-green-500">94.5%</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Average Transit Time' : 'Среднее время в пути'}
                            </span>
                            <span className="font-medium">2.3 days</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Shipment Volume' : 'Объем отправлений'}
                            </span>
                            <span className="font-medium">1,250 units</span>
                        </div>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'Detailed Report' : 'Подробный отчет'}
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Recent Activities' : 'Недавние действия'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                action: i18n.language === 'en' ? 'New shipment created' : 'Создано новое отправление',
                                details: i18n.language === 'en' ? 'TRK-35791 • Almaty to Atyrau' : 'TRK-35791 • Алматы в Атырау',
                                time: i18n.language === 'en' ? '2 hours ago' : '2 часа назад',
                                icon: <Package className="h-5 w-5 text-blue-500" />
                            },
                            {
                                action: i18n.language === 'en' ? 'Shipment delivered' : 'Отправление доставлено',
                                details: i18n.language === 'en' ? 'TRK-24680 • Karaganda to Taraz' : 'TRK-24680 • Караганда в Тараз',
                                time: i18n.language === 'en' ? '5 hours ago' : '5 часов назад',
                                icon: <FileText className="h-5 w-5 text-green-500" />
                            },
                            {
                                action: i18n.language === 'en' ? 'Route optimized' : 'Маршрут оптимизирован',
                                details: i18n.language === 'en' ? 'Fleet #12 • 8 vehicles' : 'Автопарк #12 • 8 транспортных средств',
                                time: i18n.language === 'en' ? '1 day ago' : '1 день назад',
                                icon: <Map className="h-5 w-5 text-purple-500" />
                            }
                        ].map((activity, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                        {activity.icon}
                                    </div>
                                    <div>
                                        <div className="font-medium">{activity.action}</div>
                                        <div className="text-sm text-gray-500">{activity.details}</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500 mr-2">{activity.time}</span>
                                    <Clock className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'View All Activities' : 'Просмотреть все действия'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogisticsPage;
