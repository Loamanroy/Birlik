import TransactionsOverview from "@/components/bank/TransactionsOverview.tsx";
import PaymentButton from "@/components/bank/PaymentButton.tsx";
import SearchBox from "@/components/bank/SearchBox.tsx";
import ProductCard from "@/components/bank/ProductCard.tsx";

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
            <div className="container mx-auto px-4 pt-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Добрый день</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <SearchBox />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {paymentOptions.map((option, index) => (
                        <PaymentButton key={index} option={option} />
                    ))}
                </div>

                <TransactionsOverview />
            </div>
        </main>
    );
}

export default InternetBankPage;