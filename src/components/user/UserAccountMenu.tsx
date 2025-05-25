import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

const UserAccountMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      const name = localStorage.getItem('userName') || 'Пользователь';
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    window.location.href = '/';
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <User size={20} />
      </button>
      
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {isLoggedIn ? (
            <>
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-medium">{userName}</p>
              </div>
              <Link 
                to="/profile" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Мой профиль
              </Link>
              <Link
                to="/bank"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
                >
                Интернет-Банк
              </Link>
              <button 
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <div className="flex items-center">
                  <LogOut size={16} className="mr-2" />
                  <span>Выйти</span>
                </div>
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Войти
              </Link>
              <Link 
                to="/register" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Зарегистрироваться
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAccountMenu;
