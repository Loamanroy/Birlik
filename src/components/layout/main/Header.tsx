import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import UserAccountMenu from '@/components/user/UserAccountMenu';
import LocationSelector from '@/components/shared/LocationSelector';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') {
      return true;
    }
    return path !== '/' && currentPath.startsWith(path);
  };

  const menuItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О проекте' },
    { path: '/map', label: 'Карта' },
    { path: '/market', label: 'Маркет' },
    { path: '/islam', label: 'Islam' },
    { path: '/kelemin', label: 'Kelemin' },
    { path: '/delivery', label: 'Доставка' },
    { path: '/social', label: 'Соцсеть' },
    { path: '/apps', label: 'Приложения' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative flex items-center justify-between px-4 sm:px-6 py-4 border-b shadow-sm bg-white">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
            <span className="font-bold text-xl">B</span>
          </div>
          <span className="text-2xl font-bold mr-8">Birlik Live</span>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`text-sm font-medium py-2 ${isActive(item.path) 
                    ? 'border-b-2 border-blue-600 text-blue-700' 
                    : 'hover:text-blue-600 transition-colors duration-200'}`}
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
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <Search size={20} />
        </button>
        <UserAccountMenu />
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
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
                    className={`block px-4 py-3 text-sm font-medium ${isActive(item.path) 
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                      : 'hover:bg-gray-50 transition-colors duration-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/login" 
                  className="block px-4 py-3 text-sm font-medium bg-blue-600 text-white m-4 rounded text-center hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Войти
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className="block px-4 py-3 text-sm font-medium border border-blue-600 text-blue-600 m-4 mt-0 rounded text-center hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Регистрация
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
