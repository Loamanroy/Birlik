import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-16 my-4">
      <div className="max-w-screen-lg mx-auto p-8 text-center">
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 drop-shadow-md">
          Платформа взаимопомощи через Web3
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Инновационная экосистема для безопасных транзакций, цифровой идентификации и финансовых услуг нового поколения
        </p>
        <Link 
          to="/register" 
          className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Начать
        </Link>
      </div>
    </div>
  );
};

export default Banner;
