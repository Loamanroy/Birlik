import {Link} from "react-router-dom";

const Market = () => {
  const products = [
    { name: 'Сумка', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=870&q=80', href: 'http://localhost:5173/market/product/1' },
    { name: 'Умные часы', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=870&q=80', href: 'http://localhost:5173/market/product/1' },
    { name: 'Смартфоны', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=870&q=80', href: 'http://localhost:5173/market/product/1' },
    { name: 'Кроссовки', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=870&q=80' , href: 'http://localhost:5173/market/product/1'},
    { name: 'Ноутбук', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=870&q=80' , href: 'http://localhost:5173/market/product/1'},
    { name: 'Наушники', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=870&q=80' , href: 'http://localhost:5173/market/product/1'},
    { name: 'Фотоаппарат', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=870&q=80' , href: 'http://localhost:5173/market/product/1'},
    { name: 'Планшет', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=870&q=80', href: 'http://localhost:5173/market/product/1' },
  ];

  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Маркет</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
            <Link to={product.href}>
            <div className="h-28 sm:h-32 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover bg-gray-50" />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-sm">{product.name}</h3>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
