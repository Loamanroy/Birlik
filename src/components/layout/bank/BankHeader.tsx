import { Menu, X, ChevronDown } from 'lucide-react';
import mobileBanking from '@/assets/mobile-banking.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

const BankHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [transfersOpen, setTransfersOpen] = useState(false);
  const [paymentsOpen, setPaymentsOpen] = useState(false);
  const { t } = useTranslation();

  const isActive = (path: string) => {
    if (path === '/bank' && currentPath === '/bank') {
      return true;
    }
    return path !== '/bank' && currentPath.startsWith(path);
  };

  const mainMenuItems = [
    { path: '/bank', label: t('bank.title') },
    { path: '/bank/business', label: t('bank.business') },
    { path: '/bank/invest', label: t('bank.investments') },
    { path: '/bank/insurance', label: t('bank.insurance') },
    { path: '/bank/savings', label: t('bank.savings') },
  ];

  const transferMenuItems = [
    { path: '/bank/transfer/phone', label: t('bank.transfer_phone') },
    { path: '/bank/transfer/details', label: t('bank.transfer_details') },
    { path: '/bank/transactions', label: t('bank.transactions') },
  ];

  const paymentMenuItems = [
    { path: '/bank/pay/mobile', label: t('bank.pay_mobile') },
    { path: '/bank/pay/qr', label: t('bank.pay_qr') },
    { path: '/bank/mobile', label: t('bank.mobile_banking') },
    { path: '/bank/self-employed', label: t('bank.self_employed') },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTransfersMenu = () => {
    setTransfersOpen(!transfersOpen);
    if (!transfersOpen) setPaymentsOpen(false);
  };

  const togglePaymentsMenu = () => {
    setPaymentsOpen(!paymentsOpen);
    if (!paymentsOpen) setTransfersOpen(false);
  };

  return (
      <header className="relative flex items-center justify-between py-4 bg-blue-600 text-white shadow-md lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center">
          <Link to="/bank" className="mr-8">
            <img
                src={mobileBanking}
                alt="logo"
                className="h-8"
            />
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {mainMenuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                        to={item.path}
                        className={`text-sm font-medium text-white ${isActive(item.path) ? 'border-b-2 border-white' : 'hover:text-gray-200'}`}
                    >
                      {item.label}
                    </Link>
                  </li>
              ))}
              
              {/* Transfers Dropdown */}
              <li className="relative">
                <button 
                  onClick={toggleTransfersMenu}
                  className={`flex items-center text-sm font-medium text-white hover:text-gray-200 ${currentPath.includes('/bank/transfer') ? 'border-b-2 border-white' : ''}`}
                >
                  {t('bank.transfers')}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                {transfersOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded shadow-lg z-50 w-48">
                    <ul className="py-1">
                      {transferMenuItems.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setTransfersOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              
              {/* Payments Dropdown */}
              <li className="relative">
                <button 
                  onClick={togglePaymentsMenu}
                  className={`flex items-center text-sm font-medium text-white hover:text-gray-200 ${currentPath.includes('/bank/pay') ? 'border-b-2 border-white' : ''}`}
                >
                  {t('bank.payments')}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                {paymentsOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded shadow-lg z-50 w-48">
                    <ul className="py-1">
                      {paymentMenuItems.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setPaymentsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <button className="p-2 rounded-full hover:bg-blue-700">
            <Link to="/profile" className="">
              <img
                  src="https://i.pravatar.cc/150?img=3"
                  className="h-8 rounded-full"
                  alt="avatar"
              />
            </Link>
          </button>
          <button
              className="md:hidden p-2 rounded-full hover:bg-blue-700"
              onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-blue-600 z-50 border-b shadow-md">
              <nav className="py-2">
                <ul className="flex flex-col">
                  {mainMenuItems.map((item) => (
                      <li key={item.path}>
                        <Link
                            to={item.path}
                            className={`block px-4 py-2 text-sm font-medium text-white ${isActive(item.path) ? 'bg-blue-700 border-l-4 border-white' : 'hover:bg-blue-700'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                  ))}
                  
                  {/* Mobile Transfers Section */}
                  <li className="px-4 py-2 text-sm font-medium text-white bg-blue-700">
                    {t('bank.transfers')}
                  </li>
                  {transferMenuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block px-6 py-2 text-sm font-medium text-white ${isActive(item.path) ? 'bg-blue-700 border-l-4 border-white' : 'hover:bg-blue-700'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  
                  {/* Mobile Payments Section */}
                  <li className="px-4 py-2 text-sm font-medium text-white bg-blue-700">
                    {t('bank.payments')}
                  </li>
                  {paymentMenuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block px-6 py-2 text-sm font-medium text-white ${isActive(item.path) ? 'bg-blue-700 border-l-4 border-white' : 'hover:bg-blue-700'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
        )}
      </header>
  );
};

export default BankHeader;
