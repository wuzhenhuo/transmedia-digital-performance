import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  ExternalLink,
  Palette,
  Video,
  Image,
  Sparkles,
  Globe,
  Wrench
} from 'lucide-react';

const Resources = () => {
  // 使用教材
  const textbook = {
    title: "数字舞蹈创作与应用：AIGC·新媒体",
    author: "吴振",
    publisher: "中国纺织出版社2025年底出版",
    image: "/images/DigitalCreate.jpg",
    description: "本书系统介绍了数字舞蹈创作的理论基础、技术方法和实践应用，涵盖AIGC技术在新媒体艺术中的创新应用，为跨媒介数字展演创作提供全面的理论指导和实践参考。"
  };

  const books = [
    {
      id: 1,
      title: "數字藝術",
      author: "克里斯蒂安·保羅",
      publisher: "機械工業出版社2021年第3版",
      description: "全面介绍数字艺术的发展历程、技术基础和创作实践"
    },
    {
      id: 2,
      title: "虛擬藝術",
      author: "奧利弗·格勞",
      publisher: "清華大學出版社2007年版",
      description: "探讨虚拟现实技术在艺术创作中的应用和影响"
    },
    {
      id: 3,
      title: "文化、技術與社會中的身體",
      author: "克里斯·希林",
      publisher: "北京大學出版社2011年版",
      description: "分析身体在数字化社会中的角色和意义"
    },
    {
      id: 4,
      title: "元宇宙與數字世界的未來",
      author: "周曉鵬",
      publisher: "社會科學文獻出版社2023年版",
      description: "深入解析元宇宙概念及其对未来社会的影响"
    },
    {
      id: 5,
      title: "空間敘事學",
      author: "龍迪勇",
      publisher: "生活·讀書·新知三聯書店2015版",
      description: "研究空间叙事的理论框架和实践方法"
    },
    {
      id: 6,
      title: "台灣数位表演與科技劇場——歷史、美學與創作",
      author: "邱誌勇",
      publisher: "2023年",
      description: "台湾数字表演和科技剧场的发展历史与创作实践"
    }
  ];

  const techTools = [
    {
      name: "TouchDesigner (TD)",
      description: "实时交互多媒体内容的视觉编程环境，适用于复杂的视觉效果创作",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      category: "创作工具"
    },
    {
      name: "Theater for Tomorrow (ToT)",
      description: "集成现代技术的剧院平台，包含Avatar、表演、动作捕捉等功能",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      category: "表演平台"
    },
    {
      name: "Unity3D (U3D)",
      description: "创建交互式3D和VR体验的游戏引擎，支持跨平台部署",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      category: "开发引擎"
    }
  ];

  const aigcTools = [
    {
      name: "明日剧场数智展演平台",
      description: "Theater of Tomorrow开发的综合性数智展演平台",
      url: "https://auqliwvr.manus.space/",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "AI产品设计师Flux Kontext",
      description: "基于Flux技术的AI驱动产品设计工具",
      url: "https://v0-image-upload-application-2uygxln5j-tot-3373s-projects.vercel.app/",
      icon: <Palette className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "AI视频设计师",
      description: "现代化的AI视频生成和编辑工具",
      url: "https://v0-modern-movie-generator-ui.vercel.app/",
      icon: <Video className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "AI图像设计1",
      description: "基于Flux和OpenAI技术的图像生成工具",
      url: "https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/",
      icon: <Image className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "AI图像设计2",
      description: "专业的AI图像创作和编辑平台",
      url: "https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              学习
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                资源
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              丰富的学习资源助力您的跨媒介数字展演创作之旅
            </p>
          </motion.div>
        </div>
      </section>

      {/* Textbook Section */}
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
              使用教材
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              专为本课程编写的权威教材，理论与实践并重
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-purple-400 font-semibold text-lg">主要教材</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {textbook.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-cyan-400 text-lg">
                      <span className="font-semibold">作者：</span>{textbook.author}
                    </p>
                    <p className="text-white/80">
                      <span className="font-semibold">出版：</span>{textbook.publisher}
                    </p>
                  </div>
                  <p className="text-white/90 leading-relaxed text-lg">
                    {textbook.description}
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-2xl">
                      <img 
                        src={textbook.image} 
                        alt={textbook.title}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reference Books */}
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
              参考书目
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              精选的理论著作，为您的学习提供坚实的理论基础
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 h-full rounded-lg">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-4 flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-cyan-400 mb-1">[{book.id}]</div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {book.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2 text-white/80 text-sm">
                      <p><span className="font-semibold">作者：</span>{book.author}</p>
                      <p><span className="font-semibold">出版：</span>{book.publisher}</p>
                      <p className="leading-relaxed mt-3">{book.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Tools */}
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
              技术工具
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              专业的创作工具和平台，支持您的数字表演创作实践
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 h-full rounded-lg">
                  <div className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${tool.color} mb-6 text-white`}>
                      {tool.icon}
                    </div>
                    <div className="text-sm text-cyan-400 mb-2">{tool.category}</div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {tool.name}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AIGC Design Tools */}
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
              AIGC 设计工具
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4">
              由 <a 
                href="https://auqliwvr.manus.space/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                Theater of Tomorrow
              </a> 开发的AI驱动设计工具集
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aigcTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 h-full group rounded-lg">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${tool.color} mr-4 flex-shrink-0`}>
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {tool.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    <button 
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 py-3 px-4"
                      onClick={() => window.open(tool.url, '_blank', 'noopener,noreferrer')}
                    >
                      <span className="flex items-center justify-center">
                        访问工具
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">学习建议</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-3">理论学习</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 建议按照课程模块顺序阅读相关书籍</li>
                    <li>• 重点关注数字艺术和虚拟艺术的理论基础</li>
                    <li>• 结合实际案例理解理论概念</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">实践操作</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 熟练掌握TouchDesigner等专业工具</li>
                    <li>• 积极体验AIGC设计工具的功能</li>
                    <li>• 参与Theater of Tomorrow平台的实践项目</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">创作实践</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 结合理论知识进行原创作品设计</li>
                    <li>• 探索不同媒介的融合可能性</li>
                    <li>• 记录创作过程和反思心得</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">学术交流</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 参与相关学术会议和展览</li>
                    <li>• 与同行进行创作经验交流</li>
                    <li>• 关注领域内的最新发展动态</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

