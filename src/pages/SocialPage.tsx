const SocialPage = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Соцсеть</h1>
      
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <img 
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7" 
          alt="Социальная сеть" 
          className="w-64 h-64 object-contain mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold mb-4">Страница в разработке</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-6">
          Мы создаем уникальную социальную платформу для общения и обмена информацией. 
          Скоро здесь вы сможете найти друзей, обмениваться сообщениями и делиться событиями из своей жизни.
        </p>
        <div className="bg-blue-50 p-4 rounded inline-block">
          <p className="text-sm font-medium">Следите за обновлениями!</p>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
