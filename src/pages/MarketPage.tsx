import { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, ProductCategory } from '../data/products';
import { useLocation as useLocationContext } from '../contexts/LocationContext';

const MarketPage = () => {
  const { city } = useLocationContext();
  const [searchParams] = useSearchParams();
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
  
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const validCategories: ProductCategory[] = ['clothing', 'electronics', 'home', 'transport', 'realty', 'services', 'kids', 'hobby', 'sports'];
    if (categoryParam && (categoryParam === 'all' || validCategories.includes(categoryParam as ProductCategory))) {
      setSelectedCategory(categoryParam as ProductCategory | 'all');
    }
  }, [searchParams]);

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
    <main className="bg-white min-h-screen pb-8">
      <div className="container mx-auto px-4 pt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Marketplace Dashboard</h1>
          <Link 
            to="/bank/marketplace/add" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            <Plus size={18} className="mr-1" />
            Add Product
          </Link>
        </div>
      
        <div className="mb-6">
          <div className="relative w-full max-w-lg mx-auto mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border rounded"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold mb-4">Filters</h2>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Categories</h3>
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
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex items-center space-x-2">
                <input 
                  type="number" 
                  placeholder="From" 
                  className="w-full p-2 border rounded"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                />
                <span>-</span>
                <input 
                  type="number" 
                  placeholder="To" 
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
              Apply Filters
            </button>
          </div>
          
          <div className="md:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4">No products found. Try changing your search criteria.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                    Add Your First Product
                  </button>
                </div>
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
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover bg-gray-50" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop';
                        }}
                      />
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
    </main>
  );
};

export default MarketPage;
