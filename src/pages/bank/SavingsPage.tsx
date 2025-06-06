import { useTranslation } from 'react-i18next';

function SavingsPage() {
    const { i18n } = useTranslation();
    
    const savingsGoals = [
        {
            name: i18n.language === 'en' ? "Vacation" : "Отпуск",
            target: "500 000 ₸",
            current: "150 000 ₸",
            progress: 30,
            date: i18n.language === 'en' ? "December 2023" : "Декабрь 2023"
        },
        {
            name: i18n.language === 'en' ? "New Laptop" : "Новый ноутбук",
            target: "300 000 ₸",
            current: "75 000 ₸",
            progress: 25,
            date: i18n.language === 'en' ? "October 2023" : "Октябрь 2023"
        }
    ];
    
    const transactionHistory = [
        {
            type: i18n.language === 'en' ? "Deposit" : "Пополнение",
            amount: "+500,00 ₸",
            date: "25.05.2023",
            description: i18n.language === 'en' ? "Card deposit" : "Пополнение с карты",
            positive: true
        },
        {
            type: i18n.language === 'en' ? "Interest" : "Начисление %",
            amount: "+12,33 ₸",
            date: "20.05.2023",
            description: i18n.language === 'en' ? "Monthly interest accrual" : "Ежемесячное начисление процентов",
            positive: true
        },
        {
            type: i18n.language === 'en' ? "Deposit" : "Пополнение",
            amount: "+1000,00 ₸",
            date: "15.05.2023",
            description: i18n.language === 'en' ? "Card deposit" : "Пополнение с карты",
            positive: true
        },
        {
            type: i18n.language === 'en' ? "Withdrawal" : "Снятие",
            amount: "-300,00 ₸",
            date: "10.05.2023",
            description: i18n.language === 'en' ? "Transfer to card" : "Перевод на карту",
            positive: false
        }
    ];
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Savings Account' : 'Накопительный счет'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Manage your savings and investments' : 'Управление накоплениями и сбережениями'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Your Savings Account' : 'Ваш накопительный счет'}
                    </h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">
                            {i18n.language === 'en' ? 'Current Balance' : 'Текущий баланс'}
                        </span>
                        <span className="font-medium text-xl">1 756,01 ₸</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mb-4">
                        <div className="h-2 bg-blue-500 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Interest Rate' : 'Процентная ставка'}
                            </span>
                            <span className="font-medium">
                                {i18n.language === 'en' ? '8% annual' : '8% годовых'}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Accrued Interest' : 'Начислено процентов'}
                            </span>
                            <span className="font-medium">56,01 ₸</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                {i18n.language === 'en' ? 'Opening Date' : 'Дата открытия'}
                            </span>
                            <span className="font-medium">15.01.2023</span>
                        </div>
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg">
                            {i18n.language === 'en' ? 'Deposit' : 'Пополнить'}
                        </button>
                        <button className="flex-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            {i18n.language === 'en' ? 'Withdraw' : 'Снять'}
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                        {i18n.language === 'en' ? 'Savings Goals' : 'Цели накопления'}
                    </h2>
                    <div className="space-y-4">
                        {savingsGoals.map((goal, index) => (
                            <div key={index} className="p-3 border border-gray-100 rounded-lg">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{goal.name}</span>
                                    <span className="text-sm text-gray-500">
                                        {i18n.language === 'en' ? 'by ' : 'до '}{goal.date}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span>{goal.current}</span>
                                    <span>{goal.target}</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div 
                                        className="h-2 bg-green-500 rounded-full" 
                                        style={{width: `${goal.progress}%`}}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                            {i18n.language === 'en' ? 'Create New Goal' : 'Создать новую цель'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Transaction History' : 'История операций'}
                </h2>
                <div className="space-y-3">
                    {transactionHistory.map((transaction, index) => (
                        <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                            <div>
                                <div className="font-medium">{transaction.type}</div>
                                <div className="text-sm text-gray-500">{transaction.date} • {transaction.description}</div>
                            </div>
                            <div className={`font-medium ${transaction.positive ? 'text-green-500' : 'text-red-500'}`}>
                                {transaction.amount}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                        {i18n.language === 'en' ? 'Show All Transactions' : 'Показать все операции'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SavingsPage;
