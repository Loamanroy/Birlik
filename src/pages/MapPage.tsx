import { useState, useEffect } from 'react';
import MapComponent from '../components/shared/MapComponent';
import { useLocation } from '../contexts/LocationContext';

const MapPage = () => {
  const { city } = useLocation();
  const [loading, setLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState<[number, number]>([51.1694, 71.4491]); // Default to Astana
  const [mapMarkers, setMapMarkers] = useState<Array<{ position: [number, number]; popup: string }>>([]);

  const cityCoordinates: Record<string, [number, number]> = {
    'Астана': [51.1694, 71.4491],
    'Алматы': [43.2220, 76.8512],
    'Шымкент': [42.3417, 69.5901],
    'Караганда': [49.8047, 73.1094],
    'Актобе': [50.2797, 57.2072],
    'Тараз': [42.9000, 71.3667],
    'Павлодар': [52.2873, 76.9674],
    'Усть-Каменогорск': [49.9844, 82.6149],
    'Семей': [50.4111, 80.2275],
    'Костанай': [53.2198, 63.6354],
    'Атырау': [47.1167, 51.8833],
    'Кызылорда': [44.8639, 65.5019]
  };

  useEffect(() => {
    if (city in cityCoordinates) {
      setMapCenter(cityCoordinates[city]);
      setMapMarkers([{ position: cityCoordinates[city], popup: city }]);
    }
    setLoading(false);
  }, [city]);

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Карта Казахстана</h1>
      {loading ? (
        <div className="h-[600px] bg-gray-100 animate-pulse flex items-center justify-center">
          <p>Загрузка карты...</p>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="relative z-10">
            <MapComponent center={mapCenter} zoom={10} markers={mapMarkers} height="min-h-[300px] h-[50vh] sm:h-[600px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
