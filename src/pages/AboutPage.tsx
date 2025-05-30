import React from "react";
import {FaHandsHelping, FaUsers, FaGlobe} from "react-icons/fa";



const About: React.FC = () => {
    return (
        <div
            className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {/* Hero Section */}
            <section
                className="w-full py-20 px-6 text-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-800">
                <h1 className="text-5xl font-bold mb-4">О нас</h1>
                <p className="text-xl max-w-4xl mx-auto">
                    Birlik — платформа децентрализованной взаимопомощи на основе Web3, создающая сообщество
                    солидарности.
                </p>
            </section>

            {/* Mission / Features */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-6 bg-white dark:bg-gray-800">
                <div
                    className="p-8 rounded-lg shadow hover:shadow-xl bg-blue-50 dark:bg-blue-900 text-center transition">
                    <FaHandsHelping className="text-blue-600 dark:text-blue-300 text-5xl mx-auto mb-4"/>
                    <h3 className="text-2xl font-semibold mb-2">Взаимопомощь</h3>
                    <p>Среда, где каждый может получить поддержку или помочь другим.</p>
                </div>
                <div
                    className="p-8 rounded-lg shadow hover:shadow-xl bg-blue-50 dark:bg-blue-900 text-center transition">
                    <FaGlobe className="text-blue-600 dark:text-blue-300 text-5xl mx-auto mb-4"/>
                    <h3 className="text-2xl font-semibold mb-2">Web3 технологии</h3>
                    <p>Прозрачность и доверие на блокчейне.</p>
                </div>
                <div
                    className="p-8 rounded-lg shadow hover:shadow-xl bg-blue-50 dark:bg-blue-900 text-center transition">
                    <FaUsers className="text-blue-600 dark:text-blue-300 text-5xl mx-auto mb-4"/>
                    <h3 className="text-2xl font-semibold mb-2">Сообщество</h3>
                    <p>Горизонтальные связи, а не централизованные решения.</p>
                </div>
            </section>

            {/* Project History */}
            <section className="w-full py-20 px-6 bg-gray-100 dark:bg-gray-800">
                <h2 className="text-4xl font-bold text-center mb-12">История проекта</h2>
                <div className="relative border-l-4 border-blue-600 dark:border-blue-400 pl-8 space-y-10">
                    {[
                        {year: "2023", event: "Идея родилась во время волонтёрской работы."},
                        {year: "2024", event: "Разработка MVP и создание первых смарт-контрактов."},
                        {year: "2025", event: "Запуск тестовой сети и открытие сообщества Birlik."},
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="text-sm text-blue-600 dark:text-blue-300 font-semibold">{item.year}</div>
                            <div className="text-lg">{item.event}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="w-full bg-white dark:bg-gray-900 py-20 px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Отзывы сообщества</h2>
                <div className="flex flex-wrap gap-8 justify-center">
                    {[
                        {
                            name: "Марат",
                            text: "Я смог получить помощь, когда потерял работу. Birlik — это реальное сообщество, а не просто платформа."
                        },
                        {name: "Светлана", text: "Очень удобно помогать другим анонимно, но с полной прозрачностью!"},
                        {
                            name: "Андрей",
                            text: "Приятно быть частью чего-то по-настоящему человеческого и децентрализованного."
                        },
                    ].map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-80 p-6 rounded-lg shadow-md"
                        >
                            <p className="italic mb-4">“{t.text}”</p>
                            <p className="font-semibold text-right">— {t.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full bg-gray-50 dark:bg-gray-800 py-20 px-6">
                <h2 className="text-4xl font-bold text-center mb-10">Наша команда</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {[
                        {name: "Айдар", role: "Fullstack Developer"},
                        {name: "Алексей", role: "UI/UX Designer"},
                        {name: "Динара", role: "Community Manager"},
                    ].map((member, index) => (
                        <div
                            key={index}
                            className="w-72 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
                        >
                            <div
                                className="w-24 h-24 rounded-full bg-blue-200 dark:bg-blue-600 text-blue-700 dark:text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                                {member.name[0]}
                            </div>
                            <h4 className="text-xl font-semibold">{member.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="w-full py-16 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
                <h3 className="text-3xl font-semibold mb-4">Готовы присоединиться?</h3>
                <p className="text-lg mb-6">Станьте частью Birlik и начните помогать уже сегодня.</p>
                <a
                    href="/register"
                    className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
                >
                    Зарегистрироваться
                </a>
            </section>
        </div>
    );
};

export default About;
