import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

const RealEstatePage = () => {
  // const { t } = useTranslation();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [verification, setVerification] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for properties with:', { location, propertyType, priceRange, beds, baths, verification });
  };

  return (
    <main className="bg-white min-h-screen pb-8">
      <div className="container mx-auto px-4 pt-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Real Estate Dashboard</h1>
        </div>

        {/* Market Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
              <div>
                <p className="text-gray-600">Available Properties</p>
                <p className="text-3xl font-bold mt-1">0</p>
              </div>
              <div className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
              <div>
                <p className="text-gray-600">Active Listings</p>
                <p className="text-3xl font-bold mt-1">0</p>
              </div>
              <div className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
              <div>
                <p className="text-gray-600">Average Price</p>
                <p className="text-3xl font-bold mt-1">$450,000</p>
                <p className="text-green-500 text-sm">↑ 3.2% vs last month</p>
              </div>
              <div className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Properties */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Properties</h2>
          <div className="bg-white rounded-lg shadow p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">No properties available at the moment.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                Add Your Property
              </button>
            </div>
          </div>
        </div>

        {/* Property Search and Market Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property Search */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Property Search</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <form onSubmit={handleSearch}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="City, neighborhood, or address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Property Type</label>
                    <select
                      className="w-full px-4 py-2 border rounded-md"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Price Range</label>
                    <select
                      className="w-full px-4 py-2 border rounded-md"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="0-100000">$0 - $100,000</option>
                      <option value="100000-250000">$100,000 - $250,000</option>
                      <option value="250000-500000">$250,000 - $500,000</option>
                      <option value="500000-1000000">$500,000 - $1,000,000</option>
                      <option value="1000000+">$1,000,000+</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Beds</label>
                    <select
                      className="w-full px-4 py-2 border rounded-md"
                      value={beds}
                      onChange={(e) => setBeds(e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Baths</label>
                    <select
                      className="w-full px-4 py-2 border rounded-md"
                      value={baths}
                      onChange={(e) => setBaths(e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Verification</label>
                    <select
                      className="w-full px-4 py-2 border rounded-md"
                      value={verification}
                      onChange={(e) => setVerification(e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="verified">Verified</option>
                      <option value="unverified">Unverified</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition"
                >
                  Search Properties
                </button>
              </form>
            </div>
          </div>

          {/* Market Insights */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Market Insights</h2>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="font-medium mb-4">Price Trends</h3>
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-48">
                <p className="text-gray-500">Price trend chart will be displayed here</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-medium mb-4">Popular Neighborhoods</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Downtown</span>
                  <span className="text-blue-500 font-medium">$520/sqft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Midtown</span>
                  <span className="text-blue-500 font-medium">$485/sqft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Westside</span>
                  <span className="text-blue-500 font-medium">$450/sqft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Northside</span>
                  <span className="text-blue-500 font-medium">$410/sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RealEstatePage;
