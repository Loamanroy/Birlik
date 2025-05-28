function PayQRPage() {
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Оплата по QR-коду</h1>
                <p className="text-gray-600 mt-2">Быстрая оплата товаров и услуг по QR-коду</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Сканировать QR-код</h2>
                    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-2">
                            Открыть камеру
                        </button>
                        <p className="text-sm text-gray-500 text-center">
                            Наведите камеру на QR-код для сканирования
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500 mb-2">или</p>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                            Загрузить QR-код из галереи
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Мой QR-код</h2>
                    <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg mb-4">
                        <div className="bg-white p-2 rounded-lg shadow-sm mb-4">
                            <svg viewBox="0 0 200 200" className="w-48 h-48">
                                <path fill="#000000" d="M0,0 h200v200h-200z" />
                                <path fill="#FFFFFF" d="M10,10 h180v180h-180z" />
                                <path fill="#000000" d="M20,20 h40v40h-40z M60,20 h10v10h-10z M80,20 h10v10h-10z M100,20 h10v10h-10z M120,20 h10v10h-10z M140,20 h40v40h-40z M30,30 h20v20h-20z M150,30 h20v20h-20z M60,40 h10v10h-10z M80,40 h10v10h-10z M100,40 h10v10h-10z M120,40 h10v10h-10z M60,60 h10v10h-10z M80,60 h10v10h-10z M100,60 h10v10h-10z M120,60 h10v10h-10z M20,80 h10v10h-10z M40,80 h10v10h-10z M60,80 h10v10h-10z M80,80 h10v10h-10z M100,80 h10v10h-10z M120,80 h10v10h-10z M140,80 h10v10h-10z M160,80 h10v10h-10z M20,100 h10v10h-10z M40,100 h10v10h-10z M60,100 h10v10h-10z M80,100 h10v10h-10z M100,100 h10v10h-10z M120,100 h10v10h-10z M140,100 h10v10h-10z M160,100 h10v10h-10z M20,120 h10v10h-10z M40,120 h10v10h-10z M60,120 h10v10h-10z M80,120 h10v10h-10z M100,120 h10v10h-10z M120,120 h10v10h-10z M140,120 h10v10h-10z M160,120 h10v10h-10z M60,140 h10v10h-10z M80,140 h10v10h-10z M100,140 h10v10h-10z M120,140 h10v10h-10z M20,140 h40v40h-40z M140,140 h40v40h-40z M30,150 h20v20h-20z M150,150 h20v20h-20z M60,160 h10v10h-10z M80,160 h10v10h-10z M100,160 h10v10h-10z M120,160 h10v10h-10z" />
                            </svg>
                        </div>
                        <p className="font-medium">Ваш счет: 1234 5678 9012 3456</p>
                        <p className="text-sm text-gray-500 mb-4">Покажите этот QR-код для получения платежа</p>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                Поделиться
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">История платежей по QR</h2>
                <div className="space-y-3">
                    {[
                        {
                            merchant: "Кофейня 'Арома'",
                            amount: "850 ₸",
                            date: "25.05.2023",
                            time: "14:32",
                            status: "Выполнен"
                        },
                        {
                            merchant: "Супермаркет 'Магнум'",
                            amount: "3 245 ₸",
                            date: "20.05.2023",
                            time: "18:15",
                            status: "Выполнен"
                        },
                        {
                            merchant: "АЗС 'КазМунайГаз'",
                            amount: "5 000 ₸",
                            date: "15.05.2023",
                            time: "10:45",
                            status: "Выполнен"
                        }
                    ].map((payment, index) => (
                        <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                            <div>
                                <div className="font-medium">{payment.merchant}</div>
                                <div className="text-sm text-gray-500">{payment.date} • {payment.time}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-medium">{payment.amount}</div>
                                <div className="text-sm text-gray-500">{payment.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        Показать все платежи
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PayQRPage;
