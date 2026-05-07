import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english'); // default: english

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'urdu' : 'english');
  };

  const translations = {
    english: {
      // Navbar
      navHome: 'Home',
      navAbout: 'About',
      navServices: 'Services',
      navProjects: 'Projects',
      navContact: 'Contact',

      // Hero Section
      heroTitle: 'Noor Mosaic',
      heroSubtitle: '& Marble',
      heroTagline: 'Crafting Elegance in Stone',
      heroDescription: 'Premium marble installation, exquisite mosaic design, and professional stone solutions for your dream spaces',
      heroBtn1: 'Explore Services',
      heroBtn2: 'Get in Touch',

      // About Section
      aboutLabel: 'About Us',
      aboutTitle: 'Crafting Excellence in',
      aboutTitleGradient: 'Stone & Mosaic',
      aboutDescription: 'With years of expertise in marble installation and mosaic design, we transform ordinary spaces into extraordinary masterpieces. Our commitment to quality and attention to detail sets us apart.',
      aboutYearsLabel: 'Years Experience',
      aboutProjectsLabel: 'Projects Completed',
      aboutClientsLabel: 'Happy Clients',
      aboutBtn: 'Learn More About Us',

      // Services Section
      servicesTitle: 'Our',
      servicesTitleGradient: 'Services',
      servicesDescription: 'Comprehensive stone solutions tailored to your needs. From installation to supply, we\'ve got you covered.',
      service1Title: 'Marble Installation',
      service1Desc: 'Professional installation of premium marble for floors, walls, countertops, and more. Our expert team ensures flawless execution and lasting beauty.',
      service1Feature1: 'Floor Installation',
      service1Feature2: 'Wall Cladding',
      service1Feature3: 'Countertops',
      service1Feature4: 'Staircases',
      service2Title: 'Mosaic Design',
      service2Desc: 'Custom mosaic designs that transform ordinary spaces into works of art. From traditional patterns to contemporary designs, we bring your vision to life.',
      service2Feature1: 'Custom Patterns',
      service2Feature2: 'Artistic Designs',
      service2Feature3: 'Restoration',
      service2Feature4: 'Modern & Classic',
      service3Title: 'Cutting & Polishing',
      service3Desc: 'Precision cutting and professional polishing services to achieve the perfect finish. We use state-of-the-art equipment for exceptional results.',
      service3Feature1: 'Precision Cutting',
      service3Feature2: 'Edge Profiling',
      service3Feature3: 'Surface Polishing',
      service3Feature4: 'Restoration',
      service4Title: 'Factory Supply',
      service4Desc: 'Direct factory supply of premium marble and stone materials. We offer competitive pricing and a wide selection of high-quality materials.',
      service4Feature1: 'Bulk Orders',
      service4Feature2: 'Quality Materials',
      service4Feature3: 'Competitive Pricing',
      service4Feature4: 'Fast Delivery',
      servicesReadMore: 'Read More',
      servicesReadLess: 'Read Less',
      servicesBtn: 'Request a Quote',

      // Projects Section
      projectsTitle: 'Trending',
      projectsTitleGradient: 'Projects',
      projectsDescription: 'Explore our latest projects showcasing exceptional craftsmanship and stunning designs',
      projectsBtn: 'View All Projects',
      projectsBtnLess: 'Show Less',
      projectCategoryFeatured: 'Featured',
      projectCategoryResidential: 'Residential',
      projectCategoryCommercial: 'Commercial',

      // Social Media Section
      contactLabel: 'Connect With Us',
      contactTitle: 'Let\'s Start a',
      contactTitleGradient: 'Conversation',
      contactDescription: 'We\'re here to transform your space with premium marble and mosaic solutions. Reach out and let\'s create something extraordinary together.',
      contactPhone: 'Call Us',
      contactEmail: 'Email Us',
      contactAddress: 'Visit Us',
      contactAddressText: 'Noor Marble and Granite Factory, Bhakkar',
      socialTitle: 'Follow Our Journey',
      socialSubtitle: 'Stay updated with our latest projects, design inspiration, and exclusive offers',
      socialFacebook: 'Facebook',
      socialFacebookDesc: 'Follow us for updates',
      socialInstagram: 'Instagram',
      socialInstagramDesc: 'See our latest projects',
      socialTwitter: 'Twitter',
      socialTwitterDesc: 'Join the conversation',
      socialTikTok: 'TikTok',
      socialTikTokDesc: 'Watch our videos',
      socialWhatsapp: 'WhatsApp',
      socialWhatsappDesc: 'Chat with us instantly',
      whatsappText: 'Ready to start your project? Let\'s create something beautiful together.',
      whatsappBtn: 'Start Chatting on WhatsApp',

      // Footer
      footerCompanyName: 'Noor Mosaic & Marble',
      footerCompanyDesc: 'Crafting elegance in stone since 2017. Your trusted partner for premium marble and mosaic solutions.',
      footerQuickLinks: 'Quick Links',
      footerServices: 'Our Services',
      footerContact: 'Contact Us',
      footerPhone: 'Phone:',
      footerEmail: 'Email:',
      footerAddress: 'Address:',
      footerCopyright: 'Noor Mosaic & Marble. All rights reserved.',
      footerMade: 'Made with',
      footerMadeText: 'for excellence',
    },
    urdu: {
      // Navbar
      navHome: 'ہوم',
      navAbout: 'ہمارے بارے میں',
      navServices: 'خدمات',
      navProjects: 'منصوبے',
      navContact: 'رابطہ',

      // Hero Section
      heroTitle: 'نور موزیک',
      heroSubtitle: 'اینڈ ماربل',
      heroTagline: 'پتھر میں خوبصورتی کی تخلیق',
      heroDescription: 'پریمیم ماربل کی تنصیب، شاندار موزیک ڈیزائن، اور آپ کے خوابوں کی جگہوں کے لیے پیشہ ورانہ پتھر کے حل',
      heroBtn1: 'خدمات دیکھیں',
      heroBtn2: 'رابطہ کریں',

      // About Section
      aboutLabel: 'ہمارے بارے میں',
      aboutTitle: 'پتھر اور موزیک میں',
      aboutTitleGradient: 'بہترین کاریگری',
      aboutDescription: 'ماربل کی تنصیب اور موزیک ڈیزائن میں سالوں کی مہارت کے ساتھ، ہم عام جگہوں کو غیر معمولی شاہکاروں میں تبدیل کرتے ہیں۔ معیار کے لیے ہماری وابستگی اور تفصیل پر توجہ ہمیں الگ کرتی ہے۔',
      aboutYearsLabel: 'سال کا تجربہ',
      aboutProjectsLabel: 'مکمل منصوبے',
      aboutClientsLabel: 'خوش گاہک',
      aboutBtn: 'مزید جانیں',

      // Services Section
      servicesTitle: 'ہماری',
      servicesTitleGradient: 'خدمات',
      servicesDescription: 'آپ کی ضروریات کے مطابق جامع پتھر کے حل۔ تنصیب سے لے کر سپلائی تک، ہم نے آپ کو کور کیا ہے۔',
      service1Title: 'ماربل کی تنصیب',
      service1Desc: 'فرش، دیواروں، کاؤنٹر ٹاپس اور مزید کے لیے پریمیم ماربل کی پیشہ ورانہ تنصیب۔ ہماری ماہر ٹیم بے عیب عمل اور دیرپا خوبصورتی کو یقینی بناتی ہے۔',
      service1Feature1: 'فرش کی تنصیب',
      service1Feature2: 'دیوار کی کلیڈنگ',
      service1Feature3: 'کاؤنٹر ٹاپس',
      service1Feature4: 'سیڑھیاں',
      service2Title: 'موزیک ڈیزائن',
      service2Desc: 'حسب ضرورت موزیک ڈیزائن جو عام جگہوں کو فن کے کاموں میں تبدیل کرتے ہیں۔ روایتی نمونوں سے لے کر عصری ڈیزائن تک، ہم آپ کے وژن کو زندہ کرتے ہیں۔',
      service2Feature1: 'حسب ضرورت نمونے',
      service2Feature2: 'فنکارانہ ڈیزائن',
      service2Feature3: 'بحالی',
      service2Feature4: 'جدید اور کلاسک',
      service3Title: 'کٹنگ اور پالشنگ',
      service3Desc: 'کامل فنش حاصل کرنے کے لیے درست کٹنگ اور پیشہ ورانہ پالشنگ خدمات۔ ہم غیر معمولی نتائج کے لیے جدید ترین آلات استعمال کرتے ہیں۔',
      service3Feature1: 'درست کٹنگ',
      service3Feature2: 'ایج پروفائلنگ',
      service3Feature3: 'سطح کی پالشنگ',
      service3Feature4: 'بحالی',
      service4Title: 'فیکٹری سپلائی',
      service4Desc: 'پریمیم ماربل اور پتھر کے مواد کی براہ راست فیکٹری سپلائی۔ ہم مسابقتی قیمتوں اور اعلیٰ معیار کے مواد کا وسیع انتخاب پیش کرتے ہیں۔',
      service4Feature1: 'بلک آرڈرز',
      service4Feature2: 'معیاری مواد',
      service4Feature3: 'مسابقتی قیمتیں',
      service4Feature4: 'تیز ترسیل',
      servicesReadMore: 'مزید پڑھیں',
      servicesReadLess: 'کم پڑھیں',
      servicesBtn: 'قیمت کی درخواست کریں',

      // Projects Section
      projectsTitle: 'ٹرینڈنگ',
      projectsTitleGradient: 'منصوبے',
      projectsDescription: 'غیر معمولی کاریگری اور شاندار ڈیزائن کی نمائش کرنے والے ہمارے تازہ ترین منصوبوں کو دریافت کریں',
      projectsBtn: 'تمام منصوبے دیکھیں',
      projectsBtnLess: 'کم دکھائیں',
      projectCategoryFeatured: 'نمایاں',
      projectCategoryResidential: 'رہائشی',
      projectCategoryCommercial: 'تجارتی',

      // Social Media Section
      contactLabel: 'ہم سے جڑیں',
      contactTitle: 'آئیے شروع کریں',
      contactTitleGradient: 'بات چیت',
      contactDescription: 'ہم یہاں پریمیم ماربل اور موزیک حل کے ساتھ آپ کی جگہ کو تبدیل کرنے کے لیے ہیں۔ رابطہ کریں اور آئیے مل کر کچھ غیر معمولی بنائیں۔',
      contactPhone: 'ہمیں کال کریں',
      contactEmail: 'ای میل کریں',
      contactAddress: 'ہمیں ملیں',
      contactAddressText: 'نور ماربل اینڈ گرینائٹ فیکٹری، بھکر',
      socialTitle: 'ہمارے سفر کی پیروی کریں',
      socialSubtitle: 'ہمارے تازہ ترین منصوبوں، ڈیزائن کی تحریک، اور خصوصی پیشکشوں کے ساتھ اپ ڈیٹ رہیں',
      socialFacebook: 'فیس بک',
      socialFacebookDesc: 'اپ ڈیٹس کے لیے فالو کریں',
      socialInstagram: 'انسٹاگرام',
      socialInstagramDesc: 'ہمارے تازہ منصوبے دیکھیں',
      socialTwitter: 'ٹویٹر',
      socialTwitterDesc: 'بات چیت میں شامل ہوں',
      socialTikTok: 'ٹک ٹاک',
      socialTikTokDesc: 'ہماری ویڈیوز دیکھیں',
      socialWhatsapp: 'واٹس ایپ',
      socialWhatsappDesc: 'فوری چیٹ کریں',
      whatsappText: 'اپنا منصوبہ شروع کرنے کے لیے تیار ہیں؟ آئیے مل کر کچھ خوبصورت بنائیں۔',
      whatsappBtn: 'واٹس ایپ پر چیٹ شروع کریں',

      // Footer
      footerCompanyName: 'نور موزیک اینڈ ماربل',
      footerCompanyDesc: '2017 سے پتھر میں خوبصورتی کی تخلیق۔ پریمیم ماربل اور موزیک حل کے لیے آپ کا قابل اعتماد ساتھی۔',
      footerQuickLinks: 'فوری لنکس',
      footerServices: 'ہماری خدمات',
      footerContact: 'ہم سے رابطہ کریں',
      footerPhone: 'فون:',
      footerEmail: 'ای میل:',
      footerAddress: 'پتہ:',
      footerCopyright: 'نور موزیک اینڈ ماربل۔ تمام حقوق محفوظ ہیں۔',
      footerMade: 'بنایا گیا',
      footerMadeText: 'بہترین کے لیے',
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
