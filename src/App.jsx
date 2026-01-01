import React, { useState, useEffect } from 'react';
import { Mail, Phone, Award, Briefcase, GraduationCap, Globe, Star, ChevronDown, Menu, X, Brain, Heart, Users, Shield, Lightbulb, Smile, Target, Sparkles, BookOpen, MessageCircle, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

export default function InteractiveResume() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Animate cards on scroll
      const cards = document.querySelectorAll('.animate-on-scroll');
      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleCards(prev => new Set([...prev, idx]));
        }
      });
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const education = [
    {
      degree: "Магістр клінічної та реабілітаційної психології",
      institution: "Карпатський національний університет ім. Стефаника",
      date: "26.12.2025",
      icon: Brain
    },
    {
      degree: "Сертифікований базовий консультант в методі позитивної психотерапії",
      institution: "WAPP",
      date: "30.10.2025",
      icon: Heart
    },
    {
      degree: "Бакалавр психології",
      institution: "Прикарпатський національний університет ім. Стефаника",
      date: "01.07.2024",
      icon: GraduationCap
    },
    {
      degree: "Молодший спеціаліст",
      institution: "Івано-Франківський медичний фаховий коледж",
      date: "01.06.2012",
      icon: Award
    }
  ];

  const trainings = [
    {
      title: "Психологічна стійкість. Навчання стресостійкості. Розвиток навичок антикрихкості",
      icon: Shield,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Зв'язок ментального здоров'я з нашим тілом. Психосоматика",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Розумний конфлікт. Як навчитися управляти конфліктом",
      icon: Users,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Налагодження командної роботи в організації",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Тренінг на збереження ментального здоров'я. На шляху до більш наповненішого життя",
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Булінг і Емпатія. Стоп булінг. Протидія булінгу в шкільному середовищі",
      icon: Smile,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const courses = [
    { title: "Ментальне здоров'я в умовах війни", org: "RAZOM + факультет психології ПНУ", duration: "6 академ. год.", date: "25.01.2024", icon: Brain },
    { title: "Батьківство без стресу", org: "ПОРУЧ (тренери: Пілецька Любомира, Федорів Анастасія)", duration: "24 год.", date: "Лютий 2024", icon: Heart },
    { title: "Травматичний досвід і ПТСР: інструментарій для психотерапевта", org: "Prometheus", date: "Листопад 2023", icon: Lightbulb },
    { title: "Протидія та попередження булінгу (цькування) в закладах освіти", org: "Prometheus", date: "Листопад 2023", icon: Shield },
    { title: "Інформаційна гігієна. Як розпізнати брехню в соцмережах, в інтернеті та на телебаченні", org: "Prometheus", date: "Травень 2023", icon: Globe },
    { title: "Особливості ведення пацієнтів з військовими травмами та посттравматичними розладами", org: "ОКЛ (офлайн)", date: "Березень 2023", icon: BookOpen },
    { title: "Оцінювання без знецінювання", org: "eDera", date: "Квітень 2023", icon: CheckCircle2 }
  ];

  const skills = [
    { name: "Комунікабельність", level: 95, icon: MessageCircle, color: "purple" },
    { name: "Емпатійність", level: 98, icon: Heart, color: "pink" },
    { name: "Проникливість", level: 90, icon: Brain, color: "blue" },
    { name: "Трудоголізм", level: 100, icon: Zap, color: "orange" }
  ];

  const FloatingIcon = ({ Icon, delay, size = 40 }) => (
    <div 
      className="absolute opacity-10 animate-float"
      style={{ 
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    >
      <Icon size={size} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingIcon Icon={Brain} delay={0} size={60} />
        <FloatingIcon Icon={Heart} delay={1} size={50} />
        <FloatingIcon Icon={Sparkles} delay={2} size={40} />
        <FloatingIcon Icon={Users} delay={3} size={55} />
        <FloatingIcon Icon={Lightbulb} delay={4} size={45} />
        <FloatingIcon Icon={Smile} delay={5} size={50} />
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl transform group-hover:scale-110 transition-transform">
              ВН
            </div>
            <Brain className="text-purple-400 group-hover:animate-pulse" size={24} />
          </div>
          
          <div className="hidden md:flex gap-8">
            {['Про мене', 'Освіта', 'Компетентності', 'Навички', 'Контакти'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(['hero', 'education', 'competencies', 'skills', 'contact'][idx])}
                className="relative hover:text-purple-400 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="group-hover:rotate-90 transition-transform" /> : <Menu size={24} className="group-hover:scale-110 transition-transform" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg animate-slide-down">
            <div className="flex flex-col gap-4 px-6 py-4">
              {['Про мене', 'Освіта', 'Компетентності', 'Навички', 'Контакти'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(['hero', 'education', 'competencies', 'skills', 'contact'][idx])}
                  className="text-left hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <ChevronDown className="rotate-270" size={16} />
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-xl animate-pulse"></div>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1 relative transform hover:scale-110 transition-transform duration-500">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Brain size={80} className="text-purple-400 animate-float" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Вікторія Носків
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-pink-400 animate-pulse" size={28} />
            <p className="text-2xl md:text-3xl text-purple-300">
              Психолог | Консультант
            </p>
            <Sparkles className="text-yellow-400 animate-pulse" size={28} />
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Магістр клінічної та реабілітаційної психології. Сертифікований консультант в методі позитивної психотерапії. 
            Спеціалізуюсь на стресостійкості, психосоматиці та розвитку ментального здоров'я.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="mailto:viktoriia.noskiv@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              <Mail size={20} />
              Написати
            </a>
            <a href="tel:0989425285" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50">
              <Phone size={20} />
              Зателефонувати
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('education')}
            className="animate-bounce hover:scale-110 transition-transform"
          >
            <ChevronDown size={40} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-12 animate-slide-right">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transform hover:rotate-12 transition-transform">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Освіта
            </h2>
          </div>

          <div className="grid gap-6">
            {education.map((item, idx) => (
              <div 
                key={idx}
                className={`animate-on-scroll bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${visibleCards.has(idx) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform">
                    <item.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-purple-300 flex items-center gap-2">
                      {item.degree}
                      <Sparkles size={16} className="text-yellow-400" />
                    </h3>
                    <p className="text-gray-300 mb-1">{item.institution}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section id="competencies" className="min-h-screen flex items-center px-6 py-20 bg-slate-900/30 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-12 animate-slide-left">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center transform hover:rotate-12 transition-transform">
              <Star size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Професійні Компетентності
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
              <Target className="text-purple-400" size={28} />
              Авторські тренінги
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {trainings.map((training, idx) => (
                <div 
                  key={idx}
                  className={`animate-on-scroll group bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${visibleCards.has(idx + 10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${training.color} flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all`}>
                      <training.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-purple-400 font-bold">{idx + 1}.</span>
                        <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors">{training.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-300 flex items-center gap-2">
              <BookOpen className="text-pink-400" size={28} />
              Пройдені курси
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {courses.map((course, idx) => (
                <div 
                  key={idx}
                  className={`animate-on-scroll group bg-slate-800/50 backdrop-blur-lg rounded-xl p-5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer ${visibleCards.has(idx + 20) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 transition-transform">
                      <course.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-200 font-medium group-hover:text-white transition-colors mb-1">{course.title}</p>
                      <p className="text-xs text-pink-400 mb-1">{course.org}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        {course.duration && (
                          <>
                            <span>⏱️ {course.duration}</span>
                            <span>•</span>
                          </>
                        )}
                        <span>📅 {course.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-12 animate-slide-right">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transform hover:rotate-12 transition-transform">
              <TrendingUp size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Навички та Досвід
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
                <Brain className="text-purple-400 animate-pulse" size={28} />
                Ключові навички
              </h3>
              {skills.map((skill, idx) => (
                <div key={idx} className="mb-6 group">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon size={20} className={`text-${skill.color}-400`} />
                      <span className="text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                    <span className="text-purple-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-${skill.color}-500 to-pink-500 rounded-full transition-all duration-1000 transform group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-pink-300 flex items-center gap-2">
                <Briefcase className="text-pink-400" size={28} />
                Досвід роботи
              </h3>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-purple-300 flex items-center gap-2">
                      Медична сестра
                      <CheckCircle2 size={20} className="text-green-400" />
                    </h4>
                    <p className="text-gray-300 mb-2">КНП ОКЛ ІФ ОР</p>
                    <p className="text-sm text-gray-400 mb-3">01.08.2012 – Грудень 2025</p>
                    <div className="flex items-center gap-2 text-purple-400">
                      <Star size={16} />
                      <p className="text-sm">13+ років досвіду в медичній сфері</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <Globe size={24} className="text-purple-400" />
                  <h4 className="text-xl font-semibold text-purple-300">Іноземні мови</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    <p className="text-gray-200">
                      <span className="text-purple-400 font-semibold">Англійська:</span> B1+ (Intermediate)
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 ml-6">📚 SmartWay English School (2019-2021)</p>
                  <p className="text-xs text-gray-500 ml-6">English File від Oxford University Press</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20 bg-slate-900/30 relative">
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <div className="mb-8">
            <MessageCircle size={60} className="mx-auto text-purple-400 animate-bounce mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Зв'яжіться зі мною
            </h2>
            <p className="text-xl text-gray-300">
              Готова відповісти на ваші запитання та обговорити можливості співпраці
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <a 
              href="mailto:viktoriia.noskiv@gmail.com"
              className="group bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <Mail size={40} className="mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-sm text-purple-200 break-all">viktoriia.noskiv@gmail.com</p>
            </a>

            <a 
              href="tel:0989425285"
              className="group bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              <Phone size={40} className="mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-sm text-pink-200">098 942 52 85</p>
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Heart className="text-pink-400 animate-pulse" size={24} />
            <Brain className="text-purple-400 animate-pulse" size={24} />
            <Sparkles className="text-yellow-400 animate-pulse" size={24} />
          </div>

          <div className="text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <span>© 2025 Вікторія Носків</span>
              <Smile size={16} className="text-purple-400" />
              <span>Всі права захищені</span>
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slide-down {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-right {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-left {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        .animate-slide-right { animation: slide-right 0.6s ease-out; }
        .animate-slide-left { animation: slide-left 0.6s ease-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
}
