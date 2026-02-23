import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: '/images/001.png', alt: '数字展演实践场景1' },
    { src: '/images/002.png', alt: '数字展演实践场景2' },
    { src: '/images/003.png', alt: '数字展演实践场景3' },
    { src: '/images/004.png', alt: '数字展演实践场景4' },
    { src: '/images/005.png', alt: '数字展演实践场景5' },
    { src: '/images/006.png', alt: '数字展演实践场景6' }
  ];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 随机选择一张图片作为预览
  const randomIndex = Math.floor(Math.random() * images.length);
  const previewImage = images[randomIndex];

  return (
    <>
      {/* 预览图片 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">课程实践展示</h3>
          <p className="text-white/80">点击查看更多精彩瞬间</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative cursor-pointer group"
            onClick={() => openGallery(randomIndex)}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={previewImage.src} 
                alt={previewImage.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md rounded-lg px-3 py-1">
              <span className="text-white text-sm">点击浏览更多 ({images.length} 张)</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 全屏图片浏览器 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeGallery}
          >
            {/* 关闭按钮 */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-60 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 图片计数器 */}
            <div className="absolute top-4 left-4 z-60 bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 text-white">
              {currentIndex + 1} / {images.length}
            </div>

            {/* 左箭头 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-60 bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* 右箭头 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-60 bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* 主图片 */}
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>

            {/* 底部缩略图 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60">
              <div className="flex space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex 
                        ? 'border-cyan-400 scale-110' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;

