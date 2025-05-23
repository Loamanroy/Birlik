import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Пожалуйста, введите ваш email');
      return;
    }
    console.log('Password reset requested for:', email);
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Проверьте вашу почту</h2>
        <p className="text-gray-600 mb-6">
          Мы отправили инструкции по сбросу пароля на адрес {email}. 
          Пожалуйста, проверьте вашу электронную почту.
        </p>
        <Link to="/login">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Вернуться на страницу входа
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Восстановление пароля</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <p className="mb-4 text-gray-600">
        Введите ваш email, и мы отправим вам инструкции по сбросу пароля.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email"
            className="w-full p-2 border rounded"
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Отправить инструкции
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            <Link to="/login" className="text-blue-600 hover:underline">
              Вернуться на страницу входа
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
