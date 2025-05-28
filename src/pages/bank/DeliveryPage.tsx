import { useTranslation } from 'react-i18next';
import DashboardCard from '../../components/shared/DashboardCard';
import { Package, Truck, MapPin, Clock, Calendar, FileText } from 'lucide-react';

function DeliveryPage() {
    const { i18n } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Delivery Services' : 'Услуги доставки'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Track and manage your package deliveries' : 'Отслеживайте и управляйте доставкой ваших посылок'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Send Package' : 'Отправить посылку'}
                    subtitle={i18n.language === 'en' ? 'Create a new delivery order' : 'Создать новый заказ доставки'}
                    icon={<Package className="h-6 w-6 text-blue-500" />}
                    onClick={() => console.log('Navigate to send package')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Track Delivery' : 'Отследить доставку'}
                    subtitle={i18n.language === 'en' ? 'Check the status of your packages' : 'Проверьте статус ваших посылок'}
                    icon={<Truck className="h-6 w-6 text-green-500" />}
                    onClick={() => console.log('Navigate to track delivery')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Delivery Points' : 'Пункты доставки'}
                    subtitle={i18n.language === 'en' ? 'Find nearby pickup and drop-off locations' : 'Найдите ближайшие пункты выдачи и приема'}
                    icon={<MapPin className="h-6 w-6 text-red-500" />}
                    onClick={() => console.log('Navigate to delivery points')}
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Track Your Package' : 'Отследите вашу посылку'}
                </h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                        <div className="flex">
                            <input 
                                type="text" 
                                className="w-full p-2 border border-gray-300 rounded-l-md" 
                                placeholder={i18n.language === 'en' ? 'Enter tracking number' : 'Введите номер отслеживания'}
                            />
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
                                {i18n.language === 'en' ? 'Track' : 'Отследить'}
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            {i18n.language === 'en' ? 'Enter your tracking number to get real-time updates on your package location' : 'Введите номер отслеживания, чтобы получить обновления о местоположении вашей посылки в реальном времени'}
                        </p>
                    </div>
                    <div className="flex-shrink-0 border-l pl-4">
                        <h3 className="font-medium text-sm text-gray-500 mb-2">
                            {i18n.language === 'en' ? 'Recent Tracking' : 'Недавнее отслеживание'}
                        </h3>
                        <div className="space-y-2">
                            {['DEL-12345', 'DEL-67890', 'DEL-24680'].map((trackingId, index) => (
                                <div key={index} className="flex items-center text-blue-500 cursor-pointer hover:underline">
                                    <Package className="h-4 w-4 mr-2" />
                                    <span className="text-sm">{trackingId}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Active Deliveries' : 'Активные доставки'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                id: 'DEL-12345',
                                from: i18n.language === 'en' ? 'Almaty' : 'Алматы',
                                to: i18n.language === 'en' ? 'Nur-Sultan' : 'Нур-Султан',
                                status: i18n.language === 'en' ? 'In Transit' : 'В пути',
                                eta: '2023-06-15',
                                isActive: true
                            },
                            {
                                id: 'DEL-67890',
                                from: i18n.language === 'en' ? 'Shymkent' : 'Шымкент',
                                to: i18n.language === 'en' ? 'Aktau' : 'Актау',
                                status: i18n.language === 'en' ? 'Processing' : 'В обработке',
                                eta: '2023-06-18',
                                isActive: true
                            },
                            {
                                id: 'DEL-24680',
                                from: i18n.language === 'en' ? 'Karaganda' : 'Караганда',
                                to: i18n.language === 'en' ? 'Taraz' : 'Тараз',
                                status: i18n.language === 'en' ? 'Out for Delivery' : 'Выдан курьеру',
                                eta: '2023-06-12',
                                isActive: true
                            }
                        ].map((delivery, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-100">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                        <Package className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <div className="font-medium">{delivery.id}</div>
                                        <div className="text-sm text-gray-500">{delivery.from} → {delivery.to}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        delivery.status === 'In Transit' || delivery.status === 'В пути' 
                                            ? 'bg-yellow-100 text-yellow-800' 
                                            : delivery.status === 'Out for Delivery' || delivery.status === 'Выдан курьеру'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-blue-100 text-blue-800'
                                    }`}>
                                        {delivery.status}
                                    </span>
                                    <div className="text-sm text-gray-500 mt-1 flex items-center justify-end">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        <span>{delivery.eta}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                        {i18n.language === 'en' ? 'View All Deliveries' : 'Просмотреть все доставки'}
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Delivery History' : 'История доставок'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                id: 'DEL-13579',
                                from: i18n.language === 'en' ? 'Almaty' : 'Алматы',
                                to: i18n.language === 'en' ? 'Atyrau' : 'Атырау',
                                status: i18n.language === 'en' ? 'Delivered' : 'Доставлено',
                                date: '2023-06-01',
                                isActive: false
                            },
                            {
                                id: 'DEL-97531',
                                from: i18n.language === 'en' ? 'Nur-Sultan' : 'Нур-Султан',
                                to: i18n.language === 'en' ? 'Pavlodar' : 'Павлодар',
                                status: i18n.language === 'en' ? 'Delivered' : 'Доставлено',
                                date: '2023-05-25',
                                isActive: false
                            },
                            {
                                id: 'DEL-86420',
                                from: i18n.language === 'en' ? 'Shymkent' : 'Шымкент',
                                to: i18n.language === 'en' ? 'Kostanay' : 'Костанай',
                                status: i18n.language === 'en' ? 'Delivered' : 'Доставлено',
                                date: '2023-05-18',
                                isActive: false
                            }
                        ].map((delivery, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-100">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                        <FileText className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <div>
                                        <div className="font-medium">{delivery.id}</div>
                                        <div className="text-sm text-gray-500">{delivery.from} → {delivery.to}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {delivery.status}
                                    </span>
                                    <div className="text-sm text-gray-500 mt-1 flex items-center justify-end">
                                        <Clock className="h-3 w-3 mr-1" />
                                        <span>{delivery.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'View Full History' : 'Просмотреть полную историю'}
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Delivery Calculator' : 'Калькулятор доставки'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {i18n.language === 'en' ? 'From' : 'Откуда'}
                            </label>
                            <select className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="">{i18n.language === 'en' ? 'Select city' : 'Выберите город'}</option>
                                <option value="Almaty">Almaty</option>
                                <option value="Nur-Sultan">Nur-Sultan</option>
                                <option value="Shymkent">Shymkent</option>
                                <option value="Karaganda">Karaganda</option>
                                <option value="Aktau">Aktau</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {i18n.language === 'en' ? 'To' : 'Куда'}
                            </label>
                            <select className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="">{i18n.language === 'en' ? 'Select city' : 'Выберите город'}</option>
                                <option value="Almaty">Almaty</option>
                                <option value="Nur-Sultan">Nur-Sultan</option>
                                <option value="Shymkent">Shymkent</option>
                                <option value="Karaganda">Karaganda</option>
                                <option value="Aktau">Aktau</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {i18n.language === 'en' ? 'Package Weight (kg)' : 'Вес посылки (кг)'}
                            </label>
                            <input 
                                type="number" 
                                className="w-full p-2 border border-gray-300 rounded-md" 
                                placeholder="0.5"
                                min="0.1"
                                step="0.1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {i18n.language === 'en' ? 'Delivery Type' : 'Тип доставки'}
                            </label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input type="radio" id="standard" name="delivery-type" className="mr-2" />
                                    <label htmlFor="standard">
                                        {i18n.language === 'en' ? 'Standard (3-5 days)' : 'Стандарт (3-5 дней)'}
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="express" name="delivery-type" className="mr-2" />
                                    <label htmlFor="express">
                                        {i18n.language === 'en' ? 'Express (1-2 days)' : 'Экспресс (1-2 дня)'}
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="same-day" name="delivery-type" className="mr-2" />
                                    <label htmlFor="same-day">
                                        {i18n.language === 'en' ? 'Same Day' : 'В тот же день'}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                            {i18n.language === 'en' ? 'Calculate' : 'Рассчитать'}
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-medium mb-4">
                            {i18n.language === 'en' ? 'Delivery Estimate' : 'Оценка доставки'}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">
                                    {i18n.language === 'en' ? 'Delivery Fee' : 'Стоимость доставки'}
                                </span>
                                <span className="font-medium">2,500 ₸</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">
                                    {i18n.language === 'en' ? 'Insurance' : 'Страховка'}
                                </span>
                                <span className="font-medium">500 ₸</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">
                                    {i18n.language === 'en' ? 'Tax' : 'Налог'}
                                </span>
                                <span className="font-medium">300 ₸</span>
                            </div>
                            <div className="border-t pt-2 mt-2">
                                <div className="flex justify-between font-bold">
                                    <span>
                                        {i18n.language === 'en' ? 'Total' : 'Итого'}
                                    </span>
                                    <span>3,300 ₸</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 mt-2">
                                {i18n.language === 'en' ? 'Estimated delivery date: June 15, 2023' : 'Ориентировочная дата доставки: 15 июня 2023 г.'}
                            </div>
                        </div>
                        <button className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
                            {i18n.language === 'en' ? 'Create Delivery Order' : 'Создать заказ доставки'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliveryPage;
