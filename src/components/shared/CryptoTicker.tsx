import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoTicker: React.FC = () => {
  const { t } = useTranslation();
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch crypto prices');
        }
        
        const data = await response.json();
        setCryptoPrices(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching crypto prices:', err);
        setError('Failed to load cryptocurrency data');
        setLoading(false);
        
        setCryptoPrices([
          { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', current_price: 65432.10, price_change_percentage_24h: 2.5 },
          { id: 'ethereum', symbol: 'eth', name: 'Ethereum', current_price: 3456.78, price_change_percentage_24h: 1.2 },
          { id: 'binancecoin', symbol: 'bnb', name: 'Binance Coin', current_price: 567.89, price_change_percentage_24h: -0.8 },
          { id: 'solana', symbol: 'sol', name: 'Solana', current_price: 123.45, price_change_percentage_24h: 5.6 },
          { id: 'cardano', symbol: 'ada', name: 'Cardano', current_price: 0.45, price_change_percentage_24h: -1.3 },
          { id: 'ripple', symbol: 'xrp', name: 'XRP', current_price: 0.56, price_change_percentage_24h: 0.7 },
          { id: 'polkadot', symbol: 'dot', name: 'Polkadot', current_price: 12.34, price_change_percentage_24h: 3.2 },
          { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin', current_price: 0.12, price_change_percentage_24h: -2.1 },
        ]);
      }
    };

    fetchCryptoPrices();
    
    const intervalId = setInterval(fetchCryptoPrices, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800 text-white py-2 overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="animate-pulse">{t('crypto.loading')}</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-800 text-white py-2 overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="text-red-400">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-white py-2 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {cryptoPrices.map((crypto) => (
          <div key={crypto.id} className="flex items-center mx-4">
            <span className="font-bold uppercase">{crypto.symbol}</span>
            <span className="mx-1">$</span>
            <span>{crypto.current_price.toLocaleString()}</span>
            <span 
              className={`ml-2 ${
                crypto.price_change_percentage_24h >= 0 
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? '▲' : '▼'}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
        {/* Duplicate the items to create a seamless loop */}
        {cryptoPrices.map((crypto) => (
          <div key={`${crypto.id}-dup`} className="flex items-center mx-4">
            <span className="font-bold uppercase">{crypto.symbol}</span>
            <span className="mx-1">$</span>
            <span>{crypto.current_price.toLocaleString()}</span>
            <span 
              className={`ml-2 ${
                crypto.price_change_percentage_24h >= 0 
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? '▲' : '▼'}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
