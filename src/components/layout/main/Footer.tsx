import { Link } from 'react-router-dom';
import { Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Birlik Live</h3>
            <p className="text-gray-300 text-sm">
              Ваш путеводитель по Казахстану и платформа для общения, покупок и получения информации.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="https://github.com/birlik-project" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">Главная</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">О проекте</Link></li>
              <li><Link to="/map" className="text-gray-300 hover:text-white transition-colors duration-200">Карта</Link></li>
              <li><Link to="/market" className="text-gray-300 hover:text-white transition-colors duration-200">Маркет</Link></li>
              <li><Link to="/islam" className="text-gray-300 hover:text-white transition-colors duration-200">Islam</Link></li>
              <li><Link to="/birlik-taxi" className="text-gray-300 hover:text-white transition-colors duration-200">Birlik Taxi</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Сервисы</h3>
            <ul className="space-y-2">
              <li><Link to="/delivery" className="text-gray-300 hover:text-white transition-colors duration-200">Доставка</Link></li>
              <li><Link to="/social" className="text-gray-300 hover:text-white transition-colors duration-200">Соцсеть</Link></li>
              <li><Link to="/apps" className="text-gray-300 hover:text-white transition-colors duration-200">Приложения</Link></li>
              <li><Link to="/bank" className="text-gray-300 hover:text-white transition-colors duration-200">Банк</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-400" />
                <span>Астана, Казахстан</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <a href="mailto:info@birlik-live.kz" className="hover:text-blue-400 transition-colors duration-200">info@birlik-live.kz</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <a href="tel:+77771234567" className="hover:text-blue-400 transition-colors duration-200">+7 (777) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="https://t.me/birlik_live" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">Telegram</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Birlik Live. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors duration-200">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
