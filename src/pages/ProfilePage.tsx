const ProfilePage = () => {
  const user = {
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Айбек Абдуллаев",
    email: "aybek@example.com",
    role: "Покупатель",
    location: "Алматы, Казахстан",
    joinedAt: "2023-06-15",
    bio: "Интересуюсь местными товарами, поддерживаю малый бизнес.",
  };

  return (
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <div className="flex items-center space-x-6">
            <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-400">Роль: {user.role}</p>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 text-gray-700 space-y-2">
            <p><strong>Город:</strong> {user.location}</p>
            <p><strong>Участник с:</strong> {new Date(user.joinedAt).toLocaleDateString("ru-RU")}</p>
            <p><strong>О себе:</strong> {user.bio}</p>
          </div>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Редактировать профиль
            </button>
            <button
                className="ms-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow hover:shadow-md transition-colors"
            >
              Интернет-Банк
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProfilePage;
