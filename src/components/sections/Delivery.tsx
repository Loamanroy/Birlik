const Delivery = () => {
  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Доставка</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <div className="h-36 sm:h-40 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5" 
              alt="Доставка еды" 
              className="w-full h-full object-cover bg-gray-50"
            />
          </div>
          <div className="p-3">
            <h3 className="text-lg font-medium">Доставка еды</h3>
            <p className="text-sm">Быстрая доставка из ресторанов</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <div className="h-36 sm:h-40 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
              alt="Курьерская доставка" 
              className="w-full h-full object-cover bg-gray-50"
            />
          </div>
          <div className="p-3">
            <h3 className="text-lg font-medium">Курьерская доставка</h3>
            <p className="text-sm">Доставка товаров по всему Казахстану</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
