import { useState } from 'react';
import MapComponent from '../components/shared/MapComponent';
import { useLocation } from '../contexts/LocationContext';

const KeleminPage = () => {
  const { city } = useLocation();
  const [activeTab, setActiveTab] = useState('attractions');
  
  const cities = [
    { id: 'astana', name: 'Астана', attractions: ['Байтерек', 'Хан Шатыр', 'Дворец мира и согласия'] },
    { id: 'almaty', name: 'Алматы', attractions: ['Медеу', 'Кок-Тобе', 'Парк 28 панфиловцев'] },
    { id: 'shymкент', name: 'Шымкент', attractions: ['Дендропарк', 'Цитадель', 'Областной музей'] },
  ];

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Kelemin - Путеводитель по Казахстану</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="h-[250px] sm:h-[400px] rounded-lg relative z-10 mb-4">
          <MapComponent 
            center={[48.0196, 66.9237]} // Center of Kazakhstan
            zoom={5}
            markers={[
              { position: [51.1694, 71.4491], popup: 'Астана' },
              { position: [43.2220, 76.8512], popup: 'Алматы' },
              { position: [42.3417, 69.5901], popup: 'Шымкент' },
              { position: [49.8047, 73.1094], popup: 'Караганда' }
            ]}
            height="h-[250px] sm:h-[400px]"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'attractions' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('attractions')}
          >
            Достопримечательности
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'cafes' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('cafes')}
          >
            Кафе
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'restaurants' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('restaurants')}
          >
            Рестораны
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'cinemas' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('cinemas')}
          >
            Кинотеатры
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'hotels' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('hotels')}
          >
            Отели
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Рекомендации</h2>
        
        <div className="space-y-6">
          {cities.map(cityItem => (
            <div 
              key={cityItem.id} 
              className={`border-b pb-4 last:border-0 ${cityItem.name === city ? 'bg-blue-50 p-3 rounded' : ''}`}
            >
              <h3 className="text-lg font-bold mb-2">{cityItem.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cityItem.attractions.map((attraction: string, index: number) => (
                  <div key={index} className="bg-gray-50 p-4 rounded">
                    <p className="font-medium">{attraction}</p>
                    <p className="text-sm text-gray-600 mt-1">Популярная достопримечательность</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeleminPage;
