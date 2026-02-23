import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Code, 
  Palette, 
  Brain, 
  Globe, 
  Sparkles,
  ChevronRight,
  Clock,
  Users,
  Target
} from 'lucide-react';

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState('modules');

  const modules = [
    {
      id: 1,
      title: "数字表演基础",
      subtitle: "Foundations of Digital Performance",
      duration: "2-3周",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "表演艺术史与数字革命的理论基础",
      topics: [
        "数字表演的历史背景和发展脉络",
        "关键理论家和实践者研究",
        "数字技术对传统表演的影响",
        "当代数字表演的定义和特征"
      ],
      projects: [
        "数字表演概念设计",
        "理论研究报告",
        "案例分析展示"
      ]
    },
    {
      id: 2,
      title: "身体与技术",
      subtitle: "Body and Technology",
      duration: "2-3周",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "探索物理身体与数字技术在表演语境中的关系",
      topics: [
        "身体性与虚拟性的哲学思考",
        "动作捕捉技术原理与应用",
        "传感器技术在表演中的运用",
        "人机交互界面设计"
      ],
      projects: [
        "身体-技术交互表演",
        "动作捕捉实验",
        "传感器创作项目"
      ]
    },
    {
      id: 3,
      title: "虚拟与增强现实",
      subtitle: "Virtual and Augmented Realities",
      duration: "3周",
      icon: <Palette className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      description: "使用VR/AR技术创建沉浸式表演环境",
      topics: [
        "VR/AR技术基础与发展趋势",
        "沉浸式环境设计原理",
        "空间叙事与用户体验",
        "跨现实表演创作方法"
      ],
      projects: [
        "VR表演环境设计",
        "AR交互体验创作",
        "混合现实表演原型"
      ]
    },
    {
      id: 4,
      title: "元宇宙与舞蹈",
      subtitle: "Metaverse and Dance",
      duration: "2-3周",
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      description: "元宇宙机制生成与虚拟表演创作",
      topics: [
        "元宇宙概念与技术架构",
        "虚拟世界中的身体表现",
        "游戏引擎在表演中的应用",
        "虚拟在线表演平台研究"
      ],
      projects: [
        "元宇宙舞蹈创作",
        "虚拟角色设计",
        "在线表演平台搭建"
      ]
    },
    {
      id: 5,
      title: "人工智能与舞蹈",
      subtitle: "Dance and Artificial Intelligence",
      duration: "3周",
      icon: <Brain className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      description: "AI技术在舞蹈创作中的方法与应用",
      topics: [
        "AI在艺术中的发展历史",
        "机器学习在动作生成中的应用",
        "AI辅助编舞工具与方法",
        "具身智能机器人表演研究"
      ],
      projects: [
        "AI辅助编舞创作",
        "智能表演系统设计",
        "人机协作表演"
      ]
    },
    {
      id: 6,
      title: "AIGC设计应用",
      subtitle: "Design Applications in AIGC",
      duration: "3周",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      description: "从视觉产品到元宇宙展览的AI生成内容应用",
      topics: [
        "AIGC技术原理与工具",
        "AI生成视觉内容的创作流程",
        "虚拟展览空间设计",
        "AI驱动的产品设计方法"
      ],
      projects: [
        "AI生成视觉作品集",
        "虚拟展览设计",
        "AIGC产品原型"
      ]
    }
  ];

  const learningOutcomes = [
    {
      category: "理论知识",
      icon: <BookOpen className="w-5 h-5" />,
      outcomes: [
        "掌握跨媒介数字表演的理论框架",
        "理解数字技术对表演艺术的影响",
        "具备批判性分析数字表演作品的能力",
        "了解相关领域的前沿发展趋势"
      ]
    },
    {
      category: "技术技能",
      icon: <Code className="w-5 h-5" />,
      outcomes: [
        "熟练使用VR/AR创作工具",
        "掌握AI辅助创作的方法",
        "具备跨平台技术整合能力",
        "能够独立完成技术实现"
      ]
    },
    {
      category: "创作能力",
      icon: <Palette className="w-5 h-5" />,
      outcomes: [
        "具备独立的创作思维和方法",
        "能够设计完整的表演作品",
        "掌握跨媒介叙事技巧",
        "具备团队协作创作能力"
      ]
    },
    {
      category: "职业发展",
      icon: <Target className="w-5 h-5" />,
      outcomes: [
        "具备数字艺术行业就业能力",
        "能够从事相关研究工作",
        "具备创业和项目管理能力",
        "建立专业网络和合作关系"
      ]
    }
  ];

  const assessmentMethods = [
    {
      method: "项目作品集",
      weight: "40%",
      description: "每个模块的实践项目作品，展示技术应用和创意表达"
    },
    {
      method: "理论研究报告",
      weight: "25%",
      description: "深入分析特定主题的学术论文，体现批判思维能力"
    },
    {
      method: "期末创作项目",
      weight: "25%",
      description: "综合运用所学知识完成的原创跨媒介表演作品"
    },
    {
      method: "课堂参与",
      weight: "10%",
      description: "课堂讨论、同伴评议和学习态度的综合评价"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
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
              课程
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                大纲
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              全面的课程体系涵盖理论基础和实践应用，系统性培养跨媒介数字表演创作能力
            </p>
          </motion.div>

          {/* Course Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-white/80 text-sm">核心模块</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">16</div>
              <div className="text-white/80 text-sm">教学周数</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">18+</div>
              <div className="text-white/80 text-sm">实践项目</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">1</div>
              <div className="text-white/80 text-sm">期末作品</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setActiveTab('modules')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'modules'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              课程模块
            </Button>
            <Button
              onClick={() => setActiveTab('outcomes')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'outcomes'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              学习成果
            </Button>
            <Button
              onClick={() => setActiveTab('assessment')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'assessment'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              评估方式
            </Button>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      {activeTab === 'modules' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                课程模块
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                六大核心模块，循序渐进地构建完整的知识体系
              </p>
            </motion.div>

            <div className="space-y-8">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Module Header */}
                        <div className="lg:col-span-1">
                          <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${module.color} mr-4`}>
                              {module.icon}
                            </div>
                            <div>
                              <div className="text-sm text-white/60 mb-1">模块 {module.id}</div>
                              <h3 className="text-2xl font-bold text-white">{module.title}</h3>
                              <p className="text-white/60 text-sm">{module.subtitle}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-white/80 mb-4">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">{module.duration}</span>
                          </div>
                          <p className="text-white/80 leading-relaxed">{module.description}</p>
                        </div>

                        {/* Module Content */}
                        <div className="lg:col-span-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Topics */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                                主要内容
                              </h4>
                              <ul className="space-y-2">
                                {module.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex} className="flex items-start text-white/80 text-sm">
                                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Projects */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <Target className="w-5 h-5 mr-2 text-purple-400" />
                                实践项目
                              </h4>
                              <ul className="space-y-2">
                                {module.projects.map((project, projectIndex) => (
                                  <li key={projectIndex} className="flex items-start text-white/80 text-sm">
                                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-purple-400 flex-shrink-0" />
                                    <span>{project}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learning Outcomes */}
      {activeTab === 'outcomes' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                学习成果
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                通过课程学习，学生将在以下四个维度获得全面提升
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningOutcomes.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-4 text-white">
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                      </div>
                      <ul className="space-y-3">
                        {category.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start text-white/80">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Assessment Methods */}
      {activeTab === 'assessment' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                评估方式
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                多元化的评估方式，全面考察学生的学习成果
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {assessmentMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-white">{method.method}</h3>
                          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {method.weight}
                          </div>
                        </div>
                        <p className="text-white/80 leading-relaxed">{method.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">评估原则</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
                  <div>
                    <h4 className="font-semibold text-white mb-2">过程性评估</h4>
                    <p className="text-sm leading-relaxed">
                      注重学习过程中的表现，包括课堂参与、项目进展和同伴协作等方面的综合评价。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">创新性导向</h4>
                    <p className="text-sm leading-relaxed">
                      鼓励创新思维和原创性表达，重视学生在技术应用和艺术创作方面的突破。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">实践能力</h4>
                    <p className="text-sm leading-relaxed">
                      强调理论与实践的结合，评估学生将所学知识转化为实际作品的能力。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">反思与改进</h4>
                    <p className="text-sm leading-relaxed">
                      重视学生的自我反思能力和持续改进意识，培养终身学习的习惯。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Curriculum;

