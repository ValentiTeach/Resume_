import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Award, Briefcase, GraduationCap, Globe, Star, ChevronDown, Menu, X, Brain, Heart, Users, Shield, Lightbulb, Smile, Target, Sparkles, BookOpen, MessageCircle, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

export default function InteractiveResume() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    // Intersection Observer для анімацій при скролі
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
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
    },
    {
      degree: "Молодший спеціаліст з обслуговування в готелях і туристичних комплексах",
      institution: "Івано-Франківський фаховий коледж технологій і бізнесу",
      date: "01.03.2007",
      icon: Globe
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
      className="absolute opacity-10 floating-icon"
      style={{ 
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    >
      <Icon size={size} />
    </div>
  );

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes rotateIn {
          from { transform: rotate(-10deg) scale(0.8); opacity: 0; }
          to { transform: rotate(0) scale(1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
        
        /* Mobile-friendly touch interactions */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: rgba(168, 85, 247, 0.2);
          }
          
          .hover-lift:active {
            transform: scale(0.98);
          }
          
          .card-3d:active {
            transform: scale(0.98);
          }
        }
        
        /* Smooth scrolling for all devices */
        html {
          scroll-behavior: smooth;
        }
        
        .floating-icon {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-rotate-in {
          animation: rotateIn 0.8s ease-out forwards;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @media (min-width: 768px) {
          .card-3d:hover {
            transform: perspective(1000px) rotateY(5deg) translateY(-10px);
          }
        }
        
        .skill-bar {
          position: relative;
          overflow: hidden;
        }
        
        .skill-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
        
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @media (min-width: 768px) {
          .hover-lift:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 20px 40px rgba(168, 85, 247, 0.4);
          }
        }
        
        .stagger-animation > * {
          opacity: 0;
        }
        
        .stagger-animation.visible > *:nth-child(1) { animation: slideInUp 0.6s ease-out 0.1s forwards; }
        .stagger-animation.visible > *:nth-child(2) { animation: slideInUp 0.6s ease-out 0.2s forwards; }
        .stagger-animation.visible > *:nth-child(3) { animation: slideInUp 0.6s ease-out 0.3s forwards; }
        .stagger-animation.visible > *:nth-child(4) { animation: slideInUp 0.6s ease-out 0.4s forwards; }
        .stagger-animation.visible > *:nth-child(5) { animation: slideInUp 0.6s ease-out 0.5s forwards; }
        .stagger-animation.visible > *:nth-child(6) { animation: slideInUp 0.6s ease-out 0.6s forwards; }
        .stagger-animation.visible > *:nth-child(7) { animation: slideInUp 0.6s ease-out 0.7s forwards; }
        
        .parallax {
          transition: transform 0.5s ease-out;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none hidden sm:block">
        <FloatingIcon Icon={Brain} delay={0} size={60} />
        <FloatingIcon Icon={Heart} delay={1} size={50} />
        <FloatingIcon Icon={Sparkles} delay={2} size={40} />
        <FloatingIcon Icon={Users} delay={3} size={55} />
        <FloatingIcon Icon={Lightbulb} delay={4} size={45} />
        <FloatingIcon Icon={Smile} delay={5} size={50} />
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none transition-all duration-500 ease-out hidden sm:block"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 overflow-hidden">
              <img 
                src="/photo/MainPhoto.jpg" 
                alt="ВН" 
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-lg sm:text-xl" style={{ display: 'none' }}>
                ВН
              </div>
            </div>
            <Brain className="text-purple-400 group-hover:animate-pulse" size={20} />
          </div>
          
          <div className="hidden md:flex gap-6 lg:gap-8">
            {['Про мене', 'Освіта', 'Компетентності', 'Навички', 'Контакти'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(['hero', 'education', 'competencies', 'skills', 'contact'][idx])}
                className="relative text-sm lg:text-base hover:text-purple-400 transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden group p-2 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300" /> : 
              <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
            }
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg animate-slide-in-up border-t border-purple-500/20">
            <div className="flex flex-col gap-1 px-4 py-3">
              {['Про мене', 'Освіта', 'Компетентності', 'Навички', 'Контакти'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(['hero', 'education', 'competencies', 'skills', 'contact'][idx])}
                  className="text-left hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 py-3 px-3 rounded-lg"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <ChevronDown className="-rotate-90" size={16} />
                  <span className="text-base">{item}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8 relative inline-block animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-xl animate-pulse"></div>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1 relative hover:scale-110 transition-all duration-700 pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <img 
                  src="/photo/MainPhoto.jpg" 
                  alt="Вікторія Носків" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                  <Brain size={80} className="text-purple-400 floating-icon" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Вікторія Носків
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <Heart className="text-pink-400 animate-pulse" size={28} />
            <p className="text-2xl md:text-3xl text-purple-300">
              Психолог | Консультант
            </p>
            <Sparkles className="text-yellow-400 animate-pulse" size={28} />
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Магістр клінічної та реабілітаційної психології. Сертифікований консультант в методі позитивної психотерапії. 
            Спеціалізуюсь на стресостійкості, психосоматиці та розвитку ментального здоров'я.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="mailto:viktoriia.noskiv@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <Mail size={20} />
              Написати
            </a>
            <a href="tel:0989425285" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50">
              <Phone size={20} />
              Зателефонувати
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('education')}
            className="hover:scale-125 transition-all duration-500 floating-icon"
          >
            <ChevronDown size={40} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* Education Section */}
      <section 
        id="education" 
        ref={(el) => (sectionRefs.current.education = el)}
        className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20 relative"
      >
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className={`flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 ${isVisible('education') ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:rotate-180 transition-transform duration-700">
              <GraduationCap size={24} className="sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Освіта
            </h2>
          </div>

          <div className={`grid gap-4 sm:gap-6 stagger-animation ${isVisible('education') ? 'visible' : ''}`}>
            {education.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-700 hover-lift card-3d"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 hover:rotate-12 hover:scale-110 transition-all duration-500">
                    <item.icon size={20} className="sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-purple-300 flex items-center gap-2 flex-wrap">
                      <span className="break-words">{item.degree}</span>
                      <Sparkles size={14} className="sm:w-4 sm:h-4 text-yellow-400 animate-pulse flex-shrink-0" />
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-1">{item.institution}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section 
        id="competencies" 
        ref={(el) => (sectionRefs.current.competencies = el)}
        className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20 bg-slate-900/30 relative"
      >
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className={`flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 ${isVisible('competencies') ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center hover:rotate-180 transition-transform duration-700">
              <Star size={24} className="sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Професійні Компетентності
            </h2>
          </div>

          <div className="mb-8 sm:mb-12">
            <h3 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-300 flex items-center gap-2 ${isVisible('competencies') ? 'animate-fade-in' : 'opacity-0'}`}>
              <Target className="text-purple-400" size={24} />
              <span>Авторські тренінги</span>
            </h3>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 stagger-animation ${isVisible('competencies') ? 'visible' : ''}`}>
              {trainings.map((training, idx) => (
                <div 
                  key={idx}
                  className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-700 hover-lift cursor-pointer relative overflow-hidden"
                >
                  <div className="shimmer-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${training.color} flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500`}>
                      <training.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-purple-400 font-bold text-sm sm:text-base">{idx + 1}.</span>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">{training.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-pink-300 flex items-center gap-2 ${isVisible('competencies') ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <BookOpen className="text-pink-400" size={24} />
              <span>Пройдені курси</span>
            </h3>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 stagger-animation ${isVisible('competencies') ? 'visible' : ''}`}>
              {courses.map((course, idx) => (
                <div 
                  key={idx}
                  className="group bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 sm:p-5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-700 hover-lift cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                      <course.icon size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base text-gray-200 font-medium group-hover:text-white transition-colors duration-300 mb-1">{course.title}</p>
                      <p className="text-xs text-pink-400 mb-1">{course.org}</p>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
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
      <section 
        id="skills" 
        ref={(el) => (sectionRefs.current.skills = el)}
        className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20 relative"
      >
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className={`flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 ${isVisible('skills') ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center hover:rotate-180 transition-transform duration-700">
              <TrendingUp size={24} className="sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Навички та Досвід
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className={isVisible('skills') ? 'animate-slide-in-left' : 'opacity-0'}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-300 flex items-center gap-2">
                <Brain className="text-purple-400 animate-pulse" size={24} />
                <span>Ключові навички</span>
              </h3>
              {skills.map((skill, idx) => (
                <div key={idx} className="mb-5 sm:mb-6 group">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon size={18} className={`sm:w-5 sm:h-5 text-${skill.color}-400 group-hover:animate-bounce`} />
                      <span className="text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                    </div>
                    <span className="text-sm sm:text-base text-purple-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-${skill.color}-500 to-pink-500 rounded-full transition-all duration-2000 skill-bar`}
                      style={{ 
                        width: isVisible('skills') ? `${skill.level}%` : '0%',
                        transitionDelay: `${idx * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`space-y-4 sm:space-y-6 ${isVisible('skills') ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-pink-300 flex items-center gap-2">
                  <Briefcase className="text-pink-400" size={24} />
                  <span>Досвід роботи</span>
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-700 hover-lift">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 hover:rotate-12 hover:scale-110 transition-all duration-500">
                      <Briefcase size={20} className="sm:w-7 sm:h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-purple-300 flex items-center gap-2 flex-wrap">
                        <span>Медична сестра</span>
                        <CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">КНП ОКЛ ІФ ОР</p>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">01.08.2012 – Грудень 2025</p>
                      <div className="flex items-center gap-2 text-purple-400">
                        <Star size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <p className="text-xs sm:text-sm">13+ років досвіду в медичній сфері</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-700 hover-lift">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Globe size={20} className="sm:w-6 sm:h-6 text-purple-400" />
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-300">Іноземні мови</h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-500/20">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs sm:text-sm font-bold">B1+</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base text-gray-200 font-semibold">
                          <span className="text-blue-400">Англійська:</span> B1+ (Intermediate)
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Червень 2021 - Жовтень 2021</p>
                      </div>
                    </div>
                    <div className="ml-9 sm:ml-11">
                      <p className="text-xs sm:text-sm text-gray-400">📚 SmartWay English School</p>
                      <p className="text-xs text-gray-500">English File від Oxford University Press</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-500/20">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs sm:text-sm font-bold">B1</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base text-gray-200 font-semibold">
                          <span className="text-purple-400">Англійська:</span> B1 (Pre-Intermediate)
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Жовтень 2019 - Червень 2020</p>
                      </div>
                    </div>
                    <div className="ml-9 sm:ml-11">
                      <p className="text-xs sm:text-sm text-gray-400">📚 SmartWay English School</p>
                      <p className="text-xs text-gray-500">English File від Oxford University Press</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={(el) => (sectionRefs.current.contact = el)}
        className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20 bg-slate-900/30 relative"
      >
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <div className={`mb-6 sm:mb-8 ${isVisible('contact') ? 'animate-scale-in' : 'opacity-0'}`}>
            <MessageCircle size={48} className="sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto text-purple-400 mb-3 sm:mb-4 floating-icon" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent px-2">
              Зв'яжіться зі мною
            </h2>
            <p className="text-base sm:text-xl text-gray-300 px-4">
              Готова відповісти на ваші запитання та обговорити можливості співпраці
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-6 sm:mb-8 px-2 ${isVisible('contact') ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <a 
              href="mailto:viktoriia.noskiv@gmail.com"
              className="group bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:scale-105 sm:hover:scale-110 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/50 card-3d"
            >
              <Mail size={32} className="sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Email</h3>
              <p className="text-xs sm:text-sm text-purple-200 break-all px-2">viktoriia.noskiv@gmail.com</p>
            </a>

            <a 
              href="tel:0989425285"
              className="group bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:scale-105 sm:hover:scale-110 transition-all duration-700 hover:shadow-2xl hover:shadow-pink-500/50 card-3d"
            >
              <Phone size={32} className="sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-sm text-pink-200">098 942 52 85</p>
            </a>
          </div>

          <div className={`flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 ${isVisible('contact') ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <Heart className="text-pink-400 animate-pulse" size={20} />
            <Brain className="text-purple-400 animate-pulse" size={20} />
            <Sparkles className="text-yellow-400 animate-pulse" size={20} />
          </div>

          <div className={`text-gray-400 text-sm sm:text-base px-4 ${isVisible('contact') ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>© 2025 Вікторія Носків</span>
              <Smile size={14} className="sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
              <span>Всі права захищені</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
