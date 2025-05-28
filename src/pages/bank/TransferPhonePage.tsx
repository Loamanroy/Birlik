function TransferPhonePage() {
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Перевод по номеру телефона</h1>
                <p className="text-gray-600 mt-2">Быстрый перевод денег по номеру телефона</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Новый перевод</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                                Номер телефона получателя
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 rounded-l-md border border-r-0 border-gray-300">
                                    +7
                                </span>
                                <input
                                    className="appearance-none border border-gray-300 rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    id="phone"
                                    type="tel"
                                    placeholder="(XXX) XXX-XX-XX"
                                />
                            </div>
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
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                                Сообщение получателю (необязательно)
                            </label>
                            <textarea
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="message"
                                rows={3}
                                placeholder="Введите сообщение"
                            ></textarea>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                                Комиссия: <span className="font-medium">0 ₸</span>
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
                    <h2 className="text-lg font-bold mb-4">Частые переводы</h2>
                    <div className="space-y-3">
                        {[
                            {
                                name: "Анна Смирнова",
                                phone: "+7 (701) 123-45-67",
                                lastAmount: "5 000 ₸",
                                lastDate: "15.05.2023"
                            },
                            {
                                name: "Иван Петров",
                                phone: "+7 (702) 987-65-43",
                                lastAmount: "10 000 ₸",
                                lastDate: "10.05.2023"
                            },
                            {
                                name: "Елена Иванова",
                                phone: "+7 (705) 555-77-88",
                                lastAmount: "3 500 ₸",
                                lastDate: "05.05.2023"
                            }
                        ].map((contact, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div>
                                    <div className="font-medium">{contact.name}</div>
                                    <div className="text-sm text-gray-500">{contact.phone}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium">{contact.lastAmount}</div>
                                    <div className="text-sm text-gray-500">{contact.lastDate}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                            Показать все контакты
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">История переводов</h2>
                <div className="space-y-3">
                    {[
                        {
                            name: "Анна Смирнова",
                            phone: "+7 (701) 123-45-67",
                            amount: "-5 000 ₸",
                            date: "15.05.2023",
                            status: "Выполнен",
                            positive: false
                        },
                        {
                            name: "Иван Петров",
                            phone: "+7 (702) 987-65-43",
                            amount: "-10 000 ₸",
                            date: "10.05.2023",
                            status: "Выполнен",
                            positive: false
                        },
                        {
                            name: "Елена Иванова",
                            phone: "+7 (705) 555-77-88",
                            amount: "+3 500 ₸",
                            date: "05.05.2023",
                            status: "Получен",
                            positive: true
                        }
                    ].map((transfer, index) => (
                        <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                            <div>
                                <div className="font-medium">{transfer.name}</div>
                                <div className="text-sm text-gray-500">{transfer.phone} • {transfer.date}</div>
                            </div>
                            <div className="text-right">
                                <div className={`font-medium ${transfer.positive ? 'text-green-500' : 'text-red-500'}`}>
                                    {transfer.amount}
                                </div>
                                <div className="text-sm text-gray-500">{transfer.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        Показать все переводы
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TransferPhonePage;
