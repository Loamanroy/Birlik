import { useState, useEffect } from 'react';
import MapComponent from '../components/shared/MapComponent';
import { useLocation } from '../contexts/LocationContext';
import { MapPin, Coffee, Utensils, Film, Hotel } from 'lucide-react';

type LocationType = 'attractions' | 'cafes' | 'restaurants' | 'cinemas' | 'hotels';

interface Location {
  name: string;
  position: [number, number];
  description: string;
  type: LocationType;
}

interface City {
  id: string;
  name: string;
  position: [number, number];
  locations: Location[];
}

const KeleminPage = () => {
  const { city } = useLocation();
  const [activeTab, setActiveTab] = useState<LocationType>('attractions');
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([48.0196, 66.9237]);
  const [mapZoom, setMapZoom] = useState<number>(5);
  const [visibleMarkers, setVisibleMarkers] = useState<Array<{position: [number, number]; popup: string}>>([]);

  const cities: City[] = [
    { 
      id: 'astana', 
      name: 'Астана', 
      position: [51.1694, 71.4491],
      locations: [
        { name: 'Байтерек', position: [51.1283, 71.4305], description: 'Символ Астаны, монумент и смотровая площадка', type: 'attractions' },
        { name: 'Хан Шатыр', position: [51.1333, 71.4035], description: 'Торгово-развлекательный центр в форме шатра', type: 'attractions' },
        { name: 'Дворец мира и согласия', position: [51.1225, 71.4682], description: 'Пирамида, созданная архитектором Норманом Фостером', type: 'attractions' },
        { name: 'Кофехаус', position: [51.1294, 71.4308], description: 'Уютное кафе с широким выбором кофе и десертов', type: 'cafes' },
        { name: 'Coffeeboom', position: [51.1331, 71.4102], description: 'Сеть кофеен с качественным кофе и выпечкой', type: 'cafes' },
        { name: 'Астана Нуры', position: [51.1267, 71.4372], description: 'Ресторан казахской кухни с традиционными блюдами', type: 'restaurants' },
        { name: 'Turandot', position: [51.1301, 71.4289], description: 'Ресторан азиатской кухни с изысканным интерьером', type: 'restaurants' },
        { name: 'Chaplin Cinemas', position: [51.1333, 71.4035], description: 'Современный кинотеатр в ТРЦ Хан Шатыр', type: 'cinemas' },
        { name: 'Kinopark 8', position: [51.1289, 71.4069], description: 'Мультиплекс с 8 залами и IMAX', type: 'cinemas' },
        { name: 'Rixos President', position: [51.1242, 71.4532], description: 'Пятизвездочный отель с роскошными номерами', type: 'hotels' },
        { name: 'Hilton Astana', position: [51.0909, 71.4156], description: 'Современный отель международной сети', type: 'hotels' },
      ]
    },
    { 
      id: 'almaty', 
      name: 'Алматы', 
      position: [43.2220, 76.8512],
      locations: [
        { name: 'Медеу', position: [43.1567, 77.0472], description: 'Высокогорный каток и спортивный комплекс', type: 'attractions' },
        { name: 'Кок-Тобе', position: [43.2284, 76.9731], description: 'Гора с парком развлечений и телебашней', type: 'attractions' },
        { name: 'Парк 28 панфиловцев', position: [43.2584, 76.9573], description: 'Центральный парк с мемориалом и собором', type: 'attractions' },
        { name: 'Cafeteria', position: [43.2377, 76.9456], description: 'Стильное кафе с европейской кухней', type: 'cafes' },
        { name: 'Ciao Coffee', position: [43.2399, 76.9572], description: 'Итальянская кофейня с аутентичными напитками', type: 'cafes' },
        { name: 'Алаша', position: [43.2365, 76.9527], description: 'Ресторан с живой музыкой и восточной кухней', type: 'restaurants' },
        { name: 'Рыба на даче', position: [43.2128, 76.9734], description: 'Ресторан морепродуктов с летней террасой', type: 'restaurants' },
        { name: 'Арман Cinema', position: [43.2381, 76.9456], description: 'Один из старейших кинотеатров города', type: 'cinemas' },
        { name: 'Cinemax', position: [43.2336, 76.9519], description: 'Современный кинотеатр с комфортными залами', type: 'cinemas' },
        { name: 'The Ritz-Carlton', position: [43.2397, 76.9567], description: 'Элитный отель в центре города', type: 'hotels' },
        { name: 'Казахстан', position: [43.2361, 76.9457], description: 'Исторический отель с панорамным видом', type: 'hotels' },
      ]
    },
    { 
      id: 'shymkent', 
      name: 'Шымкент', 
      position: [42.3417, 69.5901],
      locations: [
        { name: 'Дендропарк', position: [42.3217, 69.5801], description: 'Ботанический сад с редкими растениями', type: 'attractions' },
        { name: 'Цитадель', position: [42.3317, 69.5851], description: 'Исторический центр древнего города', type: 'attractions' },
        { name: 'Областной музей', position: [42.3387, 69.5921], description: 'Музей истории и культуры региона', type: 'attractions' },
        { name: 'Кофейный дворик', position: [42.3427, 69.5911], description: 'Уютное кафе с домашней выпечкой', type: 'cafes' },
        { name: 'Sweet Home', position: [42.3407, 69.5891], description: 'Семейное кафе с детской площадкой', type: 'cafes' },
        { name: 'Шымкент', position: [42.3437, 69.5921], description: 'Ресторан национальной кухни', type: 'restaurants' },
        { name: 'Бахор', position: [42.3397, 69.5881], description: 'Узбекский ресторан с аутентичными блюдами', type: 'restaurants' },
        { name: 'Kinoplexx', position: [42.3427, 69.5941], description: 'Современный кинотеатр с 3D-залами', type: 'cinemas' },
        { name: 'Cinema City', position: [42.3387, 69.5871], description: 'Семейный кинотеатр с детскими сеансами', type: 'cinemas' },
        { name: 'Rixos Khadisha', position: [42.3447, 69.5931], description: 'Премиум-отель с спа-центром', type: 'hotels' },
        { name: 'Shymkent Hotel', position: [42.3407, 69.5861], description: 'Бизнес-отель в центре города', type: 'hotels' },
      ]
    },
    { 
      id: 'karaganda', 
      name: 'Караганда', 
      position: [49.8047, 73.1094],
      locations: [
        { name: 'Экологический музей', position: [49.8027, 73.1074], description: 'Музей экологии и природы региона', type: 'attractions' },
        { name: 'Парк Победы', position: [49.8067, 73.1114], description: 'Мемориальный парк с монументами', type: 'attractions' },
        { name: 'Центральный парк', position: [49.8037, 73.1054], description: 'Городской парк с аттракционами', type: 'attractions' },
        { name: 'Coffee House', position: [49.8057, 73.1104], description: 'Современная кофейня с авторскими напитками', type: 'cafes' },
        { name: 'Vanilla Sky', position: [49.8037, 73.1084], description: 'Кафе-кондитерская с десертами', type: 'cafes' },
        { name: 'Медведь', position: [49.8077, 73.1124], description: 'Ресторан русской кухни с большими порциями', type: 'restaurants' },
        { name: 'Zoloto', position: [49.8017, 73.1064], description: 'Ресторан европейской кухни с винной картой', type: 'restaurants' },
        { name: 'Kinoplexx', position: [49.8057, 73.1134], description: 'Кинотеатр с премьерными показами', type: 'cinemas' },
        { name: 'Sary Arka Cinema', position: [49.8027, 73.1044], description: 'Исторический кинотеатр города', type: 'cinemas' },
        { name: 'Чайка', position: [49.8087, 73.1144], description: 'Комфортабельный отель в центре', type: 'hotels' },
        { name: 'Достар Алем', position: [49.8007, 73.1034], description: 'Отель с конференц-залами и рестораном', type: 'hotels' },
      ]
    },
  ];

  useEffect(() => {
    let markers: Array<{position: [number, number]; popup: string}> = [];
    
    if (activeCity) {
      const selectedCity = cities.find(c => c.id === activeCity);
      if (selectedCity) {
        if (activeLocation) {
          const location = selectedCity.locations.find(l => l.name === activeLocation);
          if (location) {
            markers = [{ position: location.position, popup: `${location.name}: ${location.description}` }];
            setMapCenter(location.position);
            setMapZoom(15);
            return;
          }
        }
        
        markers = selectedCity.locations
          .filter(location => location.type === activeTab)
          .map(location => ({
            position: location.position,
            popup: `${location.name}: ${location.description}`
          }));
        
        setMapCenter(selectedCity.position);
        setMapZoom(12);
      }
    } else {
      markers = cities.map(city => ({
        position: city.position,
        popup: city.name
      }));
      
      setMapCenter([48.0196, 66.9237]);
      setMapZoom(5);
    }
    
    setVisibleMarkers(markers);
  }, [activeTab, activeCity, activeLocation]);

  const handleTabChange = (tab: LocationType) => {
    setActiveTab(tab);
    setActiveLocation(null);
  };

  const handleCitySelect = (cityId: string) => {
    if (activeCity === cityId) {
      setActiveCity(null);
      setActiveLocation(null);
    } else {
      setActiveCity(cityId);
      setActiveLocation(null);
    }
  };

  const handleLocationSelect = (locationName: string) => {
    if (activeLocation === locationName) {
      setActiveLocation(null);
    } else {
      setActiveLocation(locationName);
    }
  };

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Kelemin - Путеводитель по Казахстану</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="h-[250px] sm:h-[400px] rounded-lg relative z-10 mb-4">
          <MapComponent 
            center={mapCenter}
            zoom={mapZoom}
            markers={visibleMarkers}
            height="h-[250px] sm:h-[400px]"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded flex items-center ${activeTab === 'attractions' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => handleTabChange('attractions')}
          >
            <MapPin size={18} className="mr-1" />
            Достопримечательности
          </button>
          <button 
            className={`px-4 py-2 rounded flex items-center ${activeTab === 'cafes' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => handleTabChange('cafes')}
          >
            <Coffee size={18} className="mr-1" />
            Кафе
          </button>
          <button 
            className={`px-4 py-2 rounded flex items-center ${activeTab === 'restaurants' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => handleTabChange('restaurants')}
          >
            <Utensils size={18} className="mr-1" />
            Рестораны
          </button>
          <button 
            className={`px-4 py-2 rounded flex items-center ${activeTab === 'cinemas' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => handleTabChange('cinemas')}
          >
            <Film size={18} className="mr-1" />
            Кинотеатры
          </button>
          <button 
            className={`px-4 py-2 rounded flex items-center ${activeTab === 'hotels' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => handleTabChange('hotels')}
          >
            <Hotel size={18} className="mr-1" />
            Отели
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Интересные места</h2>
        
        <div className="space-y-6">
          {cities.map(cityItem => (
            <div 
              key={cityItem.id} 
              className={`border-b pb-4 last:border-0 ${cityItem.name === city || activeCity === cityItem.id ? 'bg-blue-50 p-3 rounded' : ''}`}
            >
              <h3 
                className="text-lg font-bold mb-2 cursor-pointer hover:text-blue-600 transition-colors flex items-center"
                onClick={() => handleCitySelect(cityItem.id)}
              >
                <MapPin size={18} className="mr-1 text-blue-500" />
                {cityItem.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cityItem.locations
                  .filter(location => location.type === activeTab)
                  .map((location, index) => (
                    <div 
                      key={index} 
                      className={`bg-gray-50 p-4 rounded cursor-pointer hover:bg-blue-50 transition-colors ${activeLocation === location.name ? 'bg-blue-100 border border-blue-300' : ''}`}
                      onClick={() => handleLocationSelect(location.name)}
                    >
                      <p className="font-medium">{location.name}</p>
                      <p className="text-sm text-gray-600 mt-1">{location.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeleminPage;
