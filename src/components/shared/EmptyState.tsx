import React from 'react';
import { useTranslation } from 'react-i18next';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  icon,
  actionLabel,
  onAction,
  className
}) => {
  const { t } = useTranslation();
  
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 ${className}`}>
      <div className="text-gray-400 mb-4">
        {icon || (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        )}
      </div>
      {title && <h3 className="text-lg font-medium mb-2">{title}</h3>}
      <p className="text-gray-600 mb-4">{message || t('common.no_items_available')}</p>
      {actionLabel && onAction && (
        <button 
          onClick={onAction}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
