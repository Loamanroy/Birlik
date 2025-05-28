import React, { useState } from 'react';
import MapComponent from '../components/shared/MapComponent';

const TaxiPage: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([51.1694, 71.4491]); // Astana coordinates
  const [markers, setMarkers] = useState<Array<{ position: [number, number]; popup?: string }>>([
    { position: [51.1694, 71.4491], popup: 'Your location' }
  ]);

  const handleBookRide = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking ride from', pickup, 'to', destination);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation: [number, number] = [position.coords.latitude, position.coords.longitude];
          setCurrentLocation(newLocation);
          setMarkers([{ position: newLocation, popup: 'Your current location' }]);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <main className="bg-white min-h-screen pb-8">
      <div className="container mx-auto px-4 pt-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Taxi Service</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Book a Ride</h2>
              <form onSubmit={handleBookRide}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Pickup Location</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-grow px-4 py-2 border rounded-l-md"
                      placeholder="Enter pickup address"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
                      onClick={handleGetCurrentLocation}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Destination</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter destination address"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition"
                >
                  Book Now
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Ride Options</h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <div className="text-blue-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">Economy</p>
                    <p className="text-gray-500 text-sm">Affordable rides for everyday use</p>
                  </div>
                  <div className="text-gray-700 font-medium">$5-7</div>
                </div>
                <div className="flex items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <div className="text-blue-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">Comfort</p>
                    <p className="text-gray-500 text-sm">Newer cars with extra legroom</p>
                  </div>
                  <div className="text-gray-700 font-medium">$8-10</div>
                </div>
                <div className="flex items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <div className="text-blue-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">Premium</p>
                    <p className="text-gray-500 text-sm">Luxury vehicles with top-rated drivers</p>
                  </div>
                  <div className="text-gray-700 font-medium">$12-15</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Map</h2>
              <div className="rounded-lg overflow-hidden">
                <MapComponent 
                  center={currentLocation} 
                  zoom={13} 
                  markers={markers}
                  height="500px"
                />
              </div>
              <div className="mt-4 text-gray-600 text-sm">
                <p>Drag the map to adjust your pickup location or use the current location button.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Rides */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Rides</h2>
          <div className="bg-white rounded-lg shadow p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">No recent rides found.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                Book Your First Ride
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaxiPage;
