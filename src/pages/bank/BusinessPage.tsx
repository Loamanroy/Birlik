import { useTranslation } from 'react-i18next';

function BusinessPage() {
    const { i18n } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Business Banking' : 'Бизнес-банкинг'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Manage business accounts and company finances' : 'Управление бизнес-счетами и финансами компании'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Company Accounts' : 'Счета компании'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                name: i18n.language === 'en' ? "Main LLC Account" : "Основной счет ТОО",
                                number: "KZ123456789012345678",
                                balance: "1 245 678,50 ₸",
                                currency: "KZT"
                            },
                            {
                                name: i18n.language === 'en' ? "Currency Account" : "Валютный счет",
                                number: "KZ987654321098765432",
                                balance: "15 450,00 $",
                                currency: "USD"
                            },
                            {
                                name: i18n.language === 'en' ? "Reserve Account" : "Резервный счет",
                                number: "KZ456789012345678901",
                                balance: "500 000,00 ₸",
                                currency: "KZT"
                            }
                        ].map((account, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div>
                                    <div className="font-medium">{account.name}</div>
                                    <div className="text-sm text-gray-500">{account.number.substring(0, 4)}...{account.number.substring(account.number.length - 4)}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium">{account.balance}</div>
                                    <div className="text-sm text-gray-500">{account.currency}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg">
                            {i18n.language === 'en' ? 'Open Account' : 'Открыть счет'}
                        </button>
                        <button className="flex-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            {i18n.language === 'en' ? 'Manage Accounts' : 'Управление счетами'}
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Financial Analytics' : 'Финансовая аналитика'}
                    </h2>
                    <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <p className="text-gray-500">
                            {i18n.language === 'en' ? 'Cash Flow Chart' : 'График движения средств'}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Monthly Income' : 'Доходы за месяц'}
                            </span>
                            <span className="font-medium">2 450 000 ₸</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Monthly Expenses' : 'Расходы за месяц'}
                            </span>
                            <span className="font-medium">1 850 000 ₸</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Profit' : 'Прибыль'}
                            </span>
                            <span className="font-medium text-green-500">600 000 ₸</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                            {i18n.language === 'en' ? 'Detailed Report' : 'Подробный отчет'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Payments' : 'Платежи'}
                    </h2>
                    <div className="space-y-2">
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            {i18n.language === 'en' ? 'Create Payment' : 'Создать платеж'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            {i18n.language === 'en' ? 'Payment Templates' : 'Шаблоны платежей'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {i18n.language === 'en' ? 'Scheduled Payments' : 'Запланированные платежи'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            {i18n.language === 'en' ? 'Payment History' : 'История платежей'}
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Payroll Project' : 'Зарплатный проект'}
                    </h2>
                    <div className="space-y-2">
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {i18n.language === 'en' ? 'Employees' : 'Сотрудники'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {i18n.language === 'en' ? 'Payroll Processing' : 'Начисление зарплаты'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {i18n.language === 'en' ? 'Reports' : 'Отчеты'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {i18n.language === 'en' ? 'Settings' : 'Настройки'}
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Business Services' : 'Бизнес-услуги'}
                    </h2>
                    <div className="space-y-2">
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {i18n.language === 'en' ? 'Business Loans' : 'Кредиты для бизнеса'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            {i18n.language === 'en' ? 'Insurance' : 'Страхование'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            {i18n.language === 'en' ? 'Acquiring' : 'Эквайринг'}
                        </button>
                        <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left rounded-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {i18n.language === 'en' ? 'Foreign Trade' : 'ВЭД'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Recent Operations' : 'Последние операции'}
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Date' : 'Дата'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Description' : 'Описание'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Account' : 'Счет'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Amount' : 'Сумма'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Status' : 'Статус'}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                {
                                    date: "25.05.2023",
                                    description: i18n.language === 'en' ? "Payment to supplier 'AlmatyStroy' LLC" : "Оплата поставщику ТОО 'АлматыСтрой'",
                                    account: i18n.language === 'en' ? "Main LLC Account" : "Основной счет ТОО",
                                    amount: "-450 000,00 ₸",
                                    status: i18n.language === 'en' ? "Completed" : "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "24.05.2023",
                                    description: i18n.language === 'en' ? "Receipt from 'Astana Invest' LLC" : "Поступление от ТОО 'Астана Инвест'",
                                    account: i18n.language === 'en' ? "Main LLC Account" : "Основной счет ТОО",
                                    amount: "+780 000,00 ₸",
                                    status: i18n.language === 'en' ? "Completed" : "Выполнен",
                                    positive: true
                                },
                                {
                                    date: "23.05.2023",
                                    description: i18n.language === 'en' ? "Salary payment" : "Выплата заработной платы",
                                    account: i18n.language === 'en' ? "Main LLC Account" : "Основной счет ТОО",
                                    amount: "-1 250 000,00 ₸",
                                    status: i18n.language === 'en' ? "Completed" : "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "22.05.2023",
                                    description: i18n.language === 'en' ? "Office rent payment" : "Оплата аренды офиса",
                                    account: i18n.language === 'en' ? "Main LLC Account" : "Основной счет ТОО",
                                    amount: "-350 000,00 ₸",
                                    status: i18n.language === 'en' ? "Completed" : "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "21.05.2023",
                                    description: i18n.language === 'en' ? "Currency conversion" : "Конвертация валюты",
                                    account: i18n.language === 'en' ? "Currency Account" : "Валютный счет",
                                    amount: "+5 000,00 $",
                                    status: i18n.language === 'en' ? "Completed" : "Выполнен",
                                    positive: true
                                }
                            ].map((operation, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {operation.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {operation.description}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {operation.account}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${operation.positive ? 'text-green-500' : 'text-red-500'}`}>
                                        {operation.amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {operation.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4">
                    <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'Show All Operations' : 'Показать все операции'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BusinessPage;
