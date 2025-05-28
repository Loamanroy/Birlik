import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  value?: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: string | number;
    isPositive: boolean;
  };
  linkTo?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  value,
  icon,
  trend,
  linkTo,
  onClick,
  className = '',
  children
}) => {
  const cardContent = (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <div className="flex items-center mb-4">
        {icon && <div className="text-blue-500 mr-4">{icon}</div>}
        <div>
          <h3 className="font-medium">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>
      
      {value && (
        <div className="mt-2">
          <p className="text-2xl font-bold">{value}</p>
          {trend && (
            <p className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
              {trend.isPositive ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              {trend.value}
            </p>
          )}
        </div>
      )}
      
      {children}
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{cardContent}</Link>;
  }

  if (onClick) {
    return <div onClick={onClick} className="cursor-pointer">{cardContent}</div>;
  }

  return cardContent;
};

export default DashboardCard;
