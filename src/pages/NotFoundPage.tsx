// src/pages/NotFoundPage.tsx
const NotFoundPage = () => {
  return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 — Страница не найдена</h1>
        <p className="text-lg text-gray-600 mb-6">
          Возможно, вы перешли по неправильной ссылке или страница была удалена.
        </p>
        <a
            href="/"
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition"
        >
          Вернуться на главную
        </a>
      </div>
  );
};

export default NotFoundPage;
