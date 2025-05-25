import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const BankHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/bank' && currentPath === '/bank') {
      return true;
    }
    return path !== '/bank' && currentPath.startsWith(path);
  };

  const menuItems = [
    { path: '/bank', label: 'Банк' },
    { path: '/business', label: 'Бизнес' },
    { path: '/invest/portfolio', label: 'Инвестиции' },
    { path: '/mobile-operator', label: 'Сим-карта' },
    { path: '/insurance', label: 'Страхование' },
    { path: '/travel', label: 'Путешествия' },
    { path: '/dolyame', label: 'Долями' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
      <header className="relative flex items-center justify-between px-4 py-3 border-b shadow-sm">
        <div className="flex items-center">
          <Link to="/mybank" className="mr-8">
            <img
                src="https://cdn.tbank.ru/static/pfa-multimedia/images/ae288629-59d7-4eb6-b074-8bb0549a43b6.svg"
                alt="Тинькофф"
                className="h-8"
            />
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                        to={item.path}
                        className={`text-sm font-medium ${isActive(item.path) ? 'border-b-2 border-blue-500' : 'hover:text-blue-500'}`}
                    >
                      {item.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search size={20} />
          </button>
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
                            className={`block px-4 py-2 text-sm font-medium ${isActive(item.path) ? 'bg-blue-50 text-blue-500 border-l-4 border-blue-500' : 'hover:bg-gray-50'}`}
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