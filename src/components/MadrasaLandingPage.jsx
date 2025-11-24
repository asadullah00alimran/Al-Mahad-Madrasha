import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Users, GraduationCap, MapPin, Phone, Mail, Clock, Award, Heart, Star, ChevronDown, Menu, X } from 'lucide-react';

// Header Component
function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-3 rounded-xl shadow-lg">
              <BookOpen className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">আল মাহাদ আদ্বদিনী</h1>
              <p className="text-sm text-emerald-600">সালাফি কওমী মাদ্রাসা</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <button className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer">
              প্রচ্ছদ
            </button>

            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 cursor-pointer"
              >
                <span>আমাদের সম্পর্কে</span>
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-emerald-100 py-2 animate-fadeInUp">
                  {[
                    'মাদ্রাসার ইতিহাস',
                    'সাফল্য',
                    'প্রতিষ্ঠা',
                    'বাণী',
                    'শিক্ষক মন্ডলী',
                    'পরিচালনা পরিষদ'
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer">
              নোটিশ
            </button>

            <button className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer">
              শাখা সমূহ
            </button>

            <button className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer">
              প্রকাশনা
            </button>

            <button className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer">
              গ্যালারি
            </button>

            <button className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer">
              ইভেন্ট
            </button>

            <button className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer">
              যোগাযোগ
            </button>

            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all ml-4 cursor-pointer">
              ভর্তি আবেদন
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-emerald-600 p-2 cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-emerald-100 animate-fadeInUp">
            <div className="flex flex-col space-y-2">
              <button className="text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer">
                প্রচ্ছদ
              </button>

              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>আমাদের সম্পর্কে</span>
                  <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {[
                      'মাদ্রাসার ইতিহাস',
                      'সাফল্য',
                      'প্রতিষ্ঠা',
                      'বাণী',
                      'শিক্ষক মন্ডলী',
                      'পরিচালনা পরিষদ'
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all cursor-pointer"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer">
                নোটিশ
              </button>

              <button className="text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer">
                শাখা সমূহ
              </button>

              <button className="text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer">
                প্রকাশনা
              </button>

              <button className="text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer">
                গ্যালারি
              </button>

              <button className="text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer">
                ইভেন্ট
              </button>

              <button className="text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer">
                যোগাযোগ
              </button>

              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all mt-2 cursor-pointer">
                ভর্তি আবেদন
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function MadrasaLandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentHadith, setCurrentHadith] = useState(0);

  const hadiths = [
    {
      text: "যে ব্যক্তি ইলম অর্জনের পথে চলে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন।",
      source: "সহীহ মুসলিম",
      icon: BookOpen
    },
    {
      text: "তোমরা দোলনা থেকে কবর পর্যন্ত জ্ঞান অর্জন কর।",
      source: "হাদীস শরীফ",
      icon: GraduationCap
    },
    {
      text: "জ্ঞানীদের কালি শহীদদের রক্তের চেয়ে পবিত্র।",
      source: "হাদীস শরীফ",
      icon: Award
    },
    {
      text: "যে ব্যক্তি মানুষকে কল্যাণের পথ দেখায়, সে ঐ কাজের সমান সওয়াব পায়।",
      source: "সহীহ মুসলিম",
      icon: Heart
    },
    {
      text: "উত্তম মানুষ তারা যারা কুরআন শিখে এবং অন্যকে শেখায়।",
      source: "সহীহ বুখারী",
      icon: Star
    }
  ];

  // Auto change hadith every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHadith((prev) => (prev + 1) % hadiths.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const courses = [
    { title: 'হিফজুল কুরআন', desc: 'পবিত্র কুরআন মুখস্থকরণ কোর্স', icon: BookOpen },
    { title: 'তাজবীদ ও কিরাআত', desc: 'সহীহ উচ্চারণে কুরআন শিক্ষা', icon: Star },
    { title: 'আরবি ভাষা', desc: 'আরবি ভাষায় দক্ষতা অর্জন', icon: GraduationCap },
    { title: 'হাদীস ও ফিকহ', desc: 'ইসলামিক শরীয়াহ শিক্ষা', icon: BookOpen },
  ];

  const features = [
    { title: 'অভিজ্ঞ শিক্ষকমণ্ডলী', desc: 'উচ্চশিক্ষিত ও অভিজ্ঞ উস্তাদগণ', icon: Users },
    { title: 'আধুনিক সুবিধা', desc: 'সুসজ্জিত ক্লাসরুম ও লাইব্রেরি', icon: Award },
    { title: 'বিনামূল্যে শিক্ষা', desc: 'দরিদ্র শিক্ষার্থীদের জন্য বিশেষ ব্যবস্থা', icon: Heart },
    { title: 'আবাসিক সুবিধা', desc: 'নিরাপদ ও পরিচ্ছন্ন আবাসন', icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .islamic-pattern {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.05) 0%, transparent 50%);
        }
      `}</style>

      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden islamic-pattern py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6 shadow-md">
                <span className="text-sm font-semibold">বিসমিল্লাহির রাহমানির রাহীম</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                আল মাহাদ আদ্বদিনী <br />
                <span className="text-emerald-600">সালাফি কওমী মাদ্রাসা</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                কুরআন ও সুন্নাহর আলোকে দ্বীনি ইলম অর্জনের এক আদর্শ প্রতিষ্ঠান।
                সালাফে সালেহীনের মানহাজে পরিচালিত শিক্ষা ব্যবস্থা।
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                  ভর্তি তথ্য
                </button>
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl border-2 border-emerald-600 transform hover:-translate-y-1 transition-all">
                  আমাদের সম্পর্কে
                </button>
              </div>
            </div>

            <div className="animate-float hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 shadow-2xl overflow-hidden min-h-[450px] flex items-center">
                  {/* Hadith Slider */}
                  <div className="text-white text-center relative w-full">
                    {hadiths.map((hadith, index) => {
                      const Icon = hadith.icon;
                      return (
                        <div
                          key={index}
                          className={`transition-all duration-700 ${index === currentHadith
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 absolute inset-0 translate-x-full'
                            }`}
                        >
                          <Icon size={120} className="mx-auto mb-6 opacity-90" />
                          <h3 className="text-3xl font-bold mb-4">ইলম অর্জন করুন</h3>
                          <p className="text-emerald-50 text-lg leading-relaxed px-4 min-h-[120px] flex items-center justify-center">
                            "{hadith.text}"
                          </p>
                          <p className="text-emerald-100 mt-3 text-sm">- {hadith.source}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center space-x-2 mt-8 absolute bottom-6 left-1/2 -translate-x-1/2">
                    {hadiths.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentHadith(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentHadith
                          ? 'bg-white w-8'
                          : 'bg-emerald-300 hover:bg-emerald-200'
                          }`}
                        aria-label={`Hadith ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentHadith((prev) => (prev - 1 + hadiths.length) % hadiths.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all cursor-pointer"
                    aria-label="Previous hadith"
                  >
                    <ChevronDown size={24} className="rotate-90" />
                  </button>

                  <button
                    onClick={() => setCurrentHadith((prev) => (prev + 1) % hadiths.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all cursor-pointer"
                    aria-label="Next hadith"
                  >
                    <ChevronDown size={24} className="-rotate-90" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Chairman Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-600 mb-4">আমাদের সম্পর্কে</h2>
            <p className="text-xl text-gray-600">মাদ্রাসার প্রতিষ্ঠাতা ও সভাপতির বাণী</p>
          </div>

          {/* about section */}
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <div className="mb-6 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=400&fit=crop"
                alt="মাদ্রাসা"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                আল মাহাদ আদ্বদিনী সালাফি কওমী মাদ্রাসা একটি ইসলামী শিক্ষা প্রতিষ্ঠান যা কুরআন ও সুন্নাহর
                আলোকে সালাফে সালেহীনের মানহাজে পরিচালিত হয়। আমাদের লক্ষ্য হলো শিক্ষার্থীদের সঠিক ইসলামী
                জ্ঞান প্রদান করা এবং তাদের চরিত্র গঠনে সহায়তা করা।
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg line-clamp-3">
                আমরা হিফজুল কুরআন, তাজবীদ, হাদীস, ফিকহ, আরবি ভাষা সহ বিভিন্ন ইসলামী বিষয়ে শিক্ষা প্রদান করি।
                আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী এবং আধুনিক সুবিধা দিয়ে সজ্জিত ক্যাম্পাস শিক্ষার্থীদের জন্য একটি
                আদর্শ শিক্ষার পরিবেশ নিশ্চিত করে...
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg flex items-center space-x-2 cursor-pointer group">
                <span>বিস্তারিত পড়ুন</span>
                <ChevronDown className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Chairman Message */}

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-emerald-100">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      src="https://via.placeholder.com/150/10b981/ffffff?text=Chairman"
                      alt="সভাপতি"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">সভাপতির বাণী</h3>
                  <p className="text-emerald-600 font-medium mb-4">মাওলানা আব্দুল্লাহ আল মাহমুদ</p>
                  <p className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
                    বিসমিল্লাহির রাহমানির রাহীম। আল্লাহর অশেষ রহমতে আমাদের এই মাদ্রাসা প্রতিষ্ঠার পর থেকে কুরআন ও সুন্নাহর আলোকে
                    হাজারো শিক্ষার্থীকে দ্বীনি ইলম শিক্ষা দিয়ে আসছে। আমরা সালাফে সালেহীনের মানহাজে চলে ইসলামী শিক্ষা প্রদান করি।
                    আমাদের লক্ষ্য হলো এমন আলেম তৈরি করা যারা দ্বীনের সঠিক জ্ঞান অর্জন করে সমাজে ইসলামের দাওয়াত পৌঁছে দিতে পারবে...
                  </p>
                  <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2 cursor-pointer group">
                    <span>আরও পড়ুন</span>
                    <ChevronDown className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - President Message */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-teal-100">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      src="https://via.placeholder.com/150/14b8a6/ffffff?text=President"
                      alt="অধ্যক্ষ"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">অধ্যক্ষের বাণী</h3>
                  <p className="text-teal-600 font-medium mb-4">মাওলানা মুহাম্মদ ইবরাহীম</p>
                  <p className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
                    আল-হামদুলিল্লাহ। আমাদের মাদ্রাসায় অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলীর মাধ্যমে শিক্ষার্থীদের কুরআন, হাদীস, ফিকহ, আরবি ভাষা
                    এবং অন্যান্য ইসলামী বিষয়ে পারদর্শী করে তোলা হয়। আমরা শুধু বই পড়াই না, বরং শিক্ষার্থীদের চরিত্র গঠন এবং
                    ইসলামী মূল্যবোধ শেখানোর উপর বিশেষ গুরুত্ব দিই। আমাদের লক্ষ্য হলো এমন মানুষ তৈরি করা যারা দুনিয়া ও আখিরাতে সফল...
                  </p>
                  <button className="text-teal-600 hover:text-teal-700 font-semibold flex items-center space-x-2 cursor-pointer group">
                    <span>আরও পড়ুন</span>
                    <ChevronDown className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'শিক্ষার্থী' },
              { num: '25+', label: 'শিক্ষক' },
              { num: '15+', label: 'বছরের অভিজ্ঞতা' },
              { num: '10+', label: 'কোর্স' },
            ].map((stat, idx) => (
              <div key={idx} className="transform hover:scale-110 transition-transform">
                <div className="text-5xl font-bold text-white mb-2">{stat.num}</div>
                <div className="text-emerald-100 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">আমাদের কোর্সসমূহ</h2>
            <p className="text-xl text-gray-600">মানসম্মত দ্বীনি শিক্ষা ব্যবস্থা</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border-2 border-transparent hover:border-emerald-400">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{course.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">আমাদের বিশেষত্ব</h2>
            <p className="text-xl text-gray-600">কেন আমাদের মাদ্রাসা বেছে নেবেন?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all text-center">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Icon className="text-emerald-600" size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">যোগাযোগ করুন</h2>
              <p className="text-emerald-100 text-lg mb-8">
                ভর্তি সংক্রান্ত তথ্য অথবা যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন।
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-emerald-300 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">ঠিকানা</h3>
                    <p className="text-emerald-100">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-emerald-300 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">ফোন</h3>
                    <p className="text-emerald-100">+880 1XXX-XXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-emerald-300 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">ইমেইল</h3>
                    <p className="text-emerald-100">info@almahadmadrasa.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-emerald-300 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">সময়সূচী</h3>
                    <p className="text-emerald-100">শনি - বৃহস্পতি: সকাল ৮টা - বিকাল ৫টা</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">বার্তা পাঠান</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="আপনার নাম"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="ইমেইল ঠিকানা"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="মোবাইল নম্বর"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="আপনার বার্তা লিখুন"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                ></textarea>
                <button onClick={() => alert('ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।')} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  বার্তা পাঠান
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">আল মাহাদ আদ্বদিনী সালাফি কওমী মাদ্রাসা</h3>
            <p className="text-gray-400 mb-6">কুরআন ও সুন্নাহর আলোকে দ্বীনি শিক্ষা</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">ফেসবুক</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">ইউটিউব</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">টুইটার</a>
            </div>
            <p className="text-gray-500 text-sm">© ২০২৫ আল মাহাদ আদ্বদিনী মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}