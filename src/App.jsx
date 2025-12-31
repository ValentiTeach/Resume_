import React from 'react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Heart, BookOpen } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto p-6 md:p-10">
        {/* Header Section */}
        <header className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              ВН
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Вікторія Носків
              </h1>
              <p className="text-xl text-indigo-600 mb-4">Психолог</p>
              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={18} />
                  <a href="mailto:viktoriia.noskiv@example.com" className="hover:text-indigo-600">
                    viktoriia.noskiv@example.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={18} />
                  <span>+380 XX XXX XX XX</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={18} />
                  <span>Україна</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Heart className="text-indigo-600" />
            Про мене
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Професійний психолог зі спеціалізацією в клінічній психології та позитивній психотерапії. 
            Допомагаю людям подолати стрес, тривожність та життєві труднощі. Використовую науково 
            обґрунтовані методи для покращення ментального здоров'я та якості життя клієнтів.
          </p>
        </section>

        {/* Specializations */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="text-indigo-600" />
            Спеціалізації
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-700 mb-2">Клінічна психологія</h3>
              <p className="text-gray-600 text-sm">
                Робота з психологічними розладами, депресією, тривожністю
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">Позитивна психотерапія</h3>
              <p className="text-gray-600 text-sm">
                Фокус на сильних сторонах особистості та розвитку потенціалу
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Стресостійкість</h3>
              <p className="text-gray-600 text-sm">
                Техніки подолання стресу та розвитку емоційної стійкості
              </p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg">
              <h3 className="font-semibold text-teal-700 mb-2">Індивідуальне консультування</h3>
              <p className="text-gray-600 text-sm">
                Персоналізований підхід до кожного клієнта
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <GraduationCap className="text-indigo-600" />
            Освіта
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">
                Магістр психології
              </h3>
              <p className="text-gray-600">Університет психології</p>
              <p className="text-sm text-gray-500">2018 - 2020</p>
            </div>
            <div className="border-l-4 border-indigo-400 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">
                Бакалавр психології
              </h3>
              <p className="text-gray-600">Університет психології</p>
              <p className="text-sm text-gray-500">2014 - 2018</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Briefcase className="text-indigo-600" />
            Досвід роботи
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Психолог-консультант
              </h3>
              <p className="text-indigo-600 mb-2">Приватна практика</p>
              <p className="text-sm text-gray-500 mb-2">2020 - теперішній час</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Індивідуальне психологічне консультування</li>
                <li>Робота з тривожністю та депресією</li>
                <li>Розвиток стресостійкості</li>
                <li>Позитивна психотерапія</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="text-indigo-600" />
            Навички та методи
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Когнітивно-поведінкова терапія',
              'Позитивна психотерапія',
              'Гештальт-терапія',
              'Арт-терапія',
              'Техніки релаксації',
              'Mindfulness',
              'Робота з травмою',
              'Емоційна регуляція'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-8">
          <p className="text-sm">
            © {new Date().getFullYear()} Вікторія Носків. Всі права захищені.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
