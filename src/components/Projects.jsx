import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Projects.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const { t, language } = useLanguage();

  // Project data with English and Urdu translations
  const projectsData = [
    {
      titleEn: '⭐ Featured Marble Design',
      titleUr: '⭐ نمایاں ماربل ڈیزائن',
      categoryEn: 'Featured',
      categoryUr: 'نمایاں',
      image: '/images/IMG-20260502-WA0086.jpg',
      descEn: 'Premium showcase project',
      descUr: 'پریمیم نمائشی منصوبہ'
    },
    {
      titleEn: '⭐ Luxury Stone Work',
      titleUr: '⭐ لگژری پتھر کا کام',
      categoryEn: 'Featured',
      categoryUr: 'نمایاں',
      image: '/images/IMG-20260502-WA0093.jpg',
      descEn: 'Elegant marble installation',
      descUr: 'خوبصورت ماربل کی تنصیب'
    },
    {
      titleEn: '⭐ Premium Mosaic Art',
      titleUr: '⭐ پریمیم موزیک آرٹ',
      categoryEn: 'Featured',
      categoryUr: 'نمایاں',
      image: '/images/IMG-20260502-WA0101.jpg',
      descEn: 'Exquisite mosaic design',
      descUr: 'شاندار موزیک ڈیزائن'
    },
    {
      titleEn: 'Premium Marble Showcase',
      titleUr: 'پریمیم ماربل شوکیس',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260501-WA0126.jpg',
      descEn: 'Elegant marble display',
      descUr: 'خوبصورت ماربل ڈسپلے'
    },
    {
      titleEn: 'Luxury Marble Installation',
      titleUr: 'لگژری ماربل کی تنصیب',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260501-WA0127.jpg',
      descEn: 'Premium marble flooring',
      descUr: 'پریمیم ماربل فرش'
    },
    {
      titleEn: 'Modern Mosaic Design',
      titleUr: 'جدید موزیک ڈیزائن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260501-WA0128.jpg',
      descEn: 'Contemporary mosaic art',
      descUr: 'عصری موزیک آرٹ'
    },
    {
      titleEn: 'Elegant Floor Work',
      titleUr: 'خوبصورت فرش کا کام',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260501-WA0129.jpg',
      descEn: 'Luxury floor installation',
      descUr: 'لگژری فرش کی تنصیب'
    },
    {
      titleEn: 'Premium Stone Work',
      titleUr: 'پریمیم پتھر کا کام',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260501-WA0130.jpg',
      descEn: 'High-end stone design',
      descUr: 'اعلیٰ معیار کا پتھر ڈیزائن'
    },
    {
      titleEn: 'Marble Factory Work',
      titleUr: 'ماربل فیکٹری کا کام',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0074.jpg',
      descEn: 'Factory marble cutting',
      descUr: 'فیکٹری ماربل کٹنگ'
    },
    {
      titleEn: 'Marble Cutting Service',
      titleUr: 'ماربل کٹنگ سروس',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0075.jpg',
      descEn: 'Precision cutting work',
      descUr: 'درست کٹنگ کا کام'
    },
    {
      titleEn: 'Polishing Excellence',
      titleUr: 'پالشنگ میں بہترین',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0076.jpg',
      descEn: 'Professional polishing',
      descUr: 'پیشہ ورانہ پالشنگ'
    },
    {
      titleEn: 'Stone Processing',
      titleUr: 'پتھر کی پروسیسنگ',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0077.jpg',
      descEn: 'Expert stone work',
      descUr: 'ماہرانہ پتھر کا کام'
    },
    {
      titleEn: 'Factory Supply',
      titleUr: 'فیکٹری سپلائی',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0078.jpg',
      descEn: 'Direct factory marble',
      descUr: 'براہ راست فیکٹری ماربل'
    },
    {
      titleEn: 'Marble Fabrication',
      titleUr: 'ماربل فیبریکیشن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0079.jpg',
      descEn: 'Custom fabrication',
      descUr: 'حسب ضرورت فیبریکیشن'
    },
    {
      titleEn: 'Custom Design Work',
      titleUr: 'حسب ضرورت ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0080.jpg',
      descEn: 'Bespoke marble design',
      descUr: 'خصوصی ماربل ڈیزائن'
    },
    {
      titleEn: 'Stone Selection',
      titleUr: 'پتھر کا انتخاب',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0081.jpg',
      descEn: 'Premium stone variety',
      descUr: 'پریمیم پتھر کی اقسام'
    },
    {
      titleEn: 'Marble Inventory',
      titleUr: 'ماربل انوینٹری',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0082.jpg',
      descEn: 'Wide marble selection',
      descUr: 'وسیع ماربل کا انتخاب'
    },
    {
      titleEn: 'Quality Inspection',
      titleUr: 'معیار کا معائنہ',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0083.jpg',
      descEn: 'Quality assurance',
      descUr: 'معیار کی یقین دہانی'
    },
    {
      titleEn: 'Stone Warehouse',
      titleUr: 'پتھر کا گودام',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0084.jpg',
      descEn: 'Large inventory stock',
      descUr: 'بڑا انوینٹری اسٹاک'
    },
    {
      titleEn: 'Marble Slabs',
      titleUr: 'ماربل سلیب',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0085.jpg',
      descEn: 'Premium marble slabs',
      descUr: 'پریمیم ماربل سلیب'
    },
    {
      titleEn: 'Villa Flooring',
      titleUr: 'ولا فرش',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0086.jpg',
      descEn: 'Luxury villa marble',
      descUr: 'لگژری ولا ماربل'
    },
    {
      titleEn: 'Hotel Lobby Design',
      titleUr: 'ہوٹل لابی ڈیزائن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0087.jpg',
      descEn: 'Grand hotel entrance',
      descUr: 'شاندار ہوٹل داخلہ'
    },
    {
      titleEn: 'Kitchen Countertop',
      titleUr: 'کچن کاؤنٹر ٹاپ',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0089.jpg',
      descEn: 'Marble kitchen design',
      descUr: 'ماربل کچن ڈیزائن'
    },
    {
      titleEn: 'Office Reception',
      titleUr: 'آفس ریسپشن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0090.jpg',
      descEn: 'Corporate marble work',
      descUr: 'کارپوریٹ ماربل کا کام'
    },
    {
      titleEn: 'Bathroom Elegance',
      titleUr: 'باتھ روم کی خوبصورتی',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0091.jpg',
      descEn: 'Luxury bathroom marble',
      descUr: 'لگژری باتھ روم ماربل'
    },
    {
      titleEn: 'Restaurant Interior',
      titleUr: 'ریستوراں انٹیریئر',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0092.jpg',
      descEn: 'Fine dining marble',
      descUr: 'فائن ڈائننگ ماربل'
    },
    {
      titleEn: 'Living Room Design',
      titleUr: 'لونگ روم ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0093.jpg',
      descEn: 'Elegant living space',
      descUr: 'خوبصورت رہائشی جگہ'
    },
    {
      titleEn: 'Mall Entrance',
      titleUr: 'مال کا داخلہ',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0094.jpg',
      descEn: 'Shopping center marble',
      descUr: 'شاپنگ سینٹر ماربل'
    },
    {
      titleEn: 'Master Bedroom',
      titleUr: 'ماسٹر بیڈروم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0095.jpg',
      descEn: 'Bedroom marble flooring',
      descUr: 'بیڈروم ماربل فرش'
    },
    {
      titleEn: 'Marble Finishing',
      titleUr: 'ماربل فنشنگ',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0096.jpg',
      descEn: 'Perfect finish work',
      descUr: 'کامل فنش کا کام'
    },
    {
      titleEn: 'Stone Craftsmanship',
      titleUr: 'پتھر کی کاریگری',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0097.jpg',
      descEn: 'Expert craftsmanship',
      descUr: 'ماہرانہ کاریگری'
    },
    {
      titleEn: 'Spa Design',
      titleUr: 'سپا ڈیزائن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0098.jpg',
      descEn: 'Wellness center marble',
      descUr: 'ویلنس سینٹر ماربل'
    },
    {
      titleEn: 'Marble Installation',
      titleUr: 'ماربل کی تنصیب',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0099.jpg',
      descEn: 'Professional installation',
      descUr: 'پیشہ ورانہ تنصیب'
    },
    {
      titleEn: 'Entrance Hall',
      titleUr: 'داخلی ہال',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0100.jpg',
      descEn: 'Grand entrance design',
      descUr: 'شاندار داخلہ ڈیزائن'
    },
    {
      titleEn: 'Luxury Flooring',
      titleUr: 'لگژری فرش',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0101.jpg',
      descEn: 'High-end flooring',
      descUr: 'اعلیٰ معیار کا فرش'
    },
    {
      titleEn: 'Marble Patterns',
      titleUr: 'ماربل پیٹرن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0102.jpg',
      descEn: 'Beautiful patterns',
      descUr: 'خوبصورت پیٹرن'
    },
    {
      titleEn: 'Stone Layout',
      titleUr: 'پتھر کی ترتیب',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0103.jpg',
      descEn: 'Custom layout design',
      descUr: 'حسب ضرورت ترتیب ڈیزائن'
    },
    {
      titleEn: 'Boutique Interior',
      titleUr: 'بوتیک انٹیریئر',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0104.jpg',
      descEn: 'Retail space marble',
      descUr: 'ریٹیل اسپیس ماربل'
    },
    {
      titleEn: 'Dining Area',
      titleUr: 'ڈائننگ ایریا',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0105.jpg',
      descEn: 'Dining room elegance',
      descUr: 'ڈائننگ روم کی خوبصورتی'
    },
    {
      titleEn: 'Cafe Design',
      titleUr: 'کیفے ڈیزائن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0106.jpg',
      descEn: 'Coffee shop marble',
      descUr: 'کافی شاپ ماربل'
    },
    {
      titleEn: 'Study Room',
      titleUr: 'اسٹڈی روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0107.jpg',
      descEn: 'Home office marble',
      descUr: 'ہوم آفس ماربل'
    },
    {
      titleEn: 'Bank Interior',
      titleUr: 'بینک انٹیریئر',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0108.jpg',
      descEn: 'Financial center design',
      descUr: 'مالیاتی مرکز ڈیزائن'
    },
    {
      titleEn: 'Guest Room',
      titleUr: 'گیسٹ روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0109.jpg',
      descEn: 'Guest bedroom marble',
      descUr: 'مہمان بیڈروم ماربل'
    },
    {
      titleEn: 'Clinic Design',
      titleUr: 'کلینک ڈیزائن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0110.jpg',
      descEn: 'Medical facility marble',
      descUr: 'طبی سہولت ماربل'
    },
    {
      titleEn: 'Balcony Flooring',
      titleUr: 'بالکونی فرش',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0111.jpg',
      descEn: 'Outdoor marble work',
      descUr: 'بیرونی ماربل کا کام'
    },
    {
      titleEn: 'Showroom Design',
      titleUr: 'شو روم ڈیزائن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0116.jpg',
      descEn: 'Display area marble',
      descUr: 'ڈسپلے ایریا ماربل'
    },
    {
      titleEn: 'Powder Room',
      titleUr: 'پاؤڈر روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0117.jpg',
      descEn: 'Elegant powder room',
      descUr: 'خوبصورت پاؤڈر روم'
    },
    {
      titleEn: 'Theater Lobby',
      titleUr: 'تھیٹر لابی',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0118.jpg',
      descEn: 'Cinema entrance marble',
      descUr: 'سینما داخلہ ماربل'
    },
    {
      titleEn: 'Laundry Room',
      titleUr: 'لانڈری روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0119.jpg',
      descEn: 'Utility area marble',
      descUr: 'یوٹیلیٹی ایریا ماربل'
    },
    {
      titleEn: 'Gallery Space',
      titleUr: 'گیلری اسپیس',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0120.jpg',
      descEn: 'Art gallery flooring',
      descUr: 'آرٹ گیلری فرش'
    },
    {
      titleEn: 'Patio Design',
      titleUr: 'پیٹیو ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0121.jpg',
      descEn: 'Outdoor patio marble',
      descUr: 'بیرونی پیٹیو ماربل'
    },
    {
      titleEn: 'Salon Interior',
      titleUr: 'سیلون انٹیریئر',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0122.jpg',
      descEn: 'Beauty salon design',
      descUr: 'بیوٹی سیلون ڈیزائن'
    },
    {
      titleEn: 'Home Theater',
      titleUr: 'ہوم تھیٹر',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0123.jpg',
      descEn: 'Entertainment room marble',
      descUr: 'تفریحی کمرہ ماربل'
    },
    {
      titleEn: 'Gym Interior',
      titleUr: 'جم انٹیریئر',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0124.jpg',
      descEn: 'Fitness center flooring',
      descUr: 'فٹنس سینٹر فرش'
    },
    {
      titleEn: 'Wine Cellar',
      titleUr: 'وائن سیلر',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0125.jpg',
      descEn: 'Luxury wine storage',
      descUr: 'لگژری وائن اسٹوریج'
    },
    {
      titleEn: 'Conference Room',
      titleUr: 'کانفرنس روم',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0126.jpg',
      descEn: 'Meeting room marble',
      descUr: 'میٹنگ روم ماربل'
    },
    {
      titleEn: 'Walk-in Closet',
      titleUr: 'واک ان کلوزٹ',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0127.jpg',
      descEn: 'Wardrobe area marble',
      descUr: 'وارڈروب ایریا ماربل'
    },
    {
      titleEn: 'Lobby Design',
      titleUr: 'لابی ڈیزائن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0128.jpg',
      descEn: 'Building entrance marble',
      descUr: 'عمارت داخلہ ماربل'
    },
    {
      titleEn: 'Terrace Flooring',
      titleUr: 'ٹیرس فرش',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0130.jpg',
      descEn: 'Rooftop marble work',
      descUr: 'چھت کا ماربل کام'
    },
    {
      titleEn: 'Retail Store',
      titleUr: 'ریٹیل اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0131.jpg',
      descEn: 'Shop interior marble',
      descUr: 'دکان انٹیریئر ماربل'
    },
    {
      titleEn: 'Library Design',
      titleUr: 'لائبریری ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0132.jpg',
      descEn: 'Home library marble',
      descUr: 'ہوم لائبریری ماربل'
    },
    {
      titleEn: 'Lounge Area',
      titleUr: 'لاؤنج ایریا',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0133.jpg',
      descEn: 'Waiting area design',
      descUr: 'انتظار گاہ ڈیزائن'
    },
    {
      titleEn: 'Nursery Room',
      titleUr: 'نرسری روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0134.jpg',
      descEn: 'Baby room marble',
      descUr: 'بچوں کا کمرہ ماربل'
    },
    {
      titleEn: 'Pharmacy Interior',
      titleUr: 'فارمیسی انٹیریئر',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0135.jpg',
      descEn: 'Medical store design',
      descUr: 'میڈیکل اسٹور ڈیزائن'
    },
    {
      titleEn: 'Sunroom Design',
      titleUr: 'سن روم ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0138.jpg',
      descEn: 'Garden room marble',
      descUr: 'باغ کا کمرہ ماربل'
    },
    {
      titleEn: 'Jewelry Store',
      titleUr: 'جیولری اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0141.jpg',
      descEn: 'Luxury retail marble',
      descUr: 'لگژری ریٹیل ماربل'
    },
    {
      titleEn: 'Meditation Room',
      titleUr: 'مراقبہ کمرہ',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0142.jpg',
      descEn: 'Zen space marble',
      descUr: 'زین اسپیس ماربل'
    },
    {
      titleEn: 'Dental Clinic',
      titleUr: 'ڈینٹل کلینک',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0143.jpg',
      descEn: 'Dental office design',
      descUr: 'ڈینٹل آفس ڈیزائن'
    },
    {
      titleEn: 'Game Room',
      titleUr: 'گیم روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0144.jpg',
      descEn: 'Recreation room marble',
      descUr: 'تفریحی کمرہ ماربل'
    },
    {
      titleEn: 'Bakery Interior',
      titleUr: 'بیکری انٹیریئر',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0147.jpg',
      descEn: 'Bakery shop design',
      descUr: 'بیکری شاپ ڈیزائن'
    },
    {
      titleEn: 'Craft Room',
      titleUr: 'کرافٹ روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0148.jpg',
      descEn: 'Hobby room marble',
      descUr: 'شوق کا کمرہ ماربل'
    },
    {
      titleEn: 'Optical Store',
      titleUr: 'آپٹیکل اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0149.jpg',
      descEn: 'Eyewear shop marble',
      descUr: 'عینک کی دکان ماربل'
    },
    {
      titleEn: 'Music Room',
      titleUr: 'میوزک روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0150.jpg',
      descEn: 'Studio marble flooring',
      descUr: 'اسٹوڈیو ماربل فرش'
    },
    {
      titleEn: 'Bookstore Design',
      titleUr: 'بک اسٹور ڈیزائن',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0151.jpg',
      descEn: 'Book shop interior',
      descUr: 'کتاب کی دکان انٹیریئر'
    },
    {
      titleEn: 'Playroom',
      titleUr: 'پلے روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0153.jpg',
      descEn: 'Kids play area marble',
      descUr: 'بچوں کے کھیل کا علاقہ ماربل'
    },
    {
      titleEn: 'Florist Shop',
      titleUr: 'پھولوں کی دکان',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0154.jpg',
      descEn: 'Flower shop design',
      descUr: 'پھولوں کی دکان ڈیزائن'
    },
    {
      titleEn: 'Art Studio',
      titleUr: 'آرٹ اسٹوڈیو',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0155.jpg',
      descEn: 'Artist workspace marble',
      descUr: 'فنکار کی جگہ ماربل'
    },
    {
      titleEn: 'Pet Store',
      titleUr: 'پیٹ اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0157.jpg',
      descEn: 'Pet shop interior',
      descUr: 'پالتو جانوروں کی دکان'
    },
    {
      titleEn: 'Yoga Studio',
      titleUr: 'یوگا اسٹوڈیو',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0158.jpg',
      descEn: 'Home yoga space',
      descUr: 'ہوم یوگا اسپیس'
    },
    {
      titleEn: 'Electronics Store',
      titleUr: 'الیکٹرانکس اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0159.jpg',
      descEn: 'Tech shop marble',
      descUr: 'ٹیک شاپ ماربل'
    },
    {
      titleEn: 'Sauna Room',
      titleUr: 'سونا روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0161.jpg',
      descEn: 'Wellness room marble',
      descUr: 'ویلنس روم ماربل'
    },
    {
      titleEn: 'Furniture Store',
      titleUr: 'فرنیچر اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0162.jpg',
      descEn: 'Furniture showroom',
      descUr: 'فرنیچر شو روم'
    },
    {
      titleEn: 'Pool Area',
      titleUr: 'پول ایریا',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0163.jpg',
      descEn: 'Swimming pool marble',
      descUr: 'سوئمنگ پول ماربل'
    },
    {
      titleEn: 'Watch Store',
      titleUr: 'واچ اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0164.jpg',
      descEn: 'Luxury watch shop',
      descUr: 'لگژری واچ شاپ'
    },
    {
      titleEn: 'Bar Design',
      titleUr: 'بار ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0165.jpg',
      descEn: 'Home bar marble',
      descUr: 'ہوم بار ماربل'
    },
    {
      titleEn: 'Cosmetics Store',
      titleUr: 'کاسمیٹکس اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0166.jpg',
      descEn: 'Beauty shop design',
      descUr: 'بیوٹی شاپ ڈیزائن'
    },
    {
      titleEn: 'Greenhouse',
      titleUr: 'گرین ہاؤس',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0168.jpg',
      descEn: 'Garden house marble',
      descUr: 'باغ کا گھر ماربل'
    },
    {
      titleEn: 'Shoe Store',
      titleUr: 'جوتوں کی دکان',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0169.jpg',
      descEn: 'Footwear shop marble',
      descUr: 'جوتوں کی دکان ماربل'
    },
    {
      titleEn: 'Workshop',
      titleUr: 'ورک شاپ',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0171.jpg',
      descEn: 'Home workshop marble',
      descUr: 'ہوم ورک شاپ ماربل'
    },
    {
      titleEn: 'Toy Store',
      titleUr: 'کھلونوں کی دکان',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0172.jpg',
      descEn: 'Kids toy shop design',
      descUr: 'بچوں کے کھلونے کی دکان'
    },
    {
      titleEn: 'Garage Design',
      titleUr: 'گیراج ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0173.jpg',
      descEn: 'Luxury garage marble',
      descUr: 'لگژری گیراج ماربل'
    },
    {
      titleEn: 'Stationery Store',
      titleUr: 'اسٹیشنری اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0174.jpg',
      descEn: 'Office supply shop',
      descUr: 'آفس سپلائی شاپ'
    },
    {
      titleEn: 'Basement Design',
      titleUr: 'بیسمنٹ ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0175.jpg',
      descEn: 'Lower level marble',
      descUr: 'نچلی سطح ماربل'
    },
    {
      titleEn: 'Clothing Store',
      titleUr: 'کپڑوں کی دکان',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0178.jpg',
      descEn: 'Fashion boutique marble',
      descUr: 'فیشن بوتیک ماربل'
    },
    {
      titleEn: 'Attic Room',
      titleUr: 'اٹاری روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0179.jpg',
      descEn: 'Upper floor marble',
      descUr: 'اوپری منزل ماربل'
    },
    {
      titleEn: 'Grocery Store',
      titleUr: 'گروسری اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0180.jpg',
      descEn: 'Supermarket flooring',
      descUr: 'سپر مارکیٹ فرش'
    },
    {
      titleEn: 'Conservatory',
      titleUr: 'کنزرویٹری',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0181.jpg',
      descEn: 'Glass room marble',
      descUr: 'شیشے کا کمرہ ماربل'
    },
    {
      titleEn: 'Hardware Store',
      titleUr: 'ہارڈویئر اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0182.jpg',
      descEn: 'Tool shop design',
      descUr: 'ٹول شاپ ڈیزائن'
    },
    {
      titleEn: 'Mudroom',
      titleUr: 'مڈ روم',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0183.jpg',
      descEn: 'Entry area marble',
      descUr: 'داخلی علاقہ ماربل'
    },
    {
      titleEn: 'Sports Store',
      titleUr: 'اسپورٹس اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0185.jpg',
      descEn: 'Athletic shop marble',
      descUr: 'کھیلوں کی دکان ماربل'
    },
    {
      titleEn: 'Pantry Design',
      titleUr: 'پینٹری ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0186.jpg',
      descEn: 'Kitchen pantry marble',
      descUr: 'کچن پینٹری ماربل'
    },
    {
      titleEn: 'Gift Shop',
      titleUr: 'گفٹ شاپ',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0187.jpg',
      descEn: 'Souvenir store design',
      descUr: 'تحفے کی دکان ڈیزائن'
    },
    {
      titleEn: 'Foyer Design',
      titleUr: 'فوئیر ڈیزائن',
      categoryEn: 'Commercial',
      categoryUr: 'تجارتی',
      image: '/images/IMG-20260502-WA0188.jpg',
      descEn: 'Entrance foyer marble',
      descUr: 'داخلی فوئیر ماربل'
    },
    {
      titleEn: 'Antique Store',
      titleUr: 'اینٹیک اسٹور',
      categoryEn: 'Residential',
      categoryUr: 'رہائشی',
      image: '/images/IMG-20260502-WA0189.jpg',
      descEn: 'Vintage shop marble',
      descUr: 'قدیم دکان ماربل'
    }
  ];

  // Convert to display format based on language
  const allProjects = projectsData.map(project => ({
    title: language === 'urdu' ? project.titleUr : project.titleEn,
    category: language === 'urdu' ? project.categoryUr : project.categoryEn,
    image: project.image,
    description: language === 'urdu' ? project.descUr : project.descEn
  }));

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className={`projects-header ${language === 'urdu' ? 'urdu-text' : ''}`}>
          <h2 className="projects-title">
            {t.projectsTitle} <span className="text-gradient">{t.projectsTitleGradient}</span>
          </h2>
          <div className="projects-divider"></div>
          <p className="projects-description">
            {t.projectsDescription}
          </p>
        </div>

        <div className={`projects-grid ${showAll ? 'masonry-layout' : ''}`}>
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${showAll ? `masonry-item masonry-item-${(index % 3) + 1}` : ''} ${showAll ? 'fade-in' : ''}`}
              style={{ animationDelay: showAll ? `${(index % 12) * 0.05}s` : '0s' }}
            >
              <div 
                className="project-image-wrapper"
                onClick={() => setLightboxImage(project)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay"></div>
                <div className="project-zoom-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
              
              <div className={`project-content ${language === 'urdu' ? 'urdu-text' : ''}`}>
                <span className="project-category">
                  {project.category}
                </span>
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="projects-button-container">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className={`projects-show-more-btn ${language === 'urdu' ? 'urdu-text' : ''}`}
          >
            {showAll ? t.projectsBtnLess : t.projectsBtn}
            <svg 
              className="projects-arrow"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close" 
                onClick={() => setLightboxImage(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img 
                src={lightboxImage.image} 
                alt={lightboxImage.title}
                className="lightbox-image"
              />
              <div className={`lightbox-info ${language === 'urdu' ? 'urdu-text' : ''}`}>
                <span className="lightbox-category">{lightboxImage.category}</span>
                <h3 className="lightbox-title">{lightboxImage.title}</h3>
                <p className="lightbox-description">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
