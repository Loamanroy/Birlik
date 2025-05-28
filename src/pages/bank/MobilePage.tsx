function MobilePage() {
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Мобильная связь Birlik</h1>
                <p className="text-gray-600 mt-2">Управление мобильной связью и тарифами</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Ваш тариф</h2>
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                <path d="M6.828 4H23v11a5 5 0 0 1-5 5H1V9.828a2 2 0 0 1 .586-1.414l3.828-3.828A2 2 0 0 1 6.828 4ZM17 8a2 2 0 0 1 2 2v6h-8a2 2 0 0 1-2-2V8h8Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium">Тариф «Всё включено»</div>
                            <div className="text-sm text-gray-500">2 990 ₸/месяц</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Интернет</span>
                            <span className="font-medium">30 ГБ</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Минуты</span>
                            <span className="font-medium">500 мин</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">SMS</span>
                            <span className="font-medium">100 шт</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Изменить тариф
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Баланс и расходы</h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Текущий баланс</span>
                        <span className="font-medium text-xl">1 245,78 ₸</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mb-4">
                        <div className="h-2 bg-green-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Использовано интернета</span>
                            <span className="font-medium">12.5 ГБ / 30 ГБ</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Использовано минут</span>
                            <span className="font-medium">120 мин / 500 мин</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            Пополнить баланс
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">Услуги и опции</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        {
                            title: "Роуминг",
                            description: "Выгодные тарифы за границей",
                            icon: "🌍"
                        },
                        {
                            title: "Дополнительный интернет",
                            description: "Докупить гигабайты",
                            icon: "📱"
                        },
                        {
                            title: "Безлимитные соцсети",
                            description: "Общайтесь без ограничений",
                            icon: "💬"
                        },
                        {
                            title: "Родительский контроль",
                            description: "Безопасный интернет для детей",
                            icon: "👨‍👩‍👧‍👦"
                        },
                        {
                            title: "Антиспам",
                            description: "Защита от нежелательных звонков",
                            icon: "🛡️"
                        },
                        {
                            title: "Переадресация",
                            description: "Настройка переадресации вызовов",
                            icon: "↪️"
                        }
                    ].map((service, index) => (
                        <div key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <div className="text-2xl mr-3">{service.icon}</div>
                            <div>
                                <div className="font-medium">{service.title}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MobilePage;
