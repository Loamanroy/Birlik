import { useTranslation } from 'react-i18next';
import DashboardCard from '../../components/shared/DashboardCard';
import { CreditCard, Smartphone, Shield, Wallet, BarChart4, ArrowRightLeft } from 'lucide-react';

function DigitalBankingPage() {
    const { i18n } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Digital Banking' : 'Цифровой банкинг'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Manage your finances digitally with advanced tools and security' : 'Управляйте финансами цифровым способом с продвинутыми инструментами и безопасностью'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Digital Cards' : 'Цифровые карты'}
                    subtitle={i18n.language === 'en' ? 'Manage your virtual cards' : 'Управление виртуальными картами'}
                    icon={<CreditCard className="h-6 w-6 text-blue-500" />}
                    onClick={() => console.log('Navigate to digital cards')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Mobile Banking' : 'Мобильный банкинг'}
                    subtitle={i18n.language === 'en' ? 'Access your accounts on the go' : 'Доступ к счетам на ходу'}
                    icon={<Smartphone className="h-6 w-6 text-green-500" />}
                    onClick={() => console.log('Navigate to mobile banking')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Security Center' : 'Центр безопасности'}
                    subtitle={i18n.language === 'en' ? 'Protect your digital assets' : 'Защитите свои цифровые активы'}
                    icon={<Shield className="h-6 w-6 text-red-500" />}
                    onClick={() => console.log('Navigate to security center')}
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Digital Wallet' : 'Цифровой кошелек'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-4">
                            <Wallet className="h-8 w-8 text-blue-500 mr-3" />
                            <div>
                                <h3 className="font-medium">
                                    {i18n.language === 'en' ? 'Main Wallet' : 'Основной кошелек'}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {i18n.language === 'en' ? 'For everyday transactions' : 'Для повседневных транзакций'}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Balance' : 'Баланс'}
                            </span>
                            <span className="font-medium">1,250.00 ₸</span>
                        </div>
                        <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                            {i18n.language === 'en' ? 'Top Up' : 'Пополнить'}
                        </button>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-4">
                            <Wallet className="h-8 w-8 text-purple-500 mr-3" />
                            <div>
                                <h3 className="font-medium">
                                    {i18n.language === 'en' ? 'Savings Wallet' : 'Накопительный кошелек'}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {i18n.language === 'en' ? 'For your savings goals' : 'Для ваших целей накопления'}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Balance' : 'Баланс'}
                            </span>
                            <span className="font-medium">5,750.00 ₸</span>
                        </div>
                        <button className="w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg">
                            {i18n.language === 'en' ? 'Manage' : 'Управление'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Financial Analytics' : 'Финансовая аналитика'}
                    </h2>
                    <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <BarChart4 className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Monthly Income' : 'Доходы за месяц'}
                            </span>
                            <span className="font-medium">320,000 ₸</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Monthly Expenses' : 'Расходы за месяц'}
                            </span>
                            <span className="font-medium">280,000 ₸</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Savings' : 'Накопления'}
                            </span>
                            <span className="font-medium text-green-500">40,000 ₸</span>
                        </div>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'Detailed Report' : 'Подробный отчет'}
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Quick Transfers' : 'Быстрые переводы'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                name: i18n.language === 'en' ? "Anna K." : "Анна К.",
                                phone: "+7 (701) 123-45-67",
                                lastTransfer: "15,000 ₸"
                            },
                            {
                                name: i18n.language === 'en' ? "Maxim S." : "Максим С.",
                                phone: "+7 (702) 987-65-43",
                                lastTransfer: "25,000 ₸"
                            },
                            {
                                name: i18n.language === 'en' ? "Elena T." : "Елена Т.",
                                phone: "+7 (705) 555-77-88",
                                lastTransfer: "5,000 ₸"
                            }
                        ].map((contact, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                        <span className="text-blue-500 font-medium">{contact.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <div className="font-medium">{contact.name}</div>
                                        <div className="text-sm text-gray-500">{contact.phone}</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500 mr-2">{contact.lastTransfer}</span>
                                    <ArrowRightLeft className="h-4 w-4 text-blue-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                        {i18n.language === 'en' ? 'New Transfer' : 'Новый перевод'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DigitalBankingPage;
