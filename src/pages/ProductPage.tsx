import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Phone, MapPin } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  fullName: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  city: string;
  address: string;
  sellerName: string;
  phone: string;
};

const mockProducts: Product[] = [
  { 
    id: 1, 
    name: 'Сумка кожаная', 
    fullName: 'Кожаная сумка ручной работы',
    description: 'Элегантная кожаная сумка ручной работы. Изготовлена из натуральной кожи высшего качества. Вместительная, с несколькими отделениями и карманами.',
    price: 15000, 
    category: 'clothing', 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa'
    ],
    city: 'Астана',
    address: 'ул. Достык 5',
    sellerName: 'Айнур Смагулова',
    phone: '+77771234567'
  },
  { 
    id: 2, 
    name: 'Умные часы Apple Watch', 
    fullName: 'Apple Watch Series 7 GPS 45mm',
    description: 'Новые Apple Watch Series 7 с большим дисплеем, быстрой зарядкой и улучшенной защитой от пыли. Отслеживайте свою физическую активность, здоровье и оставайтесь на связи.',
    price: 150000, 
    category: 'electronics', 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12'
    ],
    city: 'Алматы',
    address: 'ул. Абая 44',
    sellerName: 'Ерлан Касымов',
    phone: '+77051234567'
  }
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        const productData = mockProducts.find(p => p.id === parseInt(id));
        if (productData) {
          setProduct(productData);
        }
        setIsLoading(false);
      }, 500);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="py-8 px-4 flex justify-center">
        <div className="animate-pulse">Загрузка...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-8 px-4">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-500">Товар не найден.</p>
          <Link to="/market" className="text-blue-500 hover:underline mt-4 inline-block">
            Вернуться к списку товаров
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4">
      <Link to="/market" className="flex items-center text-blue-500 hover:underline mb-6">
        <ChevronLeft size={16} className="mr-1" />
        Назад к списку товаров
      </Link>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div>
            <div className="h-60 sm:h-80 overflow-hidden rounded-lg mb-4">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`h-20 w-20 rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-blue-500' : 'border-transparent'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover bg-gray-50" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">{product.fullName}</h1>
            <p className="text-3xl font-bold text-blue-600 mb-4">{product.price.toLocaleString()} ₸</p>
            
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={16} className="mr-2" />
              <span>{product.city}, {product.address}</span>
            </div>
            
            <div className="flex items-center text-gray-600 mb-6">
              <Phone size={16} className="mr-2" />
              <span>{product.phone}</span>
            </div>
            
            <div className="border-t border-b py-4 my-4">
              <h2 className="font-bold mb-2">Описание</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mt-6">
              <h2 className="font-bold mb-4">Связаться с продавцом</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">{product.sellerName}</p>
                <a 
                  href={`tel:${product.phone}`} 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md inline-flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
