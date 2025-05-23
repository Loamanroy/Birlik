import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'
import MarketPage from './pages/MarketPage'
import ProductPage from './pages/ProductPage'
import AddProductPage from './pages/AddProductPage'
import IslamPage from './pages/IslamPage'
import KeleminPage from './pages/KeleminPage'
import DeliveryPage from './pages/DeliveryPage'
import SocialPage from './pages/SocialPage'
import AppsPage from './pages/AppsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import { LocationProvider } from './contexts/LocationContext'

function App() {
  return (
    <BrowserRouter>
      <LocationProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/market" element={<MarketPage />} />
              <Route path="/market/product/:id" element={<ProductPage />} />
              <Route path="/market/add" element={<AddProductPage />} />
              <Route path="/islam" element={<IslamPage />} />
              <Route path="/kelemin" element={<KeleminPage />} />
              <Route path="/delivery" element={<DeliveryPage />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/apps" element={<AppsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LocationProvider>
    </BrowserRouter>
  )
}

export default App
