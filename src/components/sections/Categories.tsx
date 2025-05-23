import { ShoppingBag, Monitor, Briefcase, Wrench, Car, Home, Package, Smartphone, Bookmark } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Одежда и обувь', icon: <ShoppingBag size={28} className="text-blue-500" /> },
    { name: 'Электроника', icon: <Monitor size={28} className="text-blue-500" /> },
    { name: 'Работа', icon: <Briefcase size={28} className="text-blue-500" /> },
    { name: 'Услуги', icon: <Wrench size={28} className="text-blue-500" /> },
    { name: 'Транспорт', icon: <Car size={28} className="text-blue-500" /> },
    { name: 'Недвижимость', icon: <Home size={28} className="text-blue-500" /> },
    { name: 'Для дома', icon: <Package size={28} className="text-blue-500" /> },
    { name: 'Дачные вещи', icon: <Smartphone size={28} className="text-blue-500" /> },
    { name: 'Вещие вещи', icon: <Bookmark size={28} className="text-blue-500" /> },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 my-6 px-4">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            {category.icon}
          </div>
          <span className="text-xs text-center truncate max-w-full">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
