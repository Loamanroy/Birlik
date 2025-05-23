const Islam = () => {
  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Islam</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <div className="h-36 sm:h-40 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1564046247017-4462f3c1e9f3" 
              alt="Коран" 
              className="w-full h-full object-cover bg-gray-50"
            />
          </div>
          <div className="p-3">
            <h3 className="text-lg font-medium">Расписание намазов</h3>
            <p className="text-sm">Актуальное расписание для вашего города</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <div className="h-36 sm:h-40 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542816417-0983674e29a0" 
              alt="Ислам" 
              className="w-full h-full object-cover bg-gray-50"
            />
          </div>
          <div className="p-3">
            <h3 className="text-lg font-medium">Хадисы</h3>
            <p className="text-sm">Мудрость Пророка Мухаммада (ﷺ)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Islam;
