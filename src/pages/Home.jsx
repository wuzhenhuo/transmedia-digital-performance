import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ImageGallery from '../components/ImageGallery';
import { 
  Sparkles, 
  Brain, 
  Zap, 
  Globe, 
  Users, 
  Calendar,
  Clock,
  GraduationCap,
  ArrowRight,
  Play,
  Download
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "跨学科融合",
      description: "视觉艺术、戏剧、音乐、计算机科学的完美结合，培养复合型数字艺术人才",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "前沿技术应用",
      description: "VR/AR、AI、元宇宙等最新技术，与国际先进平台合作",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "理论实践并重",
      description: "深入的理论分析框架，丰富的实践创作机会",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "国际化视野",
      description: "国际知名师资团队，全球优秀案例研究",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const modules = [
    {
      title: "数字表演基础",
      description: "表演艺术史与数字革命的理论基础",
      icon: "🎭"
    },
    {
      title: "身体与技术",
      description: "探索物理身体与数字技术的融合",
      icon: "🤖"
    },
    {
      title: "虚拟与增强现实",
      description: "VR/AR技术在表演中的创新应用",
      icon: "🥽"
    },
    {
      title: "元宇宙与舞蹈",
      description: "虚拟空间中的表演创作与实践",
      icon: "🌐"
    },
    {
      title: "人工智能与舞蹈",
      description: "AI技术在创作中的方法与应用",
      icon: "🧠"
    },
    {
      title: "AIGC设计应用",
      description: "从视觉产品到元宇宙展览的设计",
      icon: "✨"
    }
  ];

  const stats = [
    { icon: <Calendar className="w-6 h-6" />, label: "开课时间", value: "2025年" },
    { icon: <Clock className="w-6 h-6" />, label: "课程时长", value: "16周" },
    { icon: <Users className="w-6 h-6" />, label: "招生人数", value: "限20人" },
    { icon: <GraduationCap className="w-6 h-6" />, label: "课程级别", value: "研究生" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              跨媒介
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                数字展演
              </span>
              创作
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              探索数字技术、艺术与表演的交汇点，培养未来的跨媒介创作者
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-white font-semibold">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <Play className="w-5 h-5 mr-2" />
                立即报名
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                下载课程大纲
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              课程特色
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              融合前沿技术与艺术创作，打造独特的跨媒介学习体验
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <ImageGallery />
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              课程模块
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              六大核心模块，系统性学习跨媒介数字展演的理论与实践
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 h-full group">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{module.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      {module.description}
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">了解更多</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              查看完整课程大纲
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              准备好开始你的创作之旅了吗？
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              加入我们，探索数字时代表演艺术的无限可能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                立即申请
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                了解更多信息
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

