import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Пожалуйста, заполните все поля');
      setIsSubmitting(false);
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log('Registration attempt with:', { name, email, password });
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSuccess('Регистрация выполнена успешно!');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      setError('Ошибка при регистрации. Пожалуйста, попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded border border-red-500">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-4 bg-green-50 text-green-600 rounded border border-green-500">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="form-label">Имя</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше полное имя"
            className={`form-input ${error && !name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
          />
          {error && !name && (
            <p className="form-error">Пожалуйста, введите ваше имя</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@birlik.kz"
            className={`form-input ${error && !email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
          />
          {error && !email && (
            <p className="form-error">Пожалуйста, введите email</p>
          )}
        </div>
        
        <div>
          <label htmlFor="password" className="form-label">Пароль</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Минимум 8 символов"
            className={`form-input ${error && !password ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
          />
          {error && !password && (
            <p className="form-error">Пожалуйста, создайте пароль</p>
          )}
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="form-label">Подтверждение пароля</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Повторите пароль"
            className={`form-input ${error && (!confirmPassword || password !== confirmPassword) ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
          />
          {error && !confirmPassword && (
            <p className="form-error">Пожалуйста, подтвердите пароль</p>
          )}
          {error && confirmPassword && password !== confirmPassword && (
            <p className="form-error">Пароли не совпадают</p>
          )}
        </div>
        
        <button 
          type="submit" 
          className="btn-primary w-full h-12 flex justify-center items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Выполняется регистрация...' : 'Зарегистрироваться'}
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Уже есть аккаунт?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
