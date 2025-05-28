import { useTranslation } from 'react-i18next';
import DashboardCard from '../../components/shared/DashboardCard';
import { BookOpen, Landmark, Calculator, Users, BarChart, FileText } from 'lucide-react';

function IslamicBankingPage() {
    const { i18n } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Islamic Banking' : 'Исламский банкинг'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Sharia-compliant financial services and investments' : 'Финансовые услуги и инвестиции, соответствующие шариату'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Halal Investments' : 'Халяльные инвестиции'}
                    subtitle={i18n.language === 'en' ? 'Sharia-compliant investment options' : 'Инвестиционные возможности, соответствующие шариату'}
                    icon={<Landmark className="h-6 w-6 text-green-500" />}
                    onClick={() => console.log('Navigate to halal investments')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Islamic Financing' : 'Исламское финансирование'}
                    subtitle={i18n.language === 'en' ? 'Interest-free financing solutions' : 'Беспроцентные решения финансирования'}
                    icon={<Calculator className="h-6 w-6 text-blue-500" />}
                    onClick={() => console.log('Navigate to islamic financing')}
                />
                
                <DashboardCard 
                    title={i18n.language === 'en' ? 'Sharia Advisory' : 'Консультации по шариату'}
                    subtitle={i18n.language === 'en' ? 'Expert guidance on Islamic finance' : 'Экспертное руководство по исламским финансам'}
                    icon={<BookOpen className="h-6 w-6 text-purple-500" />}
                    onClick={() => console.log('Navigate to sharia advisory')}
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Islamic Banking Products' : 'Продукты исламского банкинга'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-medium mb-2">
                                {i18n.language === 'en' ? 'Murabaha Financing' : 'Финансирование Мурабаха'}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {i18n.language === 'en' ? 'Cost-plus financing for goods and assets' : 'Финансирование с наценкой для товаров и активов'}
                            </p>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">
                                    {i18n.language === 'en' ? 'Profit Rate' : 'Ставка прибыли'}
                                </span>
                                <span className="font-medium">3.5% - 5.0%</span>
                            </div>
                            <div className="flex justify-between text-sm mt-1">
                                <span className="text-gray-500">
                                    {i18n.language === 'en' ? 'Term' : 'Срок'}
                                </span>
                                <span className="font-medium">1 - 5 years</span>
                            </div>
                            <button className="w-full mt-3 px-4 py-2 bg-green-500 text-white rounded-lg">
                                {i18n.language === 'en' ? 'Apply Now' : 'Подать заявку'}
                            </button>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-medium mb-2">
                                {i18n.language === 'en' ? 'Ijara Leasing' : 'Лизинг Иджара'}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {i18n.language === 'en' ? 'Islamic leasing for equipment and property' : 'Исламский лизинг для оборудования и недвижимости'}
                            </p>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">
                                    {i18n.language === 'en' ? 'Rental Rate' : 'Ставка аренды'}
                                </span>
                                <span className="font-medium">4.0% - 6.0%</span>
                            </div>
                            <div className="flex justify-between text-sm mt-1">
                                <span className="text-gray-500">
                                    {i18n.language === 'en' ? 'Term' : 'Срок'}
                                </span>
                                <span className="font-medium">2 - 10 years</span>
                            </div>
                            <button className="w-full mt-3 px-4 py-2 bg-green-500 text-white rounded-lg">
                                {i18n.language === 'en' ? 'Apply Now' : 'Подать заявку'}
                            </button>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-medium mb-2">
                                {i18n.language === 'en' ? 'Musharaka Partnership' : 'Партнерство Мушарака'}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {i18n.language === 'en' ? 'Profit and loss sharing partnership' : 'Партнерство с разделением прибыли и убытков'}
                            </p>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">
                                    {i18n.language === 'en' ? 'Profit Sharing' : 'Разделение прибыли'}
                                </span>
                                <span className="font-medium">50/50 - 70/30</span>
                            </div>
                            <div className="flex justify-between text-sm mt-1">
                                <span className="text-gray-500">
                                    {i18n.language === 'en' ? 'Investment' : 'Инвестиции'}
                                </span>
                                <span className="font-medium">500,000+ ₸</span>
                            </div>
                            <button className="w-full mt-3 px-4 py-2 bg-green-500 text-white rounded-lg">
                                {i18n.language === 'en' ? 'Apply Now' : 'Подать заявку'}
                            </button>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-medium mb-2">
                                {i18n.language === 'en' ? 'Sukuk Investments' : 'Инвестиции в Сукук'}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {i18n.language === 'en' ? 'Islamic bonds with asset backing' : 'Исламские облигации с обеспечением активами'}
                            </p>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">
                                    {i18n.language === 'en' ? 'Expected Return' : 'Ожидаемая доходность'}
                                </span>
                                <span className="font-medium">3.0% - 5.5%</span>
                            </div>
                            <div className="flex justify-between text-sm mt-1">
                                <span className="text-gray-500">
                                    {i18n.language === 'en' ? 'Minimum Investment' : 'Минимальные инвестиции'}
                                </span>
                                <span className="font-medium">100,000 ₸</span>
                            </div>
                            <button className="w-full mt-3 px-4 py-2 bg-green-500 text-white rounded-lg">
                                {i18n.language === 'en' ? 'Invest Now' : 'Инвестировать'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Sharia Compliance' : 'Соответствие шариату'}
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                <Users className="h-5 w-5 text-green-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">
                                    {i18n.language === 'en' ? 'Sharia Board' : 'Совет по шариату'}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {i18n.language === 'en' ? 'Our products are approved by a board of Islamic scholars who ensure compliance with Sharia principles.' : 'Наши продукты одобрены советом исламских ученых, которые обеспечивают соответствие принципам шариата.'}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                <FileText className="h-5 w-5 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">
                                    {i18n.language === 'en' ? 'Compliance Reports' : 'Отчеты о соответствии'}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {i18n.language === 'en' ? 'Regular audits and reports ensure ongoing compliance with Islamic finance principles.' : 'Регулярные аудиты и отчеты обеспечивают постоянное соответствие принципам исламского финансирования.'}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                <BookOpen className="h-5 w-5 text-purple-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">
                                    {i18n.language === 'en' ? 'Educational Resources' : 'Образовательные ресурсы'}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {i18n.language === 'en' ? 'Learn about Islamic finance principles and how our products adhere to them.' : 'Узнайте о принципах исламского финансирования и о том, как наши продукты соответствуют им.'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'Learn More' : 'Узнать больше'}
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Market Insights' : 'Рыночная аналитика'}
                    </h2>
                    <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <BarChart className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Islamic Banking Growth' : 'Рост исламского банкинга'}
                            </span>
                            <span className="font-medium text-green-500">+12.5%</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Sukuk Issuance' : 'Выпуск сукук'}
                            </span>
                            <span className="font-medium">2.5B ₸</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Halal Investments' : 'Халяльные инвестиции'}
                            </span>
                            <span className="font-medium">1.8B ₸</span>
                        </div>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'View Full Report' : 'Просмотреть полный отчет'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default IslamicBankingPage;
