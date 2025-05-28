import { useTranslation } from 'react-i18next';

function PayMobilePage() {
    const { t, i18n } = useTranslation();
    
    const statusText = i18n.language === 'en' ? 'Completed' : 'Выполнен';
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">{t('bank.pay_mobile')}</h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' 
                        ? 'Quick payment for mobile operator services' 
                        : 'Быстрая оплата услуг мобильных операторов'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">{t('bank.new_payment')}</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="operator">
                                {t('bank.mobile_operator')}
                            </label>
                            <select
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="operator"
                            >
                                <option>{t('bank.select_operator')}</option>
                                <option>Beeline</option>
                                <option>Kcell</option>
                                <option>Tele2</option>
                                <option>Altel</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                                {t('bank.phone_number')}
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
                                {t('bank.amount')}
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
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                                {t('bank.commission')}: <span className="font-medium">0 ₸</span>
                            </div>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                type="submit"
                            >
                                {t('bank.pay_button')}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">{t('bank.frequent_payments')}</h2>
                    <div className="space-y-3">
                        {[
                            {
                                operator: "Beeline",
                                phone: "+7 (701) 123-45-67",
                                lastAmount: "2 000 ₸",
                                lastDate: "15.05.2023"
                            },
                            {
                                operator: "Kcell",
                                phone: "+7 (702) 987-65-43",
                                lastAmount: "1 500 ₸",
                                lastDate: "10.05.2023"
                            },
                            {
                                operator: "Tele2",
                                phone: "+7 (747) 555-77-88",
                                lastAmount: "1 000 ₸",
                                lastDate: "05.05.2023"
                            }
                        ].map((payment, index) => (
                            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div>
                                    <div className="font-medium">{payment.operator}</div>
                                    <div className="text-sm text-gray-500">{payment.phone}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium">{payment.lastAmount}</div>
                                    <div className="text-sm text-gray-500">{payment.lastDate}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                            {t('bank.show_all_payments')}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">{t('bank.payment_history')}</h2>
                <div className="space-y-3">
                    {[
                        {
                            operator: "Beeline",
                            phone: "+7 (701) 123-45-67",
                            amount: "2 000 ₸",
                            date: "15.05.2023",
                            status: statusText
                        },
                        {
                            operator: "Kcell",
                            phone: "+7 (702) 987-65-43",
                            amount: "1 500 ₸",
                            date: "10.05.2023",
                            status: statusText
                        },
                        {
                            operator: "Tele2",
                            phone: "+7 (747) 555-77-88",
                            amount: "1 000 ₸",
                            date: "05.05.2023",
                            status: statusText
                        }
                    ].map((payment, index) => (
                        <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                            <div>
                                <div className="font-medium">{payment.operator}</div>
                                <div className="text-sm text-gray-500">{payment.phone} • {payment.date}</div>
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
                        {t('bank.show_all_payments')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PayMobilePage;
