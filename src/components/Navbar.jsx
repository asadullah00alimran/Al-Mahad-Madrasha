import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Users, GraduationCap, MapPin, Phone, Mail, Clock, Award, Heart, Star, ChevronDown, Menu, X } from 'lucide-react';


const Navbar = () => {

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
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');`}
            </style>
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
        </>


    );
};

export default Navbar;