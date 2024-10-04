"use client";

import React from 'react';
import CustomTableDetail from '../components/CustomTableDetail/CustomTableDetail';
import { newsService, News } from '@/app/services/newsService';
import Image from 'next/image';
import { ColumnDefinition } from '../components/CustomTableDetail/CustomTableDetail.types';
import CustomWidget from '../components/CustomWidget';
import { Newspaper } from 'lucide-react';

// Extendemos News para que cumpla con Record<string, unknown>
type NewsItem = News & Record<string, unknown>;

const NewsPage: React.FC = () => {
  const [news, setNews] = React.useState<NewsItem[]>([]);

  React.useEffect(() => {
    const fetchNews = async () => {
      const newsData = await newsService.getNews();
      setNews(newsData as NewsItem[]);
    };
    fetchNews();
  }, []);

  const columns: ColumnDefinition<NewsItem>[] = [
    {
      key: 'origin',
      header: 'Origen',
      initialWidth: 48,
      render: (value) => (
        <div className="flex items-center justify-center w-12">
          <Image 
            src={value as string} 
            alt="Origen" 
            width={24} 
            height={24} 
            className="rounded-full dark:invert dark:brightness-200 transition-all duration-200" 
          />
        </div>
      ),
    },
    {
      key: 'date',
      header: 'Fecha',
      initialWidth: 80,
    },
    {
      key: 'time',
      header: 'Hora',
      initialWidth: 80,
    },
    {
      key: 'title',
      header: 'Título de noticia',
      initialWidth: 800,
    },
    {
      key: 'description',
      header: 'Descripción',
      isDetail: true,
      initialWidth: 600,
    },
  ];

  const handleRowClick = async (row: NewsItem) => {
    if (row.hasDescription && !row.description) {
      const newsWithDescription = await newsService.getDescriptionNews(row.id);
      if (newsWithDescription) {
        setNews(prevNews => prevNews.map(item => 
          item.id === newsWithDescription.id ? {...item, ...newsWithDescription} : item
        ));
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-background text-foreground dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <h1 className="text-3xl font-bold mb-6 text-primary dark:text-primary-dark">Noticias</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-200">
        <CustomWidget 
          content={
            <CustomTableDetail<NewsItem>
              data={news}
              columns={columns}
              onRowClick={handleRowClick}
              className="text-gray-800 dark:text-gray-100"
            />
          } 
          title="Noticias de Mercados" 
          icon={Newspaper} 
        />            

      </div>
    </div>
  );
};

export default NewsPage;