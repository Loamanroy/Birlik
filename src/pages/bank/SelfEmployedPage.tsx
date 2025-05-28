function SelfEmployedPage() {
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Самозанятость</h1>
                <p className="text-gray-600 mt-2">Управление статусом самозанятого и налогами</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Статус самозанятого</h2>
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white mr-4">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium">Статус активен</div>
                            <div className="text-sm text-gray-500">с 15.03.2023</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">ИИН</span>
                            <span className="font-medium">123456789012</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Налоговый режим</span>
                            <span className="font-medium">Стандартный</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Налоговая ставка</span>
                            <span className="font-medium">3%</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            Изменить налоговый режим
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Налоги и отчетность</h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Налоги за текущий месяц</span>
                        <span className="font-medium text-xl">1 245,78 ₸</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mb-4">
                        <div className="h-2 bg-blue-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Доход за месяц</span>
                            <span className="font-medium">41 526,00 ₸</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Налоговые вычеты</span>
                            <span className="font-medium">0,00 ₸</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Оплатить налоги
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">Доходы и чеки</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Дата
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Описание
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Сумма
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Налог
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Статус
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                {
                                    date: "25.05.2023",
                                    description: "Консультационные услуги",
                                    amount: "15 000,00 ₸",
                                    tax: "450,00 ₸",
                                    status: "Оплачен"
                                },
                                {
                                    date: "18.05.2023",
                                    description: "Разработка дизайна",
                                    amount: "12 500,00 ₸",
                                    tax: "375,00 ₸",
                                    status: "Оплачен"
                                },
                                {
                                    date: "10.05.2023",
                                    description: "Перевод текста",
                                    amount: "8 000,00 ₸",
                                    tax: "240,00 ₸",
                                    status: "Оплачен"
                                },
                                {
                                    date: "05.05.2023",
                                    description: "Фотосъемка",
                                    amount: "6 026,00 ₸",
                                    tax: "180,78 ₸",
                                    status: "Оплачен"
                                }
                            ].map((income, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {income.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {income.description}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {income.amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {income.tax}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {income.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex justify-between">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700">
                        Выгрузить отчет
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        Создать чек
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SelfEmployedPage;
