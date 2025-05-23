import { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, ProductCategory } from '../data/products';
import { useLocation } from '../contexts/LocationContext';

const MarketPage = () => {
  const { city } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [localProducts, setLocalProducts] = useState(products);
  
  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'clothing', name: 'Одежда и обувь' },
    { id: 'electronics', name: 'Электроника' },
    { id: 'home', name: 'Для дома' },
    { id: 'transport', name: 'Транспорт' },
    { id: 'realty', name: 'Недвижимость' },
    { id: 'services', name: 'Услуги' },
    { id: 'kids', name: 'Детские товары' },
    { id: 'hobby', name: 'Хобби и отдых' },
    { id: 'sports', name: 'Спорт и туризм' },
  ];

  useEffect(() => {
    setLocalProducts(products.filter(product => product.city === city));
  }, [city]);

  const filteredProducts = localProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesPrice && matchesCategory;
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId as ProductCategory | 'all');
  };

  return (
    <div className="py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Маркет</h1>
        <Link 
          to="/market/add" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
        >
          <Plus size={18} className="mr-1" />
          Добавить товар
        </Link>
      </div>
      
      <div className="mb-6">
        <div className="relative w-full max-w-lg mx-auto mb-4">
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold mb-4">Фильтры</h2>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">Категории</h3>
            {categories.map((category) => (
              <div key={category.id} className="flex items-center mb-2">
                <input 
                  type="radio" 
                  id={`category-${category.id}`} 
                  name="category"
                  checked={selectedCategory === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                  className="mr-2" 
                />
                <label htmlFor={`category-${category.id}`}>{category.name}</label>
              </div>
            ))}
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">Цена</h3>
            <div className="flex items-center space-x-2">
              <input 
                type="number" 
                placeholder="От" 
                className="w-full p-2 border rounded"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
              />
              <span>-</span>
              <input 
                type="number" 
                placeholder="До" 
                className="w-full p-2 border rounded"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000000])}
              />
            </div>
          </div>
          
          <button 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={() => {
              console.log('Filters applied');
            }}
          >
            Применить
          </button>
        </div>
        
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-500">Товары не найдены. Попробуйте изменить параметры поиска.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map(product => (
                <Link 
                  to={`/market/product/${product.id}`} 
                  key={product.id} 
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
                >
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover bg-gray-50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {categories.find(c => c.id === product.category)?.name}
                    </p>
                    <p className="font-bold mt-2">{product.price.toLocaleString()} ₸</p>
                    <p className="text-xs text-gray-500 mt-1">{product.city}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
