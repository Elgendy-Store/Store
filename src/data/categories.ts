import { Category } from '../types/types';
import mobcategoryimg from '../assets/Mobile Accessories cover image.webp';
import comcategoryimg from '../assets/Computer Accessories cover image.jpeg';
import homcategoryimg from '../assets/Small Home Electronics cover image.jpg';

export const categories: Category[] = [
  {
    id: '1',
    name: 'إكسسوارات الموبايل',
    englishName: 'Mobile Accessories',
    image: mobcategoryimg,
    subcategories: [
      {
        id: '1-1',
        name: 'سماعات',
        englishName: 'Headphones',
      },
      {
        id: '1-2',
        name: 'شواحن',
        englishName: 'Chargers',
      },
      {
        id: '1-3',
        name: 'حافظات وأغطية',
        englishName: 'Cases and Covers',
      },
      {
        id: '1-4',
        name: 'حوامل وستاندات',
        englishName: 'Stands and Holders',
      },
    ],
  },
  {
    id: '2',
    name: 'إكسسوارات الكمبيوتر',
    englishName: 'Computer Accessories',
    image: comcategoryimg,
    subcategories: [
      {
        id: '2-1',
        name: 'لوحات مفاتيح',
        englishName: 'Keyboards',
      },
      {
        id: '2-2',
        name: 'ماوس وأجهزة تأشير',
        englishName: 'Mice and Pointing Devices',
      },
      {
        id: '2-3',
        name: 'سماعات',
        englishName: 'Headsets',
      },
      {
        id: '2-4',
        name: 'شاشات',
        englishName: 'Monitors',
      },
    ],
  },
  {
    id: '3',
    name: 'إلكترونيات منزلية صغيرة',
    englishName: 'Small Home Electronics',
    image: homcategoryimg,
    subcategories: [
      {
        id: '3-2',
        name: 'أجهزة الصوت والموسيقى',
        englishName: 'Audio and Music Devices',
      },
      {
        id: '3-3',
        name: 'أدوات منزلية ذكية',
        englishName: 'Smart Home Devices',
      },
    ],
  },
];

export const getAllCategories = () => {
  return categories;
};

export const getCategoryById = (id: string) => {
  return categories.find(category => category.id === id);
};

export const getSubcategoriesByCategoryId = (categoryId: string) => {
  const category = getCategoryById(categoryId);
  return category?.subcategories || [];
};