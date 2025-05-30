import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'
import MarketPage from './pages/MarketPage'
import IslamPage from './pages/IslamPage'
import KeleminPage from './pages/KeleminPage.tsx'
import DeliveryPage from './pages/DeliveryPage'
import SocialPage from './pages/SocialPage'
import AppsPage from './pages/AppsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import {LocationProvider} from './contexts/LocationContext'
import ProfilePage from "@/pages/ProfilePage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import MainLayout from "@/components/layout/MainLayout.tsx";
import BankLayout from "@/components/layout/BankLayout.tsx";
import InternetBankPage from "@/pages/InternetBankPage.tsx";
import RealEstatePage from "@/pages/RealEstatePage.tsx";
import TaxiPage from "@/pages/TaxiPage.tsx";
import ProductDetailPage from "@/pages/ProductDetailPage.tsx";

import InsurancePage from "@/pages/bank/InsurancePage.tsx";
import MobilePage from "@/pages/bank/MobilePage.tsx";
import InvestPage from "@/pages/bank/InvestPage.tsx";
import SelfEmployedPage from "@/pages/bank/SelfEmployedPage.tsx";
import SavingsPage from "@/pages/bank/SavingsPage.tsx";
import TransferPhonePage from "@/pages/bank/TransferPhonePage.tsx";
import TransferDetailsPage from "@/pages/bank/TransferDetailsPage.tsx";
import PayMobilePage from "@/pages/bank/PayMobilePage.tsx";
import PayQRPage from "@/pages/bank/PayQRPage.tsx";
import TransactionsPage from "@/pages/bank/TransactionsPage.tsx";
import BusinessPage from "@/pages/bank/BusinessPage.tsx";
import DigitalBankingPage from "./pages/bank/DigitalBankingPage";
import AutomotivePage from "./pages/bank/AutomotivePage";
import LogisticsPage from "./pages/bank/LogisticsPage";
import ExchangePage from "./pages/bank/ExchangePage";
import IslamicBankingPage from "./pages/bank/IslamicBankingPage";
import BankDeliveryPage from "./pages/bank/DeliveryPage";

function App() {
    return (
        <BrowserRouter>
            <LocationProvider>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/map" element={<MapPage/>}/>
                        <Route path="/market" element={<MarketPage/>}/>
                        <Route path="/market/product/:id" element={<ProductDetailPage/>}/>
                        <Route path="/birlik-taxi" element={<TaxiPage/>}/>
                        <Route path="/islam" element={<IslamPage/>}/>
                        <Route path="/kelemin" element={<KeleminPage/>}/>
                        <Route path="/delivery" element={<DeliveryPage/>}/>
                        <Route path="/social" element={<SocialPage/>}/>
                        <Route path="/apps" element={<AppsPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                    <Route element={<BankLayout/>}>
                        <Route path="/bank" element={<InternetBankPage />} />
                        <Route path="/bank/insurance" element={<InsurancePage />} />
                        <Route path="/bank/mobile" element={<MobilePage />} />
                        <Route path="/bank/invest" element={<InvestPage />} />
                        <Route path="/bank/self-employed" element={<SelfEmployedPage />} />
                        <Route path="/bank/savings" element={<SavingsPage />} />
                        <Route path="/bank/transfer/phone" element={<TransferPhonePage />} />
                        <Route path="/bank/transfer/details" element={<TransferDetailsPage />} />
                        <Route path="/bank/pay/mobile" element={<PayMobilePage />} />
                        <Route path="/bank/pay/qr" element={<PayQRPage />} />
                        <Route path="/bank/transactions" element={<TransactionsPage />} />
                        <Route path="/bank/business" element={<BusinessPage />} />
                        <Route path="/bank/real-estate" element={<RealEstatePage />} />
                        <Route path="/bank/taxi" element={<TaxiPage />} />
                        <Route path="/bank/marketplace" element={<MarketPage />} />
                        <Route path="/bank/marketplace/product/:id" element={<ProductDetailPage />} />
                        <Route path="/bank/digital" element={<DigitalBankingPage />} />
                        <Route path="/bank/automotive" element={<AutomotivePage />} />
                        <Route path="/bank/logistics" element={<LogisticsPage />} />
                        <Route path="/bank/exchange" element={<ExchangePage />} />
                        <Route path="/bank/islamic" element={<IslamicBankingPage />} />
                        <Route path="/bank/delivery" element={<BankDeliveryPage />} />
                        <Route path="/bank/login" element={<LoginPage />} />
                        <Route path="/bank/register" element={<RegisterPage />} />
                    </Route>
                </Routes>
            </LocationProvider>
        </BrowserRouter>
    )
}

export default App
