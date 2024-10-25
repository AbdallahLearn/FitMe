import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// تأكد من استيراد الصور الخاصة بك هنا
import man from "../../public/images/man.png";
// import woman from "../../public/images/woman.png";

const ImageSlider = () => {
    const images = [man]; // أضف الصور التي ترغب في عرضها هنا
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // تغيير الصورة كل 2 ثانية

        return () => clearInterval(interval); // تنظيف عند إلغاء التركيب
    }, [images.length]);

    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:w-[26rem] md:w-[20rem] max-md:w-[18rem] max-sm:w-[11rem]">
            <motion.img
                key={currentIndex} // يستخدم لضمان أن كل صورة تعرض كعنصر مختلف
                src={images[currentIndex]}
                alt="Slideshow"
                initial={{ opacity: 0 }} // بدءًا بالشفافية 0
                animate={{ opacity: 1 }} // الانتقال إلى الشفافية 1
                exit={{ opacity: 0 }} // الانتقال إلى الشفافية 0 عند التغيير
                transition={{ duration: 0.5 }} // مدة الانتقال
            />
        </div>
    );
};

export default ImageSlider;
