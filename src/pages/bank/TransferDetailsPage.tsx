import { useTranslation } from 'react-i18next';

function TransferDetailsPage() {
    const { i18n } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {i18n.language === 'en' ? 'Bank Transfer Details' : 'Перевод по реквизитам'}
                </h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Money transfer using bank details' : 'Перевод денег по банковским реквизитам'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'New Transfer' : 'Новый перевод'}
                </h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="bank">
                                {i18n.language === 'en' ? 'Recipient Bank' : 'Банк получателя'}
                            </label>
                            <select
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="bank"
                            >
                                <option>{i18n.language === 'en' ? 'Select bank' : 'Выберите банк'}</option>
                                <option>Birlik Bank</option>
                                <option>{i18n.language === 'en' ? 'Kazkommertsbank' : 'Казкоммерцбанк'}</option>
                                <option>{i18n.language === 'en' ? 'Halyk Bank' : 'Народный Банк'}</option>
                                <option>Sberbank</option>
                                <option>{i18n.language === 'en' ? 'Other bank' : 'Другой банк'}</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="account">
                                {i18n.language === 'en' ? 'Account Number / IBAN' : 'Номер счета / IBAN'}
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
                                {i18n.language === 'en' ? 'BIC / SWIFT' : 'БИК / SWIFT'}
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
                                {i18n.language === 'en' ? 'Recipient Name' : 'ФИО получателя'}
                            </label>
                            <input
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="recipient"
                                type="text"
                                placeholder={i18n.language === 'en' ? 'John Smith' : 'Иванов Иван Иванович'}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="amount">
                                {i18n.language === 'en' ? 'Transfer Amount' : 'Сумма перевода'}
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
                                {i18n.language === 'en' ? 'Payment Purpose' : 'Назначение платежа'}
                            </label>
                            <textarea
                                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="purpose"
                                rows={3}
                                placeholder={i18n.language === 'en' ? 'Enter payment purpose' : 'Укажите назначение платежа'}
                            ></textarea>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                                {i18n.language === 'en' ? 'Commission: ' : 'Комиссия: '}<span className="font-medium">150 ₸</span>
                            </div>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                type="submit"
                            >
                                {i18n.language === 'en' ? 'Transfer' : 'Перевести'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">{i18n.language === 'en' ? 'Transfer Templates' : 'Шаблоны переводов'}</h2>
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
                            {i18n.language === 'en' ? 'All Templates' : 'Все шаблоны'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">{i18n.language === 'en' ? 'Transfer History' : 'История переводов'}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Date' : 'Дата'}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {i18n.language === 'en' ? 'Recipient' : 'Получатель'}
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
                                            {i18n.language === 'en' ? 'Completed' : transfer.status}
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
