import MapComponent from '../shared/MapComponent';

const BirlikTaxi = () => {
  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Birlik Taxi</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <div className="rounded-lg overflow-hidden h-48 relative z-10">
              {/* Using MapComponent for interactive map */}
              <MapComponent 
                center={[51.1694, 71.4491]} // Coordinates for Astana
                zoom={5}
                markers={[
                  { position: [51.1694, 71.4491], popup: "Астана" },
                  { position: [43.2567, 76.9286], popup: "Алматы" },
                  { position: [42.3417, 69.5901], popup: "Шымкент" }
                ]}
                height="h-48"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Путеводитель</h3>
              <p className="text-sm">по Казахстану</p>
              <p className="text-xs mt-1">7 предложений</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden shadow h-48">
              <img 
                src="https://images.unsplash.com/photo-1611068562065-994ba66501ba?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Birlik Taxi - Путеводитель по Казахстану" 
                className="w-full h-full object-cover bg-gray-50"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Доставка</h3>
              <p className="text-xs">Бирлик доставит еду и продукты на дом!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirlikTaxi;
