import { Link } from 'react-router-dom';

function InternetBankPage() {
    const products = [
        {
            id: 1,
            title: "1 полис",
            subtitle: "Страхование",
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <defs>
                        <linearGradient id="paint0_linear" x1="12" y1="4" x2="9.868" y2="8.779" gradientUnits="userSpaceOnUse">
                            <stop stopOpacity=".5" stopColor="currentColor"/>
                            <stop offset="1" stopOpacity=".3" stopColor="currentColor"/>
                        </linearGradient>
                    </defs>
                    <path opacity=".25" fillRule="evenodd" clipRule="evenodd" d="m12 1 .081.08a11 11 0 0 0 7.583 3.14l.114.002-6.717 6.717A1.496 1.496 0 0 0 12 10.5V1Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.94 10.94 4.221 4.221l.114-.001a11 11 0 0 0 7.583-3.141L12 1v9.5c-.414 0-.79.168-1.06.44Z" fill="url(#paint0_linear)"/>
                </svg>
            ),
            url: "/bank/insurance"
        },
        {
            id: 2,
            title: "Мобильная связь",
            subtitle: "Birlik",
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.828 4H23v11a5 5 0 0 1-5 5H1V9.828a2 2 0 0 1 .586-1.414l3.828-3.828A2 2 0 0 1 6.828 4ZM17 8a2 2 0 0 1 2 2v6h-8a2 2 0 0 1-2-2V8h8Z" fill="currentColor"/>
                </svg>
            ),
            url: "/bank/mobile"
        },
        {
            id: 3,
            title: "101,04 Т",
            subtitle: "Инвестиции",
            badge: "+2 Т • 1,6%",
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v1.5H16A2 2 0 0 1 14.063 4H9.937A2 2 0 0 1 8 5.5h-.5V4Z" fill="currentColor"/>
                </svg>
            ),
            url: "/bank/invest"
        },
        {
            id: 4,
            title: "Самозанятость",
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 1h10v6h6v4.681A1.692 1.692 0 0 0 18.308 10H17.09L16 13.273 14.91 10h-1.218c-.934 0-1.692.758-1.692 1.692v.126h1.208c.365 0 .688.233.803.579L14.545 14a.786.786 0 0 1-1.034.746l-.056-.019-.056-.018a1.514 1.514 0 0 1-1.035-1.436L8 10.363v4.762a4.23 4.23 0 0 0 2.205 3.714l1.795.98s.364-1.455 1.454-1.455c1.455 0 1.455 1.09 1.455 1.09l-3.273 3.273s.14.112.395.273H7a3 3 0 0 1-3-3V1Z" fill="currentColor"/>
                </svg>
            ),
            url: "/bank/self-employed"
        },
        {
            id: 5,
            title: "1 756,01 Т",
            subtitle: "Накопительный счет",
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path d="m24 12-7.5-9-5 6H17v9a3.007 3.007 0 0 1-3 3h2.5a4 4 0 0 0 4-4v-5H24Z" fill="currentColor"/>
                </svg>
            ),
            url: "/bank/savings"
        }
    ];

    const paymentOptions = [
        {
            title: "Перевести по телефону",
            icon: "/phone-icon.svg",
            url: "/bank/transfer/phone"
        },
        {
            title: "Перевести по реквизитам",
            icon: "/transfer-icon.svg",
            url: "/bank/transfer/details"
        },
        {
            title: "Оплатить мобильный",
            icon: "/mobile-icon.svg",
            url: "/bank/pay/mobile"
        },
        {
            title: "Распознать квитанцию",
            icon: "/qr-icon.svg",
            url: "/bank/pay/qr"
        }
    ];

    return (
        <main className="bg-gray-50 min-h-screen pb-8">
            {/* Заголовок */}
            <div className="container mx-auto px-4 pt-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Добрый день</h1>
                </div>

                {/* Продукты */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="col-span-1 md:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products.map(product => (
                                <div key={product.id} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                                    <Link to={product.url} className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                                            <div className="w-6 h-6">
                                                {product.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-medium">{product.title}</div>
                                            <div className="text-sm text-gray-500">{product.subtitle}</div>
                                            {product.badge && (
                                                <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800">
                                                    {product.badge}
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Поиск */}
                    <div className="bg-white rounded-xl shadow-sm p-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Поиск"
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute left-3 top-2.5 text-gray-400">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.68 17.182a7.75 7.75 0 0 1-12.427-6.18 7.75 7.75 0 1 1 13.848 4.784l2.718 2.737a1.495 1.495 0 0 1 0 2.116l-.352.36-3.786-3.817Zm1.072-6.18a5.75 5.75 0 1 1-11.498 0 5.75 5.75 0 1 1 11.498 0Z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Кнопки оплаты */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {paymentOptions.map((option, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                            <Link to={option.url} className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                    <img src={option.icon} alt="" className="w-8 h-8"/>
                                </div>
                                <div className="text-sm font-medium">{option.title}</div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Операции */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Операции в мае</h2>
                        <Link to="/bank/transactions" className="text-blue-500 flex items-center">
                            Все операции
                            <svg width="16" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path d="M.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 .293 3.707L4.586 8 .293 12.293Z" fill="currentColor"/>
                            </svg>
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">Траты</button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">Пополнения</button>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {['Фастфуд', 'Супермаркеты', 'Такси', 'Переводы', 'Развлечения', 'Остальное'].map((category, index) => (
                            <div key={index} className="px-3 py-2 bg-gray-50 rounded-lg">
                                <div className="text-sm font-medium">{category}</div>
                                <div className="text-sm text-gray-500">{Math.floor(Math.random() * 10000)} Т</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default InternetBankPage;