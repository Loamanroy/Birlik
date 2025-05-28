import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function InsurancePage() {
    const { t, i18n } = useTranslation();
    
    const insuranceTypes = [
        {
            title: i18n.language === 'en' ? "Life Insurance" : "Страхование жизни",
            description: i18n.language === 'en' ? "Protection for you and your loved ones" : "Защита вас и ваших близких",
            icon: "/insurance-life-icon.svg",
            url: "/bank/insurance/life"
        },
        {
            title: i18n.language === 'en' ? "Property Insurance" : "Страхование имущества",
            description: i18n.language === 'en' ? "Protection for your home and property" : "Защита вашего дома и имущества",
            icon: "/insurance-property-icon.svg",
            url: "/bank/insurance/property"
        },
        {
            title: i18n.language === 'en' ? "Auto Insurance" : "Автострахование",
            description: i18n.language === 'en' ? "CASCO and OSAGO for your vehicle" : "КАСКО и ОСАГО для вашего автомобиля",
            icon: "/insurance-auto-icon.svg",
            url: "/bank/insurance/auto"
        },
        {
            title: i18n.language === 'en' ? "Travel Insurance" : "Страхование путешествий",
            description: i18n.language === 'en' ? "Protection during trips" : "Защита во время поездок",
            icon: "/insurance-travel-icon.svg",
            url: "/bank/insurance/travel"
        },
        {
            title: i18n.language === 'en' ? "Health Insurance" : "Медицинское страхование",
            description: i18n.language === 'en' ? "VHI policies for you and your family" : "Полисы ДМС для вас и вашей семьи",
            icon: "/insurance-health-icon.svg",
            url: "/bank/insurance/health"
        },
        {
            title: i18n.language === 'en' ? "Business Insurance" : "Бизнес-страхование",
            description: i18n.language === 'en' ? "Protection for your business" : "Защита вашего бизнеса",
            icon: "/insurance-business-icon.svg",
            url: "/bank/insurance/business"
        }
    ];
    
    return (
        <div className="container mx-auto px-4 pt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">{t('bank.insurance')}</h1>
                <p className="text-gray-600 mt-2">
                    {i18n.language === 'en' ? 'Choose a suitable insurance option' : 'Выберите подходящий вариант страхования'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {insuranceTypes.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                        <Link to={item.url} className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                                <div className="w-6 h-6">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-sm text-gray-500">{item.description}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">
                    {i18n.language === 'en' ? 'Your Policies' : 'Ваши полисы'}
                </h2>
                <div className="text-gray-500 text-center py-8">
                    {i18n.language === 'en' ? 'You have no active policies yet' : 'У вас пока нет активных полисов'}
                </div>
                <div className="flex justify-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        {i18n.language === 'en' ? 'Get a Policy' : 'Оформить полис'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InsurancePage;
