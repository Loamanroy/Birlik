import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function TransactionsOverview() {
    const { t } = useTranslation();
    
    const categories = {
        'ru': ['Фастфуд', 'Супермаркеты', 'Такси', 'Переводы', 'Развлечения', 'Остальное'],
        'en': ['Fast Food', 'Supermarkets', 'Taxi', 'Transfers', 'Entertainment', 'Other']
    };
    
    const { i18n } = useTranslation();
    const currentCategories = i18n.language === 'en' ? categories.en : categories.ru;
    
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">{t('bank.recent_transactions')}</h2>
                <Link to="/bank/transactions" className="text-blue-500 flex items-center">
                    {t('bank.view_all')}
                    <svg width="16" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                        <path d="M.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 .293 3.707L4.586 8 .293 12.293Z" fill="currentColor" />
                    </svg>
                </Link>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                    {i18n.language === 'en' ? 'Expenses' : 'Траты'}
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                    {i18n.language === 'en' ? 'Income' : 'Пополнения'}
                </button>
            </div>

            <div className="flex flex-wrap gap-4">
                {currentCategories.map((category, index) => (
                    <div key={index} className="px-3 py-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-medium">{category}</div>
                        <div className="text-sm text-gray-500">{Math.floor(Math.random() * 10000)} Т</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TransactionsOverview;
