const AppsPage = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Приложения</h1>
      
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <img 
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3" 
          alt="Приложения" 
          className="w-64 h-64 object-contain mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold mb-4">Страница в разработке</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-6">
          Мы разрабатываем удобные мобильные приложения для iOS и Android, 
          которые позволят вам пользоваться всеми сервисами Birlik Live на ходу.
        </p>
        <div className="bg-blue-50 p-4 rounded inline-block">
          <p className="text-sm font-medium">Следите за обновлениями!</p>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
