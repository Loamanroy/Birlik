import { useState, useEffect } from 'react';
import { useLocation } from '../contexts/LocationContext';

const IslamPage = () => {
  const { city, setCity } = useLocation();
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: '05:30',
    sunrise: '07:15',
    dhuhr: '12:30',
    asr: '15:45',
    maghrib: '18:20',
    isha: '19:45'
  });
  
  const hadithList = [
    { id: 1, text: 'Поистине, дела (оцениваются) только по намерениям, и, поистине, каждому человеку (достанется) только то, что он намеревался (обрести).', source: 'Аль-Бухари и Муслим' },
    { id: 2, text: 'Тот, кто верит в Аллаха и в Последний день, пусть говорит благое или молчит.', source: 'Аль-Бухари и Муслим' },
    { id: 3, text: 'Не уверует никто из вас до тех пор, пока не будет желать своему брату того же, чего желает самому себе.', source: 'Аль-Бухари и Муслим' },
  ];

  const cities = ['Астана', 'Алматы', 'Шымкент', 'Караганда', 'Актобе', 'Тараз'];

  useEffect(() => {
    if (city === 'Алматы') {
      setPrayerTimes({
        fajr: '05:15',
        sunrise: '07:00',
        dhuhr: '12:15',
        asr: '15:30',
        maghrib: '18:05',
        isha: '19:30'
      });
    } else if (city === 'Шымкент') {
      setPrayerTimes({
        fajr: '05:00',
        sunrise: '06:45',
        dhuhr: '12:00',
        asr: '15:15',
        maghrib: '17:50',
        isha: '19:15'
      });
    } else {
      setPrayerTimes({
        fajr: '05:30',
        sunrise: '07:15',
        dhuhr: '12:30',
        asr: '15:45',
        maghrib: '18:20',
        isha: '19:45'
      });
    }
  }, [city]);

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Islam</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Расписание намазов</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Выберите город</label>
            <select 
              className="w-full p-2 border rounded"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">Выбор города синхронизирован с другими разделами сайта</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Фаджр</span>
              <span>{prayerTimes.fajr}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Восход</span>
              <span>{prayerTimes.sunrise}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Зухр</span>
              <span>{prayerTimes.dhuhr}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Аср</span>
              <span>{prayerTimes.asr}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Магриб</span>
              <span>{prayerTimes.maghrib}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Иша</span>
              <span>{prayerTimes.isha}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Хадисы</h2>
          <div className="space-y-6">
            {hadithList.map(hadith => (
              <div key={hadith.id} className="pb-4 border-b last:border-0">
                <p className="mb-2 italic">{hadith.text}</p>
                <p className="text-sm text-gray-600">Источник: {hadith.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Рекомендации по жизни в Исламе</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <h3 className="font-bold mb-2">Молитва</h3>
            <p className="text-sm">Регулярно совершайте пять ежедневных молитв, чтобы укрепить свою связь с Аллахом.</p>
          </div>
          <div className="p-4 bg-green-50 rounded">
            <h3 className="font-bold mb-2">Благотворительность</h3>
            <p className="text-sm">Выплачивайте закят и будьте щедры с нуждающимися, чтобы очистить своё богатство.</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded">
            <h3 className="font-bold mb-2">Доброта</h3>
            <p className="text-sm">Проявляйте доброту и уважение ко всем людям, независимо от их веры или происхождения.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamPage;
