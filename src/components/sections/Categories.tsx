import { ShoppingBag, Monitor, Briefcase, Wrench, Car, Home, Package, Smartphone, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Одежда и обувь', icon: <ShoppingBag size={28} className="text-blue-500" />, category: 'clothing' },
    { name: 'Электроника', icon: <Monitor size={28} className="text-blue-500" />, category: 'electronics' },
    { name: 'Работа', icon: <Briefcase size={28} className="text-blue-500" />, category: 'services' },
    { name: 'Услуги', icon: <Wrench size={28} className="text-blue-500" />, category: 'services' },
    { name: 'Транспорт', icon: <Car size={28} className="text-blue-500" />, category: 'transport' },
    { name: 'Недвижимость', icon: <Home size={28} className="text-blue-500" />, category: 'realty' },
    { name: 'Для дома', icon: <Package size={28} className="text-blue-500" />, category: 'home' },
    { name: 'Дачные вещи', icon: <Smartphone size={28} className="text-blue-500" />, category: 'hobby' },
    { name: 'Вещие вещи', icon: <Bookmark size={28} className="text-blue-500" />, category: 'kids' },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 my-6 px-4">
      {categories.map((category, index) => (
        <Link 
          key={index} 
          to={`/market?category=${category.category}`}
          className="flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2 hover:bg-gray-200 transition-colors">
            {category.icon}
          </div>
          <span className="text-xs text-center truncate max-w-full">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
