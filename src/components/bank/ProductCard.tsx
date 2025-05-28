import {Link} from "react-router-dom";

interface ProductCardProps {
  product: {
    url: string;
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    badge?: string;
  };
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <Link to={product.url} className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                    <div className="w-6 h-6">
                        {product.icon}
                    </div>
                </div>
                <div>
                    <div className="font-medium">{product.title}</div>
                    {product.subtitle && <div className="text-sm text-gray-500">{product.subtitle}</div>}
                    {product.badge && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800">
                            {product.badge}
                        </span>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
