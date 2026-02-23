import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 课程信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">课程信息</h3>
            <ul className="space-y-2 text-white/80">
              <li>开课时间：2025年</li>
              <li>课程时长：16周</li>
              <li>招生人数：限20人</li>
              <li>授课语言：中文</li>
            </ul>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  关于课程
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="text-white/80 hover:text-white transition-colors">
                  课程大纲
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-white/80 hover:text-white transition-colors">
                  师资团队
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-white transition-colors">
                  学习资源
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">联系方式</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>tot@alexzhenwu.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+86 13810745684</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>澳门科技大学</span>
              </li>
            </ul>
          </div>

          {/* 合作伙伴 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">合作伙伴</h3>
            <ul className="space-y-2 text-white/80">
              <li>Theater for Tomorrow</li>
              <li>澳门科技大学</li>
              <li>数字艺术研究中心</li>
            </ul>
            
            {/* 社交媒体 */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-white/60">关注我们</h4>
              <div className="flex space-x-3">
                <a href="https://github.com/wuzhenhuo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.instagram.com/theateroftomorrow/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://x.com/WZhenhuo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 跨媒介数字展演创作课程. 保留所有权利.</p>
          <p className="mt-2 text-sm">
            由 Theater for Tomorrow 团队制作和支持
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

