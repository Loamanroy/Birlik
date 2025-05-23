const DeliveryPage = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Доставка</h1>
      
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
          alt="Доставка" 
          className="w-64 h-64 object-contain mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold mb-4">Страница в разработке</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-6">
          Мы работаем над созданием сервиса доставки, который сделает вашу жизнь проще и удобнее. 
          Скоро здесь появится возможность заказать доставку любых товаров прямо к вашей двери.
        </p>
        <div className="bg-blue-50 p-4 rounded inline-block">
          <p className="text-sm font-medium">Следите за обновлениями!</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
