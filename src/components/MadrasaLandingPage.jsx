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
                    'সভাপতির বাণী',
                    'প্রতিষ্ঠাতা',
                    'মাদ্রাসার সাফল্য',
                    'শিক্ষক মন্ডলী',
                    'পরিচালনা পর্ষদ'
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
                <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 shadow-2xl">
                  <div className="text-white text-center">
                    <BookOpen size={120} className="mx-auto mb-6 opacity-90" />
                    <h3 className="text-3xl font-bold mb-4">ইলম অর্জন করুন</h3>
                    <p className="text-emerald-50 text-lg">
                      "যে ব্যক্তি ইলম অর্জনের পথে চলে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন।"
                    </p>
                    <p className="text-emerald-100 mt-3 text-sm">- সহীহ মুসলিম</p>
                  </div>
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