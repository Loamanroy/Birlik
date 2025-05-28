import { Menu, X, User, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import CryptoTicker from '@/components/shared/CryptoTicker';

const BankHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      const name = localStorage.getItem('userName') || 'User';
      setUserName(name);
    }
  }, []);

  const isActive = (path: string) => {
    if (path === '/bank' && currentPath === '/bank') {
      return true;
    }
    return path !== '/bank' && currentPath.startsWith(path);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    navigate('/bank');
  };

  const menuItems = [
    { path: '/bank', label: t('navigation.home') },
    { path: '/bank/digital', label: t('navigation.bank') },
    { path: '/bank/real-estate', label: t('navigation.real_estate') },
    { path: '/bank/automotive', label: t('navigation.automotive') },
    { path: '/bank/logistics', label: t('navigation.logistics') },
    { path: '/bank/exchange', label: t('navigation.exchange') },
    { path: '/bank/marketplace', label: t('navigation.marketplace') },
    { path: '/bank/islamic', label: t('navigation.islamic_banking') },
    { path: '/bank/delivery', label: t('navigation.delivery') },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
      <div className="flex flex-col w-full">
        <header className="relative flex items-center justify-between py-4 bg-blue-600 text-white shadow-md px-4 lg:px-8 w-full">
          <div className="flex items-center">
            <Link to="/bank" className="mr-8">
              <span className="text-2xl font-bold text-white">Birlik Platform</span>
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                          to={item.path}
                          className={`text-sm font-medium text-white ${isActive(item.path) ? 'border-b-2 border-white' : 'hover:text-gray-200'}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          
          {isLoggedIn ? (
            <div className="relative">
              <button 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <User size={20} className="text-blue-600" />
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium text-gray-700">{userName}</p>
                  </div>
                  <Link 
                    to="/bank/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('bank.profile')}
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    <div className="flex items-center">
                      <LogOut size={16} className="mr-2" />
                      <span>{t('bank.logout')}</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/bank/login" className="px-4 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100">
                {t('common.login')}
              </Link>
              <Link to="/bank/register" className="px-4 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600">
                {t('common.register')}
              </Link>
            </>
          )}
          
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
                  {menuItems.map((item) => (
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
                </ul>
              </nav>
            </div>
        )}
        </header>
        <CryptoTicker />
      </div>
  );
};

export default BankHeader;
