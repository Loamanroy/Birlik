import React from 'react';
import {Link} from "react-router-dom";

interface PaymentButtonProps {
  option: {
    url: string;
    icon: string | React.ReactElement;
    title: string;
  };
}

function PaymentButton({ option }: PaymentButtonProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <Link to={option.url} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    {typeof option.icon === 'string' ? (
                        <img src={option.icon} alt="" className="w-8 h-8" />
                    ) : (
                        <div className="w-8 h-8 text-blue-500">{option.icon}</div>
                    )}
                </div>
                <div className="text-sm font-medium">{option.title}</div>
            </Link>
        </div>
    );
}

export default PaymentButton;
