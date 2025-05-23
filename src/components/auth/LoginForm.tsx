import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    console.log('Login attempt with:', { email, password });
    setError('');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = '/';
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Вход в аккаунт</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-1">Пароль</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите ваш пароль"
            className="w-full p-2 border rounded"
          />
          <div className="mt-1 text-right">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Забыли пароль?
            </Link>
          </div>
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Войти
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Нет аккаунта?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
