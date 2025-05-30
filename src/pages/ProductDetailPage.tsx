import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, MapPin, Calendar, User } from 'lucide-react';
import { products, Product } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Товар не найден</h2>
          <p className="text-gray-600 mb-6">Запрашиваемый товар не существует или был удален.</p>
          <Link 
            to="/market" 
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Вернуться в маркет
          </Link>
        </div>
      </div>
    );
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          to="/market" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={18} className="mr-1" />
          Назад к списку товаров
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 h-80">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-contain"
                onError={handleImageError}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer rounded-md overflow-hidden h-20 border-2 ${
                    selectedImage === img ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} - изображение ${index + 1}`} 
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.fullName}</h1>
            <p className="text-3xl font-bold text-blue-600 mb-4">{product.price.toLocaleString()} ₸</p>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Описание</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <h2 className="text-lg font-semibold mb-2">Информация о продавце</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <User size={18} className="text-gray-500 mr-2" />
                  <span>{product.sellerName}</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="text-gray-500 mr-2" />
                  <span>{product.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="text-gray-500 mr-2" />
                  <span>{product.city}, {product.address}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="text-gray-500 mr-2" />
                  <span>Опубликовано: {product.dateAdded}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                Связаться с продавцом
              </button>
              <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-md hover:bg-blue-50 transition-colors">
                Добавить в избранное
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
