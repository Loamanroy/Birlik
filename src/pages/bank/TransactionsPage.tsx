function TransactionsPage() {
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">История транзакций</h1>
                <p className="text-gray-600 mt-2">Просмотр и управление историей транзакций</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-bold">Все транзакции</h2>
                        <p className="text-sm text-gray-500">Показаны последние 30 дней</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
                            <option>Все типы</option>
                            <option>Пополнения</option>
                            <option>Списания</option>
                            <option>Переводы</option>
                            <option>Платежи</option>
                        </select>
                        <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
                            <option>За 30 дней</option>
                            <option>За 90 дней</option>
                            <option>За 6 месяцев</option>
                            <option>За год</option>
                            <option>Произвольный период</option>
                        </select>
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                            Фильтр
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Дата и время
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Описание
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Категория
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Сумма
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Статус
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                {
                                    date: "25.05.2023 14:32",
                                    description: "Кофейня 'Арома'",
                                    category: "Рестораны и кафе",
                                    amount: "-850 ₸",
                                    status: "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "24.05.2023 10:15",
                                    description: "Зачисление зарплаты",
                                    category: "Зарплата",
                                    amount: "+150 000 ₸",
                                    status: "Выполнен",
                                    positive: true
                                },
                                {
                                    date: "23.05.2023 18:45",
                                    description: "Супермаркет 'Магнум'",
                                    category: "Продукты",
                                    amount: "-12 450 ₸",
                                    status: "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "22.05.2023 12:30",
                                    description: "Перевод Анне Смирновой",
                                    category: "Переводы",
                                    amount: "-5 000 ₸",
                                    status: "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "21.05.2023 09:20",
                                    description: "АЗС 'КазМунайГаз'",
                                    category: "Транспорт",
                                    amount: "-8 500 ₸",
                                    status: "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "20.05.2023 16:40",
                                    description: "Возврат средств - Ozon",
                                    category: "Покупки",
                                    amount: "+3 200 ₸",
                                    status: "Выполнен",
                                    positive: true
                                },
                                {
                                    date: "19.05.2023 11:15",
                                    description: "Оплата мобильной связи",
                                    category: "Связь",
                                    amount: "-2 000 ₸",
                                    status: "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "18.05.2023 14:50",
                                    description: "Кинотеатр 'Арман'",
                                    category: "Развлечения",
                                    amount: "-3 600 ₸",
                                    status: "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "17.05.2023 19:30",
                                    description: "Аптека 'Europharma'",
                                    category: "Здоровье",
                                    amount: "-4 750 ₸",
                                    status: "Выполнен",
                                    positive: false
                                },
                                {
                                    date: "16.05.2023 08:45",
                                    description: "Коммунальные платежи",
                                    category: "ЖКХ",
                                    amount: "-15 800 ₸",
                                    status: "Выполнен",
                                    positive: false
                                }
                            ].map((transaction, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {transaction.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {transaction.description}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {transaction.category}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${transaction.positive ? 'text-green-500' : 'text-red-500'}`}>
                                        {transaction.amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {transaction.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                        Показано 10 из 156 транзакций
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700">
                            Предыдущая
                        </button>
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
                            1
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700">
                            2
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700">
                            3
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700">
                            Следующая
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Расходы по категориям</h2>
                    <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
                        <p className="text-gray-500">Диаграмма расходов по категориям</p>
                    </div>
                    <div className="space-y-2">
                        {[
                            { category: "Продукты", amount: "45 320 ₸", percentage: 28 },
                            { category: "Транспорт", amount: "32 150 ₸", percentage: 20 },
                            { category: "Развлечения", amount: "25 600 ₸", percentage: 16 },
                            { category: "ЖКХ", amount: "18 400 ₸", percentage: 11 },
                            { category: "Прочее", amount: "40 530 ₸", percentage: 25 }
                        ].map((category, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <div>
                                    <div className="font-medium">{category.category}</div>
                                    <div className="text-sm text-gray-500">{category.percentage}%</div>
                                </div>
                                <div className="font-medium">{category.amount}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Экспорт и отчеты</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="report-type">
                                Тип отчета
                            </label>
                            <select
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="report-type"
                            >
                                <option>Детализация операций</option>
                                <option>Анализ расходов</option>
                                <option>Налоговый отчет</option>
                                <option>Выписка для визы</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="report-period">
                                Период
                            </label>
                            <select
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="report-period"
                            >
                                <option>За последний месяц</option>
                                <option>За последние 3 месяца</option>
                                <option>За последние 6 месяцев</option>
                                <option>За последний год</option>
                                <option>Произвольный период</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="report-format">
                                Формат файла
                            </label>
                            <select
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="report-format"
                            >
                                <option>PDF</option>
                                <option>Excel</option>
                                <option>CSV</option>
                            </select>
                        </div>
                        <div className="pt-2">
                            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                                Сформировать отчет
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionsPage;
