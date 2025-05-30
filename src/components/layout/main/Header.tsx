import { Search, Menu, X, ChevronDown, ChevronRight, Home, Map, ShoppingBag, Book, Navigation, Truck, Users, Layers, Car } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import UserAccountMenu from '@/components/user/UserAccountMenu';
import LocationSelector from '@/components/shared/LocationSelector';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') {
      return true;
    }
    return path !== '/' && currentPath.startsWith(path);
  };

  const menuCategories = [
    {
      id: 'main',
      label: 'Основное',
      items: [
        { path: '/', label: 'Главная', icon: <Home size={18} /> },
        { path: '/about', label: 'О проекте', icon: <Book size={18} /> },
      ]
    },
    {
      id: 'services',
      label: 'Сервисы',
      items: [
        { path: '/map', label: 'Карта', icon: <Map size={18} /> },
        { path: '/market', label: 'Маркет', icon: <ShoppingBag size={18} /> },
        { path: '/kelemin', label: 'Путеводитель', icon: <Car size={18} /> },
        { path: '/delivery', label: 'Доставка', icon: <Truck size={18} /> },
      ]
    },
    {
      id: 'community',
      label: 'Сообщество',
      items: [
        { path: '/islam', label: 'Islam', icon: <Book size={18} /> },
        { path: '/birlik-taxi', label: 'Birlik Taxi', icon: <Navigation size={18} /> },
        { path: '/social', label: 'Соцсеть', icon: <Users size={18} /> },
      ]
    },
    {
      id: 'tools',
      label: 'Инструменты',
      items: [
        { path: '/apps', label: 'Приложения', icon: <Layers size={18} /> },
      ]
    }
  ];

  const menuItems = menuCategories.flatMap(category => category.items);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
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

      {/* Mobile Menu - Multi-level */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 border-b shadow-md max-h-[80vh] overflow-y-auto">
          <nav className="py-2">
            {/* Categories */}
            <div className="mb-2">
              {menuCategories.map((category) => (
                <div key={category.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left hover:bg-gray-50"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <span className="font-bold text-gray-800">{category.label}</span>
                    {expandedCategory === category.id ? 
                      <ChevronDown size={18} className="text-gray-500" /> : 
                      <ChevronRight size={18} className="text-gray-500" />
                    }
                  </button>
                  
                  {/* Category items */}
                  {expandedCategory === category.id && (
                    <ul className="bg-gray-50 py-1">
                      {category.items.map((item) => (
                        <li key={item.path}>
                          <Link 
                            to={item.path} 
                            className={`flex items-center px-6 py-2 text-sm ${isActive(item.path) 
                              ? 'text-blue-600 font-medium' 
                              : 'text-gray-700 hover:text-blue-600'}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="mr-2">{item.icon}</span>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            
            {/* Auth buttons */}
            <div className="px-4 py-2 space-y-2">
              <Link 
                to="/login" 
                className="block py-3 text-sm font-medium bg-blue-600 text-white rounded text-center hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Войти
              </Link>
              <Link 
                to="/register" 
                className="block py-3 text-sm font-medium border border-blue-600 text-blue-600 rounded text-center hover:bg-blue-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Регистрация
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
