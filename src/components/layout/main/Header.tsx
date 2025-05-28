import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import UserAccountMenu from '@/components/user/UserAccountMenu';
import LocationSelector from '@/components/shared/LocationSelector';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') {
      return true;
    }
    return path !== '/' && currentPath.startsWith(path);
  };

  const menuItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/real-estate', label: t('navigation.real_estate') },
    { path: '/taxi', label: t('navigation.taxi') },
    { path: '/market', label: t('navigation.marketplace') },
    { path: '/bank', label: t('navigation.bank') },
    { path: '/map', label: t('navigation.logistics') },
    { path: '/islam', label: t('navigation.islamic_banking') },
    { path: '/delivery', label: t('navigation.delivery') },
    { path: '/social', label: 'Соцсеть' },
    { path: '/apps', label: 'Приложения' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative flex items-center justify-between px-4 py-3 border-b shadow-sm bg-white">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold mr-8 text-blue-600">Birlik Live</Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`text-sm font-medium ${isActive(item.path) 
                    ? 'text-blue-600 border-b-2 border-blue-500' 
                    : 'text-gray-700 hover:text-blue-500'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <LocationSelector />
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Search size={20} className="text-gray-600" />
        </button>
        <UserAccountMenu />
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 border-b shadow-md">
          <nav className="py-2">
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`block px-4 py-2 text-sm font-medium ${isActive(item.path) 
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-500'}`}
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

export default Header;
