import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Upload, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from '../contexts/LocationContext';

const AddProductPage = () => {
  const navigate = useNavigate();
  const { city } = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    description: '',
    price: '',
    category: '',
    address: '',
    sellerName: '',
    phone: '',
  });
  const [images, setImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = [...images];
      
      for (let i = 0; i < e.target.files.length; i++) {
        if (newImages.length >= 5) break; // Maximum 5 images
        
        const file = e.target.files[i];
        const imageUrl = URL.createObjectURL(file);
        newImages.push(imageUrl);
      }
      
      setImages(newImages);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Введите короткое название';
    if (!formData.fullName.trim()) newErrors.fullName = 'Введите полное название';
    if (!formData.description.trim()) newErrors.description = 'Введите описание товара';
    if (formData.description.length > 2000) newErrors.description = 'Описание не должно превышать 2000 символов';
    if (!formData.price.trim()) newErrors.price = 'Введите цену';
    if (isNaN(Number(formData.price))) newErrors.price = 'Цена должна быть числом';
    if (!formData.category) newErrors.category = 'Выберите категорию';
    if (!formData.address.trim()) newErrors.address = 'Введите адрес';
    if (!formData.sellerName.trim()) newErrors.sellerName = 'Введите имя продавца';
    
    const phoneRegex = /^\+7(7[0-9]{2})[0-9]{7}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона Казахстана в формате +7XXXXXXXXXX';
    }
    
    if (images.length === 0) {
      newErrors.images = 'Добавьте хотя бы одно изображение';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Товар успешно добавлен!');
        navigate('/market');
      }, 1000);
    }
  };

  return (
    <div className="py-8 px-4">
      <Link to="/market" className="flex items-center text-blue-500 hover:underline mb-6">
        <ChevronLeft size={16} className="mr-1" />
        Назад к списку товаров
      </Link>

      <div className="bg-white rounded-lg shadow overflow-hidden p-6">
        <h1 className="text-2xl font-bold mb-6">Добавить новый товар</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Короткое название*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
                  maxLength={50}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                <p className="text-xs text-gray-500 mt-1">{formData.name.length}/50</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Полное название*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : ''}`}
                  maxLength={100}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                <p className="text-xs text-gray-500 mt-1">{formData.fullName.length}/100</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Описание*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded h-32 ${errors.description ? 'border-red-500' : ''}`}
                  maxLength={2000}
                />
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                <p className="text-xs text-gray-500 mt-1">{formData.description.length}/2000</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Цена (₸)*</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.price ? 'border-red-500' : ''}`}
                />
                {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Категория*</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.category ? 'border-red-500' : ''}`}
                >
                  <option value="">Выберите категорию</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Город</label>
                <input
                  type="text"
                  value={city}
                  disabled
                  className="w-full p-2 border rounded bg-gray-100"
                />
                <p className="text-xs text-gray-500 mt-1">Город определяется автоматически на основе вашего выбора в шапке сайта</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Адрес*</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.address ? 'border-red-500' : ''}`}
                  placeholder="Улица, дом"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Имя продавца*</label>
                <input
                  type="text"
                  name="sellerName"
                  value={formData.sellerName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.sellerName ? 'border-red-500' : ''}`}
                />
                {errors.sellerName && <p className="text-red-500 text-xs mt-1">{errors.sellerName}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Номер телефона*</label>
                <div className="flex">
                  <div className="bg-gray-100 p-2 border border-r-0 rounded-l">
                    +7
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone.startsWith('+7') ? formData.phone.substring(2) : formData.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[0-9]*$/.test(value)) {
                        setFormData(prev => ({ ...prev, phone: `+7${value}` }));
                      }
                    }}
                    className={`w-full p-2 border rounded-r ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="7XXXXXXXXXX"
                    maxLength={10}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                <p className="text-xs text-gray-500 mt-1">Формат: +7XXXXXXXXXX (только номера Казахстана)</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Фотографии*</label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                    disabled={images.length >= 5}
                  />
                  <label 
                    htmlFor="image-upload"
                    className={`flex flex-col items-center justify-center cursor-pointer ${images.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Upload size={24} className="mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">Нажмите для загрузки фотографий</p>
                    <p className="text-xs text-gray-400 mt-1">Максимум 5 фотографий</p>
                  </label>
                </div>
                {errors.images && <p className="text-red-500 text-xs mt-1">{errors.images}</p>}
                
                {images.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative h-20 w-20 rounded-md overflow-hidden border">
                        <img src={image} alt={`Uploaded ${index + 1}`} className="w-full h-full object-cover bg-gray-50" />
                        <button
                          type="button"
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                          onClick={() => removeImage(index)}
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Добавление...' : 'Добавить товар'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
