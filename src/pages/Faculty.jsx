import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Globe, 
  GraduationCap,
  Users,
  Star,
  Trophy,
  Briefcase,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const Faculty = () => {
  const facultyMember = {
    name: "吴振",
    title: "副教授、硕士生导师",
    institution: "北京舞蹈学院",
    education: "澳门科技大学数字媒体方向博士",
    image: "/images/wuzhen1.png",
    positions: [
      "北京舞蹈学院副教授",
      "澳门国际青年智库理事、研究员",
      "硕士生导师",
      "国家二级舞台美术设计",
      "美国加州大学欧文分校访问学者"
    ],
    courses: [
      "数字演艺影像设计",
      "北京市人工智能通识课"
    ],
    achievements: [
      {
        year: "2022",
        title: "北京冬残奥会开闭幕式多媒体设计",
        type: "重大项目",
        icon: <Trophy className="w-5 h-5" />
      },
      {
        year: "2022",
        title: "国家科技创新奖（科技部备案）",
        type: "科研奖项",
        icon: <Award className="w-5 h-5" />
      },
      {
        year: "2023",
        title: "理创大赛大湾区二等奖",
        type: "竞赛奖项",
        icon: <Star className="w-5 h-5" />
      }
    ],
    projects: [
      {
        name: "舞美动作数据库DanceLab",
        description: "专业的舞蹈动作数据采集与分析平台",
        status: "已发布"
      },
      {
        name: "明日剧场智慧展演平台(TOT)",
        description: "集成AI技术的智能化展演解决方案",
        status: "获奖项目"
      }
    ],
    exhibitions: [
      "2024澳门科技周",
      "第七届上海中国国际进口博览会"
    ],
    expertise: [
      "数字媒体艺术创作",
      "多媒体视觉设计",
      "舞台美术设计",
      "人工智能应用",
      "跨媒介展演技术"
    ]
  };

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
              师资
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                团队
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              汇聚国际顶尖学者，引领跨媒介数字展演创作的前沿发展
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Profile */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Main Profile Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Image and Basic Info */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative inline-block mb-6">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-purple-500 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                          <img 
                            src={facultyMember.image} 
                            alt={facultyMember.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-3">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{facultyMember.name}</h2>
                    <p className="text-cyan-400 text-lg mb-2">{facultyMember.title}</p>
                    <p className="text-white/80">{facultyMember.institution}</p>
                    <p className="text-white/60 text-sm mt-2">{facultyMember.education}</p>
                  </motion.div>
                </div>

                {/* Detailed Information */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Positions */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-cyan-400" />
                        主要职务
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {facultyMember.positions.map((position, index) => (
                          <div key={index} className="flex items-center text-white/80">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                            {position}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                        主讲课程
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {facultyMember.courses.map((course, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-white/90 text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Star className="w-5 h-5 mr-2 text-cyan-400" />
                        专业领域
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {facultyMember.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white/80 text-sm hover:bg-white/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Major Achievements */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
                  主要成就
                </h3>
                <div className="space-y-4">
                  {facultyMember.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex-shrink-0 p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mr-4">
                        {achievement.icon}
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-400 font-bold mr-2">{achievement.year}</span>
                          <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded-full">
                            {achievement.type}
                          </span>
                        </div>
                        <h4 className="text-white font-semibold">{achievement.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Research Projects */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-cyan-400" />
                  研发项目
                </h3>
                <div className="space-y-4">
                  {facultyMember.projects.map((project, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">{project.name}</h4>
                        <span className="text-xs px-2 py-1 bg-cyan-400/20 text-cyan-300 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">参展经历</h4>
                  <div className="space-y-2">
                    {facultyMember.exhibitions.map((exhibition, index) => (
                      <div key={index} className="flex items-center text-white/80">
                        <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                        {exhibition}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">专业简介</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                吴振教授是数字媒体艺术领域的杰出学者和实践者，长期从事数字媒体艺术的创作实践，作品横跨多个领域。
                作为北京舞蹈学院副教授和硕士生导师，他在数字演艺影像设计和人工智能教育方面具有丰富经验。
                曾担任2022年北京冬残奥会开闭幕式多媒体设计，主持开发了"舞美动作数据库DanceLab"和"明日剧场智慧展演平台(TOT)"等创新项目，
                获得国家科技创新奖等多项荣誉，是跨媒介数字展演创作领域的领军人物。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">学术交流与合作</h2>
            <p className="text-white/80 text-lg mb-8">
              欢迎与我们的师资团队进行学术交流与项目合作
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">学术邮箱</h3>
                <p className="text-white/70 text-sm">tot@alexzhenwu.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">联系电话</h3>
                <p className="text-white/70 text-sm">+86 13810745684</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">办公地址</h3>
                <p className="text-white/70 text-sm">澳门科技大学</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;

