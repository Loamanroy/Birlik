import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type WalletType = 'metamask' | 'walletconnect' | 'coinbase' | 'trust';

interface NFTWalletProps {
  className?: string;
}

const NFTWallet: React.FC<NFTWalletProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [passportId, setPassportId] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [showWalletOptions, setShowWalletOptions] = useState(false);

  const connectWallet = async (walletType: WalletType) => {
    try {
      setIsConnected(true);
      setWalletAddress('0x71C7656EC7ab88b098defB751B7401B5f6d8976F');
      setPassportId('KZ-NFT-2023-78945');
      setIsVerified(true);
      setShowWalletOptions(false);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    setPassportId('');
    setIsVerified(false);
  };

  const formatWalletAddress = (address: string) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">NFT Passport</h2>
        {isConnected ? (
          <button
            onClick={disconnectWallet}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Disconnect
          </button>
        ) : (
          <button
            onClick={() => setShowWalletOptions(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Connect Wallet
          </button>
        )}
      </div>

      {isConnected ? (
        <div className="space-y-4">
          <div className="flex items-center p-3 border rounded-md bg-gray-50">
            <div className="text-blue-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Passport ID</p>
              <p className="font-medium">{passportId}</p>
            </div>
          </div>

          <div className="flex items-center p-3 border rounded-md bg-gray-50">
            <div className="text-blue-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Verification Status</p>
              <p className="font-medium flex items-center">
                {isVerified ? (
                  <>
                    <span className="text-green-500 mr-1">Verified</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </>
                ) : (
                  <span className="text-red-500">Not Verified</span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center p-3 border rounded-md bg-gray-50">
            <div className="text-blue-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Wallet Address</p>
              <p className="font-medium">{formatWalletAddress(walletAddress)}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-4">Connect your crypto wallet to access your NFT passport</p>
        </div>
      )}

      {showWalletOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Connect Wallet</h3>
              <button 
                onClick={() => setShowWalletOptions(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => connectWallet('metamask')}
                className="flex items-center w-full p-3 border rounded-md hover:bg-gray-50"
              >
                <img src="https://metamask.io/images/metamask-fox.svg" alt="MetaMask" className="h-8 w-8 mr-3" />
                <span>MetaMask</span>
              </button>
              <button 
                onClick={() => connectWallet('walletconnect')}
                className="flex items-center w-full p-3 border rounded-md hover:bg-gray-50"
              >
                <img src="https://walletconnect.com/images/walletconnect-logo.svg" alt="WalletConnect" className="h-8 w-8 mr-3" />
                <span>WalletConnect</span>
              </button>
              <button 
                onClick={() => connectWallet('coinbase')}
                className="flex items-center w-full p-3 border rounded-md hover:bg-gray-50"
              >
                <img src="https://www.coinbase.com/assets/press/coinbase-icon.png" alt="Coinbase Wallet" className="h-8 w-8 mr-3" />
                <span>Coinbase Wallet</span>
              </button>
              <button 
                onClick={() => connectWallet('trust')}
                className="flex items-center w-full p-3 border rounded-md hover:bg-gray-50"
              >
                <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.png" alt="Trust Wallet" className="h-8 w-8 mr-3" />
                <span>Trust Wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTWallet;
