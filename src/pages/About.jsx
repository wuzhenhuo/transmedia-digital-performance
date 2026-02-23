import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Zap,
  Brain,
  Palette,
  Code,
  Globe
} from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "理论基础掌握",
      description: "深入理解跨媒介数字表演的理论框架和历史发展"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "技术应用能力",
      description: "熟练运用VR/AR、AI等前沿技术进行创作实践"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "创新思维培养",
      description: "具备独立创作数字表演作品的创新能力"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "批判性思维",
      description: "培养对数字表演的批判分析和理论思考能力"
    }
  ];

  const approaches = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "跨学科方法",
      description: "融合视觉艺术、戏剧、音乐、计算机科学和媒体研究，创造创新的表演体验",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "技术整合",
      description: "探索数字工具、虚拟现实、增强现实和交互媒体如何增强和转化传统表演实践",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "批判分析",
      description: "发展跨文化和历史背景下分析和批评数字表演的框架",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "实践创作",
      description: "使用当代数字工具和平台设计和实施跨媒体表演的实践经验",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              关于
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                课程
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              本课程探索数字表演在多媒体平台上的演进景观。学生将接触理论框架和数字技术在表演艺术中的实际应用，培养面向未来的跨媒介创作能力。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                课程介绍
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  《跨媒介数字展演创作》是一门创新的研究生课程，专注于探索数字技术与表演艺术的深度融合。课程将理论学习与实践创作相结合，为学生提供全面的跨媒介创作体验。
                </p>
                <p>
                  在这个数字化时代，传统的表演艺术正在经历前所未有的变革。虚拟现实、增强现实、人工智能等新兴技术为表演艺术开辟了全新的可能性。本课程旨在培养能够在这个变革时代中引领创新的艺术家和创作者。
                </p>
                <p>
                  通过16周的深入学习，学生将掌握从概念设计到技术实现的完整创作流程，具备在数字时代进行跨媒介表演创作的专业能力。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">课程亮点</h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>国际前沿的课程内容设计</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>理论与实践深度结合</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>小班制精英教学模式</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>顶尖师资和业界导师</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>最新技术工具和平台</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
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
              学习目标
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              通过本课程的学习，学生将获得以下核心能力
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-4 text-white">
                      {objective.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Approaches */}
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
              教学方法
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              多元化的教学方法，确保学生获得全面而深入的学习体验
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${approach.color} mb-6 text-white`}>
                      {approach.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {approach.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {approach.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-8 h-8 mr-3 text-cyan-400" />
                  支持机构
                </h3>
                <div className="space-y-4 text-white/80">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="font-semibold">Theater for Tomorrow</span>
                  </div>
                  <p className="text-sm leading-relaxed ml-6">
                    Theater for Tomorrow 将现代技术与剧院相结合，包括Avatar、表演、动作捕捉(Mocap)和空间元素。该平台围绕八个关键模块构建：人类、文化和艺术、交互、网络、图形和AI。
                  </p>
                  
                  <div className="flex items-center space-x-3 mt-6">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="font-semibold">澳门科技大学</span>
                  </div>
                  <p className="text-sm leading-relaxed ml-6">
                    提供学术支持和研究平台，确保课程的学术严谨性和国际化水准。
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                为什么选择我们？
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  我们的课程不仅仅是技术的学习，更是对未来艺术形态的探索。在这里，你将接触到最前沿的创作理念和技术工具，与来自不同背景的同学共同创作，在导师的指导下完成具有创新性的作品。
                </p>
                <p>
                  课程设计充分考虑了数字艺术领域的快速发展，确保学生掌握的不仅是当前的技术，更是面向未来的思维方式和创作方法。
                </p>
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">课程承诺</h4>
                  <p className="text-white/80 text-sm">
                    我们承诺为每位学生提供个性化的指导和支持，确保每个人都能在课程中找到自己的创作方向，并具备在数字艺术领域持续发展的能力。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

