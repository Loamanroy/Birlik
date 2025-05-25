const Recommendations = () => {
  const products = [
    { name: 'Горный велосипед', price: '50 000 T', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e' },
    { name: 'Холодильник', price: '150 000 T', image: 'https://images.unsplash.com/photo-1722603929403-de9e80c46a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fCVEMSU4NSVEMCVCRSVEMCVCQiVEMCVCRSVEMCVCNCVEMCVCOCVEMCVCQiVEMSU4QyVEMCVCRCVEMCVCOCVEMCVCQXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Универсал', price: '3 200 000 T', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7' },
    { name: 'Смартфон', price: '120 000 T', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd' },
    { name: 'Ноутбук', price: '350 000 T', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed' },
    { name: 'Умные часы', price: '75 000 T', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12' },
    { name: 'Телевизор', price: '280 000 T', image: 'https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VFZ8ZW58MHx8MHx8fDA%3D%3D' },
    { name: 'Кофемашина', price: '95 000 T', image: 'https://images.unsplash.com/photo-1637029436347-e33bf98a5412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Планшет', price: '110 000 T', image: 'https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef' },
    { name: 'Пылесос', price: '65 000 T', image: 'https://images.unsplash.com/photo-1595777216528-071e0127ccbf' },
    { name: 'Микроволновка', price: '45 000 T', image: 'https://plus.unsplash.com/premium_photo-1673439305380-79947d273735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1pY3Jvd2F2ZXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Стиральная машина', price: '180 000 T', image: 'https://plus.unsplash.com/premium_photo-1675937428916-535f85f41c61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUQxJTgxJUQxJTgyJUQwJUI4JUQxJTgwJUQwJUIwJUQwJUJCJUQxJThDJUQwJUJEJUQwJUIwJUQxJThGJTIwJUQwJUJDJUQwJUIwJUQxJTg4JUQwJUI4JUQwJUJEJUQwJUIwfGVufDB8fDB8fHww' },
    { name: 'Кондиционер', price: '220 000 T', image: 'https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUN8ZW58MHx8MHx8fDA%3D' },
    { name: 'Игровая консоль', price: '240 000 T', image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f' },
    { name: 'Фотоаппарат', price: '175 000 T', image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84' },
  ];

  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Рекомендации</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
            <div className="h-36 sm:h-40 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover bg-gray-50" />
            </div>
            <div className="p-3">
              <h3 className="text-sm">{product.name}</h3>
              <p className="text-sm font-bold mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
