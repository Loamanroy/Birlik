import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log('Login attempt with:', { email, password });
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSuccess('Вход выполнен успешно!');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      setError('Ошибка при входе. Пожалуйста, проверьте данные и попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Вход в аккаунт</h2>
      
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
            <p className="form-error">Пожалуйста, введите пароль</p>
          )}
          <div className="mt-1 text-right">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Забыли пароль?
            </Link>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn-primary w-full h-12 flex justify-center items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Выполняется вход...' : 'Войти'}
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Нет аккаунта?{' '}
            <Link to="/register" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
