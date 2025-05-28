function TransferDetailsPage() {
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Перевод по реквизитам</h1>
                <p className="text-gray-600 mt-2">Перевод денег по банковским реквизитам</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Новый перевод</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="bank">
                                Банк получателя
                            </label>
                            <select
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="bank"
                            >
                                <option>Выберите банк</option>
                                <option>Birlik Bank</option>
                                <option>Казкоммерцбанк</option>
                                <option>Народный Банк</option>
                                <option>Сбербанк</option>
                                <option>Другой банк</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="account">
                                Номер счета / IBAN
                            </label>
                            <input
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="account"
                                type="text"
                                placeholder="KZ123456789012345678"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="bic">
                                БИК / SWIFT
                            </label>
                            <input
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="bic"
                                type="text"
                                placeholder="ABCDEFGH"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="recipient">
                                ФИО получателя
                            </label>
                            <input
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="recipient"
                                type="text"
                                placeholder="Иванов Иван Иванович"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="amount">
                                Сумма перевода
                            </label>
                            <div className="flex">
                                <input
                                    className="appearance-none border border-gray-300 rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    id="amount"
                                    type="number"
                                    placeholder="0"
                                />
                                <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 rounded-r-md border border-l-0 border-gray-300">
                                    ₸
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="purpose">
                                Назначение платежа
                            </label>
                            <textarea
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="purpose"
                                rows={3}
                                placeholder="Укажите назначение платежа"
                            ></textarea>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                                Комиссия: <span className="font-medium">150 ₸</span>
                            </div>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                type="submit"
                            >
                                Перевести
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Шаблоны переводов</h2>
                    <div className="space-y-3">
                        {[
                            {
                                name: "ТОО Астана Строй",
                                account: "KZ123456789012345678",
                                bank: "Народный Банк",
                                lastAmount: "150 000 ₸",
                                lastDate: "15.04.2023"
                            },
                            {
                                name: "ИП Сергеев А.В.",
                                account: "KZ987654321098765432",
                                bank: "Казкоммерцбанк",
                                lastAmount: "75 000 ₸",
                                lastDate: "10.04.2023"
                            },
                            {
                                name: "ТОО Алматы Логистик",
                                account: "KZ456789012345678901",
                                bank: "Сбербанк",
                                lastAmount: "220 000 ₸",
                                lastDate: "05.04.2023"
                            }
                        ].map((template, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div>
                                    <div className="font-medium">{template.name}</div>
                                    <div className="text-sm text-gray-500">{template.bank} • {template.account.substring(0, 4)}...{template.account.substring(template.account.length - 4)}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium">{template.lastAmount}</div>
                                    <div className="text-sm text-gray-500">{template.lastDate}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                            Все шаблоны
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">История переводов</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Дата
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Получатель
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Счет
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
                                    date: "15.04.2023",
                                    recipient: "ТОО Астана Строй",
                                    account: "KZ123456789012345678",
                                    amount: "150 000 ₸",
                                    status: "Выполнен"
                                },
                                {
                                    date: "10.04.2023",
                                    recipient: "ИП Сергеев А.В.",
                                    account: "KZ987654321098765432",
                                    amount: "75 000 ₸",
                                    status: "Выполнен"
                                },
                                {
                                    date: "05.04.2023",
                                    recipient: "ТОО Алматы Логистик",
                                    account: "KZ456789012345678901",
                                    amount: "220 000 ₸",
                                    status: "Выполнен"
                                }
                            ].map((transfer, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {transfer.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {transfer.recipient}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {transfer.account.substring(0, 4)}...{transfer.account.substring(transfer.account.length - 4)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {transfer.amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {transfer.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TransferDetailsPage;
