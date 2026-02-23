import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页', color: 'bg-blue-500' },
    { path: '/about', label: '关于课程', color: 'bg-purple-500' },
    { path: '/curriculum', label: '课程大纲', color: 'bg-indigo-500' },
    { path: '/faculty', label: '师资团队', color: 'bg-violet-500' },
    { path: '/resources', label: '学习资源', color: 'bg-cyan-500' },
    { path: '/gallery', label: '作品展示', color: 'bg-pink-500' },
    { path: '/contact', label: '联系我们', color: 'bg-emerald-500' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
            跨媒介数字展演创作
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path
                    ? `${item.color} text-white shadow-lg`
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              立即报名
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? `${item.color} text-white`
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 rounded-lg">
                立即报名
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

